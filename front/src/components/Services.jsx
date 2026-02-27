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
                        <div className="bg-yellow-500 md:col-span-3 md:row-span-2 h-50">Casino Oficiales</div>
                    </div>
                </div>
            </div>
        </section>
    )
}