export function ProductCard({ name, description, price, imageUrl, imageAlt, badge }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-amber-900/30 hover:border-amber-500/50 transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {badge && (
          <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">
            {badge}
          </div>
        )}

        {price && (
          <div className="absolute bottom-4 left-4">
            <div className="text-3xl font-bold text-white">${price}</div>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-amber-400">{name}</h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}