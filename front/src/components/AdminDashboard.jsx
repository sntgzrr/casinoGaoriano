import { Shield, Package, Newspaper } from "lucide-react";
import { useState } from "react";
import { AdminProductsManager } from "./AdminProductsManager";
import { AdminNewsManager } from "./AdminsNewsManager";

export function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("products");
    return (
        <section className="py-20 px-4 bg-gray-900">
            {/* Main Content */}
            <div className="container mx-auto max-w-7xl px-4 py-10">
                {/* Custom Tabs */}
                <div className="w-full">
                    <div className="bg-gray-900 border border-amber-900/30 p-1 rounded-lg inline-flex space-x-1">
                        <button
                            onClick={() => setActiveTab("products")}
                            className={`px-6 py-3 rounded-md flex items-center space-x-2 transition-all ${activeTab === "products"
                                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg cursor-pointer"
                                : "text-gray-400 hover:text-white cursor-pointer"
                                }`}
                        >
                            <Package size={18} />
                            <span>Productos</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("news")}
                            className={`px-6 py-3 rounded-md flex items-center space-x-2 transition-all ${activeTab === "news"
                                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg cursor-pointer"
                                : "text-gray-400 hover:text-white cursor-pointer"
                                }`}
                        >
                            <Newspaper size={18} />
                            <span>Noticias</span>
                        </button>
                    </div>

                    <div className="mt-8">
                        {activeTab === "products" && <AdminProductsManager />}
                        {activeTab === "news" && <AdminNewsManager />}
                    </div>
                </div>
            </div>
        </section>
    );
}
