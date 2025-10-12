import { BrandCard } from "@/presentation/next-to-me/components/brand-card"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-gray-900">Restaurantes cerca de ti</h1>

        <div className="flex flex-wrap gap-4">
          <BrandCard
            logo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G3QubWt1vwbTnrtedBxpYhhAJFZNQu.png"
            name="McDonald's"
            rating={4.9}
            alt="Logo de McDonald's"
          />

          <BrandCard logo="/generic-coffee-logo.png" name="Starbucks" rating={4.7} alt="Logo de Starbucks" />

          <BrandCard logo="/burger-king-logo.png" name="Burger King" rating={4.5} alt="Logo de Burger King" />
        </div>
      </div>
    </main>
  )
}
