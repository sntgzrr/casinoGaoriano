import { Shield, Package, Newspaper } from "lucide-react";
import { useState } from "react";
import { AdminProductsManager } from "./AdminProductsManager";
import { AdminNewsManager } from "./AdminsNewsManager";

export function AdminDashboard() {
      const [activeTab, setActiveTab] = useState("products");
    return (
        <section className="py-20 px-4 bg-gray-900">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-black border-b border-amber-900/30">
                <div className="container mx-auto max-w-7xl px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                                <Shield className="text-white" size={24} />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                                    Panel de Administración
                                </h1>
                                <p className="text-gray-400 text-sm">Casino Gaoriano</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto max-w-7xl px-4 py-10">
                {/* Custom Tabs */}
                <div className="w-full">
                    <div className="bg-gray-900 border border-amber-900/30 p-1 rounded-lg inline-flex space-x-1">
                        <button
                            onClick={() => setActiveTab("products")}
                            className={`px-6 py-3 rounded-md flex items-center space-x-2 transition-all ${activeTab === "products"
                                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            <Package size={18} />
                            <span>Productos</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("news")}
                            className={`px-6 py-3 rounded-md flex items-center space-x-2 transition-all ${activeTab === "news"
                                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                                    : "text-gray-400 hover:text-white"
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
