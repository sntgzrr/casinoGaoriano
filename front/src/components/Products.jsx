import { ProductCard } from "./ProductCard"
import { ShoppingBag } from "lucide-react";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

export function Products({title, description}) {
    const container = useSplitTextAnimation();
    return (
        <section ref ={container} className="py-20 px-4 bg-gray-900">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <ShoppingBag className="text-amber-400" size={32} />
                        <h2 className="split-text-chars text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            { title }
                        </h2>
                    </div>
                    <p className="split-text-words text-gray-400 text-lg max-w-2xl mx-auto">
                        { description }
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductCard
                        name="Café Premium"
                        description="Granos de café seleccionados de origen, tostado especial. Disponible en presentaciones de 250g y 500g."
                        price="$15.99"
                        imageUrl="https://images.unsplash.com/photo-1605089315581-54b30a285ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHByb2R1Y3R8ZW58MXx8fHwxNzcyMzc5NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Café Premium"
                        badge="Popular"
                    />

                    <ProductCard
                        name="Vinos Selectos"
                        description="Colección exclusiva de vinos nacionales e internacionales. Ediciones limitadas y reservas especiales."
                        price="$45.00"
                        imageUrl="https://images.unsplash.com/photo-1733248113910-400496b9a544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwYm90dGxlcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMjc0NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Vinos Selectos"
                    />

                    <ProductCard
                        name="Puros Premium"
                        description="Puros artesanales de las mejores cosechas. Importados y nacionales, con certificado de autenticidad."
                        price="$28.50"
                        imageUrl="https://images.unsplash.com/photo-1649779117064-107e63b88758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaWdhcnMlMjBsdXh1cnklMjBwcm9kdWN0fGVufDF8fHx8MTc3MjM3OTYyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Puros Premium"
                        badge="Exclusivo"
                    />

                    <ProductCard
                        name="Chocolate Gourmet"
                        description="Chocolates artesanales de alta calidad. Presentaciones especiales para regalo y consumo personal."
                        price="$22.00"
                        imageUrl="https://images.unsplash.com/photo-1767510533183-425731f088a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBnb3VybWV0JTIwbHV4dXJ5fGVufDF8fHx8MTc3MjM3OTYzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Chocolate Gourmet"
                    />

                    <ProductCard
                        name="Delicatessen"
                        description="Productos gourmet importados: quesos finos, embutidos premium, aceites de oliva y conservas selectas."
                        price="$35.00"
                        imageUrl="https://images.unsplash.com/photo-1768751947135-a841b07a820f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MjM3OTYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Delicatessen"
                    />

                    <ProductCard
                        name="Merchandising"
                        description="Artículos oficiales del Casino: camisetas, gorras, tazas y otros productos con el emblema institucional."
                        price="$18.00"
                        imageUrl="https://images.unsplash.com/photo-1628136473110-6e95a86f4b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMG1lcmNoYW5kaXNlJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzcyMzc5NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        imageAlt="Merchandising"
                        badge="Nuevo"
                    />
                </div>

                {/* Info Banner */}
                <div className="mt-16 bg-gradient-to-r from-amber-900/20 to-amber-950/20 rounded-xl p-8 border border-amber-900/30">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-amber-400 mb-3">Compra para Miembros</h3>
                        <p className="text-gray-300 mb-6">
                            Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico.
                            Aceptamos únicamente tarjetas de débito. Entregas disponibles dentro de la base.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50">
                                Ver Catálogo Completo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}