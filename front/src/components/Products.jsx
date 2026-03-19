import { ProductCard } from "./ProductCard"
import { ShoppingBag } from "lucide-react";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

export function Products({ title, description, products, infoBanner = true, infoBannerTitle, infoBannerText, buttonInfoBanner = false }) {
    const container = useSplitTextAnimation();
    return (
        <section ref={container} className="py-20 px-4 bg-gray-900">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <ShoppingBag className="text-amber-400" size={32} />
                        <h2 className="split-text-chars text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            {title}
                        </h2>
                    </div>
                    <p className="split-text-words text-gray-400 text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            imageAlt={product.imageAlt}
                            badge={product.badge}
                        />
                    ))}
                </div>

                {/* Info Banner */}
                {infoBanner && (
                    <div className="mt-16 bg-gradient-to-r from-amber-900/20 to-amber-950/20 rounded-xl p-8 border border-amber-900/30">
                        <div className="text-center max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold text-amber-400 mb-3">{infoBannerTitle}</h3>
                            <p className="text-gray-300 mb-6">
                                {infoBannerText}
                            </p>
                        </div>
                        {buttonInfoBanner && (
                            <div className="flex justify-center">
                                <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50 cursor-pointer">
                                    Llenar Formulario Desarranche
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}