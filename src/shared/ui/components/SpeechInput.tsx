'use client'

import { Mic, MicOff } from 'lucide-react'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import Vosk from 'vosk-browser'

interface SpeechInputProps {
  onResult?: (text: string) => void
}

function SpeechInputComponent({ onResult }: SpeechInputProps) {
  const modelRef = useRef<Vosk.Model | null>(null)
  const recognizerRef = useRef<Vosk.KaldiRecognizer | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const nodeRef = useRef<ScriptProcessorNode | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const silenceTimer = useRef<NodeJS.Timeout | null>(null)
  const [ready, setReady] = useState(false)
  const [listening, setListening] = useState(false)

  // Carga el modelo solo una vez
  useEffect(() => {
    const loadModel = async () => {
      const model = await Vosk.createModel('/models/vosk-model-small-es-0.42.zip')
      modelRef.current = model
      const recognizer = new model.KaldiRecognizer(16000)
      recognizerRef.current = recognizer

      recognizer.on('result', (msg: any) => {
        if (msg.result?.text?.trim()) {
          onResult?.(msg.result.text)
        }
      })

      recognizer.on('partialresult', (msg: any) => {
        if (msg.result?.partial) {
          onResult?.(msg.result.partial)
        }
      })

      setReady(true)
    }

    loadModel()

    // Limpieza al desmontar
    return () => {
      stop()
      if (audioContextRef.current?.state !== 'closed') {
        audioContextRef.current?.close()
      }
    }
  }, [onResult])

  // Inicia la escucha
  const start = useCallback(async () => {
    if (!ready || !modelRef.current) return

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          channelCount: 1,
          sampleRate: 16000
        }
      })

      const audioContext = new AudioContext({ sampleRate: 16000 })
      const source = audioContext.createMediaStreamSource(stream)
      const node = audioContext.createScriptProcessor(4096, 1, 1)

      node.onaudioprocess = (e: AudioProcessingEvent) => {
        const input = e.inputBuffer.getChannelData(0)
        const maxVolume = Math.max(...Array.from(input).map(v => Math.abs(v)))

        if (maxVolume < 0.01) {
          clearTimeout(silenceTimer.current!)
          silenceTimer.current = setTimeout(stop, 2500)
        } else {
          clearTimeout(silenceTimer.current!)
        }

        try {
          recognizerRef.current?.acceptWaveform(e.inputBuffer)
        } catch (err) {
          console.error('Error al procesar audio:', err)
        }
      }

      source.connect(node)
      node.connect(audioContext.destination)

      streamRef.current = stream
      audioContextRef.current = audioContext
      nodeRef.current = node
      setListening(true)
    } catch (err) {
      console.error('Error al iniciar el micrófono:', err)
    }
  }, [ready])

  // Detiene la escucha
  const stop = useCallback(() => {
    clearTimeout(silenceTimer.current!)
    nodeRef.current?.disconnect()
    streamRef.current?.getTracks().forEach(track => track.stop())
    audioContextRef.current?.close()
    setListening(false)
  }, [])

  // Alterna entre iniciar/detener
  const toggle = useCallback(() => {
    listening ? stop() : start()
  }, [listening, start, stop])

  return (
    <button
      onClick={toggle}
      disabled={!ready}
      className={`rounded-full px-2 shadow transition ${listening ? 'text-tn1 animate-pulse' : 'text-gray-700'}`}
    >
      {listening ? <MicOff size={15} /> : <Mic size={15} />}
    </button>
  )
}

export const SpeechInput = memo(SpeechInputComponent)
