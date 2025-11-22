'use client'

import { Copy, Download, QrCode } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

interface QRPaymentSectionProps {
  total: number
}

export default function QRPaymentSection({ total }: QRPaymentSectionProps) {
  const [qrData, setQrData] = useState('')
  const [countdown, setCountdown] = useState(300) // 5 minutos

  useEffect(() => {
    // Generar QR único
    const orderNumber = `NN-${Date.now().toString().slice(-8)}`
    const qrString = `NAMI-NAMI|ORDER:${orderNumber}|AMOUNT:${total.toFixed(2)}|TIME:${Date.now()}`
    setQrData(qrString)

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [total])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleCopyQR = () => {
    navigator.clipboard.writeText(qrData)
    toast.success('Código QR copiado', {
      description: 'Pégalo en tu app de pago'
    })
  }

  return (
    <div className='space-y-6'>
      {/* QR Code */}
      <div className='bg-bg1 border-bg3 flex items-center justify-center rounded-2xl border p-8'>
        <div className='bg-white h-64 w-64 rounded-xl p-4 shadow-lg'>
          <div className='flex h-full w-full items-center justify-center'>
            <div className='text-center'>
              <QrCode className='text-fn2 mx-auto mb-2 h-32 w-32' />
              <p className='text-fn2 break-all text-xs font-mono'>{qrData.slice(0, 30)}...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timer */}
      <div className='bg-tn1/10 border-tn1/30 rounded-xl border p-4 text-center'>
        <p className='text-fn2 mb-1 text-xs'>Tiempo restante</p>
        <p className={`font-mono text-2xl font-bold ${countdown < 60 ? 'text-red-500' : 'text-tn1'}`}>
          {formatTime(countdown)}
        </p>
      </div>

      {/* Botón copiar */}
      <button
        onClick={handleCopyQR}
        className='border-bg3 text-fn1 hover:bg-bg2 flex w-full items-center justify-center gap-2 rounded-xl border py-3 font-semibold transition-all'
      >
        <Copy className='h-5 w-5' />
        <span>Copiar código QR</span>
      </button>

      {/* Instrucciones */}
      <div className='bg-blue-500/10 border-blue-500/30 rounded-lg border p-4'>
        <p className='text-fn1 mb-2 text-sm font-semibold'>📱 Instrucciones:</p>
        <ol className='text-fn2 space-y-1 text-xs'>
          <li>1. Abre tu app de banca móvil</li>
          <li>2. Selecciona Pagar con QR</li>
          <li>3. Escanea este código</li>
          <li>4. Confirma el pago</li>
        </ol>
      </div>
    </div>
  )
}