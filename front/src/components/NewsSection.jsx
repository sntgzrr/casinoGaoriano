import { Calendar, Bell } from "lucide-react";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

export function NewsSection() {
    const container = useSplitTextAnimation();
    return (
        <section ref={container} className="py-20 px-4 bg-gray-900">
                {/* Info Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/20 rounded-xl p-8 border border-blue-900/30">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Bell className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Para tener en cuenta</h3>
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
                                <h3 className="text-xl font-bold text-amber-400 mb-2">Horarios de Mantenimiento</h3>
                                <p className="text-gray-300">
                                    Durante el mes de marzo, se realizarán trabajos de mantenimiento en la zona de la piscina.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
