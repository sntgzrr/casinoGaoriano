import { Calendar } from "lucide-react";

export function NewsHighlightCard({ title, category, description, date, imageUrl }) {
    return (
        <div className="bg-gradient-to-r from-amber-900/30 to-amber-950/30 rounded-2xl overflow-hidden border border-amber-900/40 hover:border-amber-500/50 transition-all">
            <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                        {category}
                    </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 text-amber-400 mb-3">
                        <Calendar size={16} />
                        <span className="text-sm">{date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                        {title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
