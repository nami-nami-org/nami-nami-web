import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  description: string;
  time: string;
  price: number;
  quantity: number;
  image: string;
}

interface Props {
  cartItems: CartItem[];
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
}

export default function CartItemsList({ cartItems, updateQuantity, removeItem }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-h2 font-bold">Tus Platillos</h2>
        <span className="text-fn2 bg-bg2 px-4 py-2 rounded-full font-medium">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-bg2 rounded-2xl p-6 flex gap-6 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-tn2"
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-28 h-28 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-bold text-lg text-fn1 mb-1">{item.name}</h3>
                  <p className="text-fn2 text-sm mb-1">{item.description}</p>
                  <p className="text-fn2 text-xs flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 bg-tn1 rounded-full"></span>
                    {item.time}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-fn2 hover:text-tn1 transition-colors p-2 hover:bg-bg3 rounded-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3 bg-bg1 rounded-xl px-3 py-2 border border-bg3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="text-fn1 hover:text-tn1 transition-colors p-1"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold min-w-[24px] text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="text-fn1 hover:text-tn1 transition-colors p-1"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="font-bold text-xl text-tn1">
                  S/ {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
