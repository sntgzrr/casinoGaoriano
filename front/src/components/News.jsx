import { NewsCard } from "./NewsCard";
import { NewsHighlightCard } from "./NewsHighlighCard";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";
import { Newspaper } from "lucide-react";

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
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
                    {news.map((item, index) => {
                        if (item.highlight) {
                            return (
                                <NewsHighlightCard
                                    key={index}
                                    title={item.title}
                                    category={item.category}
                                    description={item.description}
                                    date={item.date}
                                    imageUrl={item.imageUrl}
                                />
                            )
                        }
                    })}
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {news.map((item, index) => {
                        if (!item.highlight) {
                            return (
                                <NewsCard
                                    key={index}
                                    title={item.title}
                                    category={item.category}
                                    description={item.description}
                                    date={item.date}
                                    imageUrl={item.imageUrl}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}
