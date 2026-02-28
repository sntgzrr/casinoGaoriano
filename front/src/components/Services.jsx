import { useNavigate } from "react-router-dom"
import { Sparkles } from "lucide-react"
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation"

export function Services() {
    const navigate = useNavigate()
    const container = useSplitTextAnimation();
    return (
        <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900" ref={container}>
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="split-text-chars text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                        Nuestros Servicios
                    </h2>
                    <p className="split-text-words text-gray-400 text-lg max-w-2xl mx-auto">
                        Experimenta lo mejor en entretenimiento, gastronomía y relajación
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 h-200">
                        <div onClick={() => navigate('/barTomo')} className="bg-blue-500 md:row-span-4 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">Bar Tomo</div>
                        <div className="bg-green-500 md:col-span-1 md:row-span-2 rounded-lg cursor-pointer hover:bg-green-600 transition-colors">Piscina</div>
                        <div className="bg-yellow-500 md:col-span-1 md:row-span-2 rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors">Cara Cara</div>
                        <div className="bg-yellow-500 md:col-span-2 md:row-span-2 rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors">Casino Suboficiales</div>
                        <div className="bg-yellow-500 md:col-span-1 md:row-span-20 rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors">Mall</div>
                        <div className="bg-yellow-500 md:col-span-1 md:row-span-20 rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors">Casino Oficiales</div>
                        <div className="bg-yellow-500 md:col-span-1 md:row-span-20 rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors">Bar Skyline</div>
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
        <div className="mt-12 bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-8 rounded-xl border border-amber-900/30">
          <h3 className="text-2xl font-bold text-amber-400 mb-4 text-center">Desarranche</h3>
          <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto">
            Para realizar el desarranche, por favor llena el formulario en nuestro sitio web. En caso de alguna duda, nuestro equipo estará en el casino encantado de asistirte.
          </p>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50">
              Llenar Formulario Desarranche
            </button>
          </div>
        </div>
        </section>
    )
}