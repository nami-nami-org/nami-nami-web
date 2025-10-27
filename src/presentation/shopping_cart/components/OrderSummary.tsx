"use client"
import React from "react"
import { CreditCard } from "lucide-react"
import { useRouter } from "next/navigation"

interface Props {
  subtotal: number
  envio: number
  servicio: number
  total: number
}

export default function OrderSummary({ subtotal, envio, servicio, total }: Props) {
  const router = useRouter()

  const handlePayment = () => {
    router.push("/payment-cart")
  }

  return (
    <div className="bg-bg2 rounded-2xl p-8 shadow-md sticky top-6 border border-bg3">
      <h3 className="font-bold text-h3 mb-6 flex items-center gap-2">
        <CreditCard className="w-5 h-5 text-tn1" />
        Resumen del Pedido
      </h3>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-fn2">Sub Total</span>
          <span className="font-semibold text-lg">S/ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-fn2">Gasto de Envío</span>
          <span className="font-semibold text-lg">S/ {envio.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-tn1">
          <span className="font-medium">Descuento de Servicio</span>
          <span className="font-semibold text-lg">- S/ {servicio.toFixed(2)}</span>
        </div>
      </div>

      <div className="border-t-2 border-bg3 pt-6 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-h3">Total</span>
          <span className="font-bold text-h2 text-tn1">S/ {total.toFixed(2)}</span>
        </div>
      </div>

      <button
        className="w-full bg-tn1 text-fnA py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity mb-3 shadow-md"
        onClick={handlePayment}
      >
        Procesar Pago
      </button>

      <button className="w-full border-2 border-tn1 text-tn1 py-4 rounded-xl font-bold hover:bg-tn1 hover:text-fnA transition-all">
        Descuento (NUEVO)
      </button>

      <p className="text-xs text-fn2 text-center mt-4 leading-relaxed">
        Al procesar, aceptas nuestros términos y condiciones
      </p>
    </div>
  )
}