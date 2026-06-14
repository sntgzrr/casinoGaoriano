import { Calendar } from "lucide-react";

export function NewsCard({ imageUrl, imageAlt, category, date, title, description }) {
    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-amber-900/30 hover:border-amber-500/50 transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {category}
                </div>
            </div>

            <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{date}</span>
                </div>

                <h3 className="text-xl font-bold text-amber-400 leading-tight">{title}</h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}
