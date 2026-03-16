import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function MultipleOptionFilter({ name, options, products, onFilteredProductsChange }) {
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    useEffect(() => {
        const displayedProducts = selectedCategory === "Todos" ? products : products.filter(p => p.category === selectedCategory);
        onFilteredProductsChange(displayedProducts);
    }, [selectedCategory, products, onFilteredProductsChange]);

    return (
        <div className="relative">
            <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                onClick={() => { setFilterOpen(!isFilterOpen) }}
                className="text-white px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg transition-all flex items-center space-x-2 shadow-lg cursor-pointer"
                type="button">
                {name}
                <ChevronDown size={16} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            {isFilterOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-gray-900 border border-amber-900/30 rounded-lg shadow-xl overflow-hidden">
                    {options.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setSelectedCategory(category.name);
                                setFilterOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-amber-900/20 transition-colors border-b border-gray-800 last:border-b-0 cursor-pointer"
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
