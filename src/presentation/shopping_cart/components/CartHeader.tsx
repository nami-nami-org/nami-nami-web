"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface CartHeaderProps {
  activeStep?: number;
}

export default function CartHeader({ activeStep = 0 }: CartHeaderProps) {
  const steps = ["Mi Carrito", "Pago", "Confirmación"];

  return (
    <header className="bg-bg2 border-b border-bg3 py-6 px-4 md:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-tn1 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-fnA" />
            </div>
            <h1 className="text-h1 font-bold">Mi Carrito</h1>
          </div>
          <Link
            href="/"
            className="text-fn2 hover:text-tn1 transition-colors font-medium"
          >
            Volver
          </Link>
        </div>

        {/* Progreso */}
        <div className="flex items-center justify-center gap-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  i === activeStep ? "bg-tn1 text-fnA" : "bg-bg3 text-fn2"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`font-semibold ${
                  i === activeStep ? "text-tn1" : "text-fn2"
                }`}
              >
                {step}
              </span>
              {i < steps.length - 1 && <div className="w-16 h-0.5 bg-bg3"></div>}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}