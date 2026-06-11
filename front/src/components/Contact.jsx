import { MapPin, Phone, ContactRound, Clock } from 'lucide-react'
import { useSplitTextAnimation } from '../hooks/useSplitTextAnimation'

export function Contact({
    direction,
    phone,
    contact,
    schedule,
    showDirection = true,
    showPhone = true,
    showContact = true,
    showSchedule = true
}) {
    const container = useSplitTextAnimation();

    return (
        <section className="py-20 px-4 bg-gray-900" ref={container}>
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="split-text-chars text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Contáctanos
                </h2>
                <p className="split-text-words text-gray-400 text-lg">
                    Estamos aquí para hacer tu visita excepcional
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 justify-items-center">

                {showDirection && (
                    <div className="w-full max-w-[260px] bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-6 rounded-xl border border-amber-900/30 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-amber-400 mb-2">Dirección</h3>
                        <p className="text-gray-300">{direction}</p>
                    </div>
                )}

                {showPhone && (
                    <div className="w-full max-w-[260px] bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-6 rounded-xl border border-amber-900/30 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-amber-400 mb-2">Teléfono</h3>
                        <p className="text-gray-300">{phone}</p>
                    </div>
                )}

                {showContact && (
                    <div className="w-full max-w-[260px] bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-6 rounded-xl border border-amber-900/30 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ContactRound className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-amber-400 mb-2">Encargado</h3>
                        <p className="text-gray-300">{contact}</p>
                    </div>
                )}

                {showSchedule && (
                    <div className="w-full max-w-[260px] bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-6 rounded-xl border border-amber-900/30 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-amber-400 mb-2">Horario</h3>
                        <div className="text-gray-300 text-sm leading-relaxed">
                            {schedule.split('\n').map((line, index) => (
                                <div key={index}>{line}</div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}
