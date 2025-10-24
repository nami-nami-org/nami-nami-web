"use client";

import { ShoppingCart, AlertCircle } from "lucide-react";
import CartHeader from "@/presentation/shopping_cart/components/CartHeader";
import { useCartStore } from "@/core/store/shopping_cart.store"; // ajusta la ruta a donde esté tu store

export default function CarritoPage() {
  const { items: cartItems, getTotal } = useCartStore();

  // Si el carrito está vacío
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-bg1">
        <CartHeader activeStep={2} />
        <div className="flex flex-col items-center justify-center py-20 text-center text-fn2">
          <ShoppingCart className="w-12 h-12 text-tn1 mb-4" />
          <p className="text-lg font-semibold">Tu carrito está vacío.</p>
          <p className="text-sm text-fn3 mt-1">Agrega productos para continuar con el pago.</p>
        </div>
      </div>
    );
  }

  // Calcular subtotal, IGV, envío y total
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const igv = subtotal * 0.18;
  const shippingCost = 5.0;
  const discountAmount = 0;
  const total = subtotal + igv + shippingCost - discountAmount;

  return (
    <div className="min-h-screen bg-bg1">
      {/* Cabecera */}
      <CartHeader activeStep={2} />

      {/* Contenido */}
      <div className="py-10 px-4 md:px-8 flex justify-center">
        <div className="max-w-2xl w-full bg-bg2 rounded-2xl p-8 shadow-lg border border-bg3">
          {/* Encabezado del resumen */}
          <div className="flex items-center justify-between border-b border-bg3 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-tn1 rounded-full flex items-center justify-center shadow-md">
                <ShoppingCart className="w-6 h-6 text-fnA" />
              </div>
              <div>
                <h1 className="text-h2 font-bold text-fn1">Resumen del Pedido</h1>
                <p className="text-fn2 text-sm">Detalle completo de tu compra</p>
              </div>
            </div>
          </div>

          {/* Productos */}
          <div className="space-y-4 mb-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-start border-b border-bg3 pb-3">
                <div className="flex-1">
                  <p className="font-semibold text-fn1">{item.name}</p>
                  <p className="text-xs text-fn2">{item.description}</p>
                  <p className="text-xs text-fn2">Cantidad: {item.quantity}</p>
                </div>
                <p className="font-bold text-tn1 text-sm">
                  S/ {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Totales */}
          <div className="space-y-3 text-sm border-t border-bg3 pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-fn2">Subtotal</span>
              <span className="font-semibold text-fn1">S/ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center bg-tn1/10 px-3 py-2 rounded-lg border border-tn1/20">
              <span className="text-fn2">IGV (18%)</span>
              <span className="font-bold text-tn1">S/ {igv.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-fn2">Costo de Envío</span>
              <span className="font-semibold text-fn1">S/ {shippingCost.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between items-center text-tn1">
                <span>Descuento</span>
                <span className="font-bold">- S/ {discountAmount.toFixed(2)}</span>
              </div>
            )}
          </div>

          {/* Total final */}
          <div className="bg-gradient-to-r from-tn1/10 to-tn2/10 rounded-xl p-6 border border-tn1/20 mb-6">
            <p className="text-fn2 text-sm mb-2">Monto Total a Pagar</p>
            <p className="text-h1 font-bold text-tn1">S/ {total.toFixed(2)}</p>
          </div>

          {/* Botón principal */}
          <button className="w-full bg-tn1 text-fnA py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
            Confirmar Pedido
          </button>

          {/* Nota */}
          <div className="flex gap-3 bg-bg1 p-4 rounded-lg border border-bg3 mt-6">
            <AlertCircle className="w-5 h-5 text-tn1 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-fn2 leading-relaxed">
              Tu pedido ha sido registrado correctamente. Recibirás una confirmación por correo o WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
