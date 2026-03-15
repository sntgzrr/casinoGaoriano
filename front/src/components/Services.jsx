import { useNavigate } from "react-router-dom"
import { Sparkles } from "lucide-react"
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation"

export function Services() {
    const navigate = useNavigate()
    const container = useSplitTextAnimation();
    return (
        <section id="services" className="py-20 px-4 bg-gray-900" ref={container}>
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
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 auto-rows-[20rem] md:auto-rows-auto">
                        <div onClick={() => navigate('/barTomo')} className="bg-blue-500 md:row-span-4 md:row-span-27 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden bg-[url('../assets/barTomoImages/barTomo1.png')] bg-cover bg-contain bg-no-repeat">
                            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">Bar Tomo</span>
                        </div>
                        <div onClick={() => navigate('/piscina')} className="bg-blue-500 md:col-span-1 md:row-span-12 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden bg-[url('../assets/piscina/piscina1.png')] bg-cover bg-contain bg-no-repeat">
                            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">Piscina</span>
                        </div>
                        <div onClick={() => navigate('/caraCara')} className="bg-blue-500 md:col-span-1 md:row-span-12 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden bg-[url('../assets/piscina/piscina1.png')] bg-cover bg-contain bg-no-repeat">
                            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">Cara Cara</span>
                        </div>
                        <div onClick={() => navigate('/casinos')} className="bg-blue-500 md:col-span-2 md:row-span-15 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden bg-[url('../assets/piscina/piscina1.png')] bg-cover bg-contain bg-no-repeat">
                            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">Casinos</span>
                        </div>
                        <div onClick={() => navigate('/mall')} className="bg-blue-500 md:col-span-1 md:row-span-25 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden bg-[url('../assets/piscina/piscina1.png')] bg-cover bg-contain bg-no-repeat">
                            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">Mall</span>
                        </div>
                        <div onClick={() => navigate('/barArpia')} className="bg-blue-500 md:col-span-1 md:row-span-25 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden bg-[url('../assets/piscina/piscina1.png')] bg-cover bg-contain bg-no-repeat">
                            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">Bar Arpía</span>
                        </div>
                        <div onClick={() => navigate('/barSkyline')} className="bg-blue-500 md:col-span-1 md:row-span-25 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden bg-[url('../assets/piscina/piscina1.png')] bg-cover bg-contain bg-no-repeat">
                            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">Bar Skyline</span>
                        </div>
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