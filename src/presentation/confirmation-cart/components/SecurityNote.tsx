import { Lock } from 'lucide-react'

export default function SecurityNote() {
  return (
    <div className='bg-green-500/10 border-green-500/30 mt-6 flex gap-3 rounded-lg border p-3'>
      <Lock className='text-green-600 dark:text-green-400 mt-0.5 h-4 w-4 flex-shrink-0' />
      <p className='text-green-600 dark:text-green-400 text-xs'>
        Tu información está protegida con encriptación SSL de 256 bits
      </p>
    </div>
  )
}