import { Newspaper, Calendar, Bell } from "lucide-react";
import { NewsCard } from "./NewsCard";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

export function News() {
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
                        Mantente informado sobre eventos, actividades y novedades del Casino Gaoriano
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
                    <NewsCard
                        title="Torneo de Ajedrez Interinstitucional"
                        description="Inscripciones abiertas para el torneo anual de ajedrez. Categorías: principiantes, intermedios y avanzados."
                        date="8 de Marzo, 2026"
                        imageUrl="https://images.unsplash.com/photo-1761644310400-fe763d140148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0b3VybmFtZW50JTIwY29tcGV0aXRpb258ZW58MXx8fHwxNzcyMzgzOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Torneo de Ajedrez"
                        category="Deportes"
                    />

                    <NewsCard
                        title="Nuevos Horarios de Piscina"
                        description="A partir del 1 de marzo, la piscina recreativa extenderá su horario de atención los fines de semana."
                        date="1 de Marzo, 2026"
                        imageUrl="https://images.unsplash.com/photo-1768573264144-065ef8ad5638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBzZXJ2aWNlJTIwYW5ub3VuY2VtZW50fGVufDF8fHx8MTc3MjM4Mzk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Nuevos Horarios"
                        category="Anuncio"
                    />

                    <NewsCard
                        title="Taller de Cocina Gourmet"
                        description="El chef ejecutivo ofrecerá un taller de cocina internacional. Cupo limitado a 20 participantes."
                        date="20 de Marzo, 2026"
                        imageUrl="https://images.unsplash.com/photo-1715000780536-1f3f368b8587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2xhc3MlMjBjaGVmfGVufDF8fHx8MTc3MjM4Mzk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Taller de Cocina"
                        category="Cultura"
                    />

                    <NewsCard
                        title="Día de la Familia"
                        description="Actividades recreativas para toda la familia: juegos, música en vivo y buffet especial. Entrada gratuita."
                        date="25 de Marzo, 2026"
                        imageUrl="https://images.unsplash.com/photo-1656418111399-644402f9c6bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkYXklMjBwaWNuaWN8ZW58MXx8fHwxNzcyMzgzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Día de la Familia"
                        category="Evento"
                    />

                    <NewsCard
                        title="Noche de Gala Primaveral"
                        description="Cena de gala con música en vivo y dress code formal. Reservaciones disponibles en recepción."
                        date="30 de Marzo, 2026"
                        imageUrl="https://images.unsplash.com/photo-1770805001834-f9ccd734c6fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwZXZlbnR8ZW58MXx8fHwxNzcyMzgzOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Noche de Gala"
                        category="Evento"
                    />

                    <NewsCard
                        title="Mantenimiento Zona de Entretenimiento"
                        description="Del 5 al 7 de marzo, la zona de entretenimiento estará cerrada por trabajos de renovación."
                        date="5 de Marzo, 2026"
                        imageUrl="https://images.unsplash.com/photo-1768573264144-065ef8ad5638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBzZXJ2aWNlJTIwYW5ub3VuY2VtZW50fGVufDF8fHx8MTc3MjM4Mzk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Mantenimiento"
                        category="Aviso"
                    />
                </div>
            </div>
        </section>
    )
}
