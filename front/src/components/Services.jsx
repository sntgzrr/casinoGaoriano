import { Sparkles } from "lucide-react"

export function Services() {
    return (
        <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                        Nuestros Servicios
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Experimenta lo mejor en entretenimiento, gastronomía y relajación
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 h-200">
                        <div className="bg-blue-500 md:row-span-4">Bar Tomo</div>
                        <div className="bg-green-500 md:col-span-1 md:row-span-2">Piscina</div>
                        <div className="bg-yellow-500 md:col-span-1 md:row-span-2">Cara Cara</div>
                        <div className="bg-yellow-500 md:col-span-2 md:row-span-2">Casino Suboficiales</div>
                        <div className="bg-yellow-500 md:col-span-3 md:row-span-15">Casino Oficiales</div>
                    </div>
                </div>
                        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-900/20 to-amber-950/20 p-8 rounded-xl border border-amber-900/30">
            <Sparkles className="text-amber-400 mb-4" size={32} />
            <h4 className="text-xl font-bold text-amber-400 mb-2">Servicio VIP</h4>
            <p className="text-gray-400">Atención personalizada las 24 horas del día para garantizar tu comodidad.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-900/20 to-amber-950/20 p-8 rounded-xl border border-amber-900/30">
            <Sparkles className="text-amber-400 mb-4" size={32} />
            <h4 className="text-xl font-bold text-amber-400 mb-2">Eventos Exclusivos</h4>
            <p className="text-gray-400">Torneos, fiestas temáticas y presentaciones de artistas internacionales.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-900/20 to-amber-950/20 p-8 rounded-xl border border-amber-900/30">
            <Sparkles className="text-amber-400 mb-4" size={32} />
            <h4 className="text-xl font-bold text-amber-400 mb-2">Instalaciones Premium</h4>
            <p className="text-gray-400">Espacios diseñados con los más altos estándares de lujo y confort.</p>
          </div>
        </div>
            </div>
        </section>
    )
}