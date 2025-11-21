"use client"
import React from "react"

interface Props {
  selectedPayment: string | null
  setSelectedPayment: (value: string) => void
}

export default function PaymentMethods({ selectedPayment, setSelectedPayment }: Props) {
  return (
    <div className="bg-bg2 rounded-2xl p-8 shadow-md border border-bg3">
      <h3 className="font-bold text-h3 mb-6">Métodos de Pago</h3>

      {/* Botones principales */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => setSelectedPayment("pago-qr")}
          className={`p-5 rounded-xl border-2 transition-all ${
            selectedPayment === "pago-qr"
              ? "border-tn1 bg-tn1/10 shadow-sm"
              : "border-bg3 hover:border-tn2 hover:bg-bg1"
          }`}
        >
          <div className="text-3xl mb-2">📱</div>
          <div className="text-sm font-bold">Pago con QR</div>
          {selectedPayment === "pago-qr" && (
            <div className="mt-2 text-tn1 text-xs">✓ Seleccionado</div>
          )}
        </button>

        <button
          onClick={() => setSelectedPayment("pago-tarjeta")}
          className={`p-5 rounded-xl border-2 transition-all ${
            selectedPayment === "pago-tarjeta"
              ? "border-tn1 bg-tn1/10 shadow-sm"
              : "border-bg3 hover:border-tn2 hover:bg-bg1"
          }`}
        >
          <div className="text-3xl mb-2">💳</div>
          <div className="text-sm font-bold">Pago con Tarjeta</div>
          {selectedPayment === "pago-tarjeta" && (
            <div className="mt-2 text-tn1 text-xs">✓ Seleccionado</div>
          )}
        </button>
      </div>

      {/* Mensaje de método seleccionado */}
      {selectedPayment && (
        <div className="bg-tn1/10 border-tn1/30 border rounded-xl p-4">
          <p className="text-fn1 text-sm font-semibold">
            {selectedPayment === "pago-qr" 
              ? "📱 Pagarás con código QR" 
              : "💳 Pagarás con tarjeta de crédito/débito"}
          </p>
        </div>
      )}
    </div>
  )
}