import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useSplitTextAnimation } from '../hooks/useSplitTextAnimation'

export function Contact({ direction, phone, email, schedule }) {
    const container = useSplitTextAnimation();
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900" ref={container}>
            <div className="text-center mb-12">
                <h2 className="split-text-chars text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Contáctanos
                </h2>
                <p className="split-text-words text-gray-400 text-lg">
                    Estamos aquí para hacer tu visita excepcional
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-6 rounded-xl border border-amber-900/30 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Dirección</h3>
                    <p className="text-gray-300">
                        {direction}
                    </p>
                </div>

                <div className="bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-6 rounded-xl border border-amber-900/30 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Teléfono</h3>
                    <p className="text-gray-300">
                        {phone}
                    </p>
                </div>

                <div className="bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-6 rounded-xl border border-amber-900/30 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Email</h3>
                    <p className="text-gray-300">
                        {email}
                    </p>
                </div>

                <div className="bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-6 rounded-xl border border-amber-900/30 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">Horario</h3>
                    <p className="text-gray-300">
                        {schedule}
                    </p>
                </div>
            </div>
        </section>
    )
}
