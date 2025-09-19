"use client";
import { Home, ShoppingBag, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const navItems = [
    { label: "Inicio", icon: <Home size={22} />, path: "/" },
    { label: "Pedidos", icon: <ShoppingBag size={22} />, path: "/pedidos" },
    { label: "Perfil", icon: <User size={22} />, path: "/perfil" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-neutral-800 border-t border-neutral-700 shadow-md flex justify-around py-2 z-50">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => router.push(item.path)}
          className="flex flex-col items-center text-gray-300 hover:text-red-400 transition"
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </footer>
  );
}
