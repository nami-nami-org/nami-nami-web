"use client"
import React from "react"
import { CreditCard, Smartphone, MapPin } from "lucide-react"

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
        </button>

        <button
          onClick={() => setSelectedPayment("pago-efectivo")}
          className={`p-5 rounded-xl border-2 transition-all ${
            selectedPayment === "pago-efectivo"
              ? "border-tn1 bg-tn1/10 shadow-sm"
              : "border-bg3 hover:border-tn2 hover:bg-bg1"
          }`}
        >
          <div className="text-3xl mb-2">💵</div>
          <div className="text-sm font-bold">Pago Efectivo</div>
        </button>
      </div>

      {/* Métodos adicionales */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-4 bg-bg1 rounded-xl hover:bg-bg3 hover:shadow-sm transition-all border border-transparent hover:border-tn2 group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-bg2 rounded-lg flex items-center justify-center group-hover:bg-tn1/10 transition-colors">
              <CreditCard className="w-5 h-5 text-tn1" />
            </div>
            <span className="text-sm font-semibold">Tarjeta de Crédito / Débito</span>
          </div>
        </button>

        <button className="w-full flex items-center justify-between p-4 bg-bg1 rounded-xl hover:bg-bg3 hover:shadow-sm transition-all border border-transparent hover:border-tn2 group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-bg2 rounded-lg flex items-center justify-center group-hover:bg-tn1/10 transition-colors">
              <Smartphone className="w-5 h-5 text-tn1" />
            </div>
            <span className="text-sm font-semibold">Banca Móvil / Pago en Línea</span>
          </div>
        </button>

        <button className="w-full flex items-center justify-between p-4 bg-bg1 rounded-xl hover:bg-bg3 hover:shadow-sm transition-all border border-transparent hover:border-tn2 group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-bg2 rounded-lg flex items-center justify-center group-hover:bg-tn1/10 transition-colors">
              <span className="text-xl">💜</span>
            </div>
            <span className="text-sm font-semibold">Yape</span>
          </div>
          <span className="text-tn1 text-sm font-bold">Ligar</span>
        </button>

        <button className="w-full flex items-center justify-between p-4 bg-bg1 rounded-xl hover:bg-bg3 hover:shadow-sm transition-all border border-transparent hover:border-tn2 group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-bg2 rounded-lg flex items-center justify-center group-hover:bg-tn1/10 transition-colors">
              <MapPin className="w-5 h-5 text-tn1" />
            </div>
            <span className="text-sm font-semibold">Envío Local</span>
          </div>
        </button>
      </div>
    </div>
  )
}
