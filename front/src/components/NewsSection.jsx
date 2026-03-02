import { Newspaper, Calendar, Bell } from "lucide-react";
import { NewsCard } from "./NewsCard";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

export function NewsSection({ section }) {
    const container = useSplitTextAnimation();
    return (
        <section id="informacion" ref={container} className="py-20 px-4 bg-gray-900">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Newspaper className="text-amber-400" size={32} />
                        <h2 className="split-text-chars text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            Información {section}
                        </h2>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <NewsCard
                        title="Nuevos Horarios de Piscina"
                        description="A partir del 1 de marzo, la piscina recreativa extenderá su horario de atención los fines de semana."
                        date="1 de Marzo, 2026"
                        imageUrl="https://images.unsplash.com/photo-1768573264144-065ef8ad5638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBzZXJ2aWNlJTIwYW5ub3VuY2VtZW50fGVufDF8fHx8MTc3MjM4Mzk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Nuevos Horarios"
                        category="Anuncio"
                    />

                    <NewsCard
                        title="Torneo Natación"
                        description="El 20 de marzo se llevará a cabo un torneo de natación para todas las edades. Inscripciones abiertas hasta el 15 de marzo."
                        date="20 de Marzo, 2026"
                        imageUrl="https://images.unsplash.com/photo-1715000780536-1f3f368b8587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2xhc3MlMjBjaGVmfGVufDF8fHx8MTc3MjM4Mzk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Taller de Cocina"
                        category="Cultura"
                    />

                    <NewsCard
                        title="Mantenimiento Zona Piscina"
                        description="Del 5 al 7 de marzo, la zona de la piscina estará cerrada por trabajos de renovación."
                        date="5 de Marzo, 2026"
                        imageUrl="https://images.unsplash.com/photo-1768573264144-065ef8ad5638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBzZXJ2aWNlJTIwYW5ub3VuY2VtZW50fGVufDF8fHx8MTc3MjM4Mzk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Mantenimiento"
                        category="Aviso"
                    />
                </div>

                {/* Info Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/20 rounded-xl p-8 border border-blue-900/30">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Bell className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Horarios Especiales</h3>
                                <p className="text-gray-300">
                                    Durante la semana del aniversario (10-15 marzo), todos los servicios tendrán horario
                                    extendido hasta las 23:00 hrs. El restaurante ofrecerá menú especial conmemorativo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-900/20 to-amber-950/20 rounded-xl p-8 border border-amber-900/30">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Calendar className="text-amber-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-amber-400 mb-2">Horarios Mantenimiento</h3>
                                <p className="text-gray-300">
                                    Durante el mes de marzo, se realizarán trabajos de mantenimiento en la zona de la piscina.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
