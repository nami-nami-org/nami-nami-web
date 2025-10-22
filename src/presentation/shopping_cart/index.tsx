"use client";

import { useState } from "react";
import CartHeader from "./components/CartHeader";
import CartItemsList from "./components/CartItemsList";
import DiscountSection from "./components/DiscountSection";
import RecommendedDishes from "./components/RecommendedDishes";
import OrderSummary from "./components/OrderSummary";
import PaymentMethods from "./components/PaymentMethods";

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Arroz con Pollo",
      description: "Taza Vicentina",
      time: "25 - 20 min",
      price: 14.0,
      quantity: 3,
      image: "/arroz-con-pollo-peruano.jpg",
    },
    {
      id: 2,
      name: "Arroz con Pollo",
      description: "Taza Vicentina",
      time: "25 - 20 min",
      price: 14.0,
      quantity: 3,
      image: "/arroz-con-pollo-peruano.jpg",
    },
  ]);

  const [discountCode, setDiscountCode] = useState("");
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 4.4;
  const serviceFee = 2.0;
  const total = subtotal + shippingCost - serviceFee;

  return (
    <div className="min-h-screen bg-bg1">
      <CartHeader />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
          <div className="space-y-8">
            <CartItemsList
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
            <DiscountSection
              discountCode={discountCode}
              setDiscountCode={setDiscountCode}
            />
            <RecommendedDishes />
          </div>

          <div className="space-y-6">
            <OrderSummary
              subtotal={subtotal}
              envio={shippingCost}   
              servicio={serviceFee}
              total={total}
            />
            <PaymentMethods
              selectedPayment={selectedPayment}
              setSelectedPayment={setSelectedPayment}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
