import { Button } from "@/shared/ui/components/button"
import { Card, CardContent } from "@/shared/ui/components/card"
import cardTerminos from "@/app/db_card/terms_cards.json"
import Nav from '@/shared/ui/components/Nav'

const emojiBgColors = [
  "bg-yellow-100",
  "bg-blue-100",
  "bg-red-100",
  "bg-pink-100",
  "bg-green-100",
  "bg-indigo-100",
  "bg-orange-100",
  "bg-teal-100",
  "bg-gray-100"
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#faf7f5]">
      {/* Header */}
      <Nav/>

      {/* Promotional Banner */}
      <div className="bg-[#fbeee2] border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">👤</span>
              </div>
              <span className="text-sm text-gray-700">
                Descubre todos tus beneficios: <strong>tu cocinas con Nami Nami</strong> y nosotros nos encargamos del resto.
              </span>
            </div>
            <Button variant="link" className="text-red-500 text-sm font-semibold">
              Registrar mi local <span className="ml-1">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Términos y condiciones de uso</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Antes de continuar, necesitamos tu consentimiento para garantizar una experiencia segura, justa y transparente dentro de Nami Nami.
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow">
            <span className="text-2xl mr-2">✅</span>
            Aceptar y continuar
          </Button>
        </div>

        {/* Information Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {cardTerminos.map((card, idx) => (
            <Card
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 h-full flex flex-col justify-between min-h-[220px] transition hover:shadow-md"
            >
              <CardContent className="flex-1 flex flex-col p-0">
                <div className="flex items-center space-x-3 mb-4">
                  {/* Emoji destacado con fondo colorido */}
                  <div className={`w-12 h-12 ${emojiBgColors[idx % emojiBgColors.length]} rounded-full flex items-center justify-center shadow text-3xl`}>
                    {card.emoji}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base">{card.title}</h3>
                </div>
                <div className="text-sm text-gray-700 flex-1">
                  <p>{card.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}