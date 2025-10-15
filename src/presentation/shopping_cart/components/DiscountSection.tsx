interface Props {
  discountCode: string;
  setDiscountCode: (v: string) => void;
}

export default function DiscountSection({ discountCode, setDiscountCode }: Props) {
  return (
    <div className="bg-bg2 rounded-2xl p-8 shadow-sm">
      <h3 className="font-bold text-h3 mb-6">¿Agregar algo más?</h3>

      <label className="block text-sm font-medium mb-3">Código de Descuento</label>
      <div className="flex gap-3 mb-8">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="flex-1 px-5 py-3 bg-bg1 rounded-xl border-2 border-bg3 focus:border-tn1 focus:outline-none transition-colors"
          placeholder="Ingresa tu código"
        />
        <button className="px-8 py-3 bg-tn1 text-fnA rounded-xl font-bold hover:opacity-90 transition-opacity shadow-sm">
          Aplicar
        </button>
      </div>
    </div>
  );
}
