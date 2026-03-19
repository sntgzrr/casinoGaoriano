import { Newspaper, Calendar, Bell } from "lucide-react";
import { NewsCard } from "./NewsCard";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

export function News({ news }) {
    const container = useSplitTextAnimation();
    return (
        <section id="informacion" ref={container} className="py-20 px-4 bg-gray-900">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Newspaper className="text-amber-400" size={32} />
                        <h2 className="split-text-chars text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            Información
                        </h2>
                    </div>
                    <p className="split-text-words text-gray-400 text-lg max-w-2xl mx-auto">
                        Mantente informado sobre eventos, actividades y novedades
                    </p>
                </div>

                {/* Featured News */}
                <div className="mb-12">
                    <div className="bg-gradient-to-r from-amber-900/30 to-amber-950/30 rounded-2xl overflow-hidden border border-amber-900/40 hover:border-amber-500/50 transition-all">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative h-80 md:h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1763656444446-e35098b7869a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMGNlcmVtb255JTIwZXZlbnR8ZW58MXx8fHwxNzcyMzgzOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="Ceremonia Aniversario"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                                    DESTACADO
                                </div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center space-x-2 text-amber-400 mb-3">
                                    <Calendar size={16} />
                                    <span className="text-sm">15 de Marzo, 2026</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    50° Aniversario del Casino Militar
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Celebramos cinco décadas de servicio a nuestra comunidad militar. Únete a nosotros para
                                    una ceremonia especial seguida de una cena de gala. Evento abierto a todos los miembros
                                    y sus familias. Inscripciones abiertas hasta el 10 de marzo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {news.map((item, index) => (
                        <NewsCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            imageUrl={item.imageUrl}
                            imageAlt={item.imageAlt}
                            category={item.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
