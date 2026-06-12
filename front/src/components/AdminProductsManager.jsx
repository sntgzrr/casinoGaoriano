import { useState } from "react";
import { Plus, Edit, Trash2, Package, X } from "lucide-react";
import { useFetchingProductsData } from "../hooks/useServices";
import { postProduct, putProduct, deleteProduct } from "../utils/services/productsServices";
import { MultipleOptionFilter } from "./MultipleOptionFilter";
// import { toast } from "sonner";

export function AdminProductsManager() {
    const { products, setProducts } = useFetchingProductsData();
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [deleteProductId, setDeleteProductId] = useState(null);

    const categories = [
        { id: "0", name: "Todos" },
        { id: "1", name: "Bar Tomo" },
        { id: "3", name: "Cara Cara" },
        { id: "4", name: "Mall" },
        { id: "5", name: "Casinos" },
        { id: "6", name: "Bar Arpía" },
    ];

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        imageUrl: "",
        imageAlt: "",
        badge: "",
        category: "",
    });

    const updateProduct = async (newId, newData) => {
        try {
            await putProduct(newId, newData).then((updatedNew) => {
                if (newId) {
                    setProducts((prevProducts) => prevProducts.map((p) => (p.id === newId ? updatedNew : p)));
                } else {
                    setProducts((prevProducts) => [...prevProducts, updatedNew]);
                }
            });
        } catch (error) {
            console.error("Error saving product:", error);
            // toast.error("Error al guardar el producto. Por favor, intenta nuevamente.");
        }
    };

    const createProduct = async (productData) => {
        try {
            await postProduct(productData).then((createdProduct) => {
                setProducts((prevProducts) => [...prevProducts, createdProduct]);
            });
        } catch (error) {
            console.error("Error creating product:", error);
            // toast.error("Error al crear el producto. Por favor, intenta nuevamente.");
        }
    }

    const destroyProduct = async (newId) => {
        try {
            await deleteProduct(newId).then(() => {
                setProducts((prevProducts) => prevProducts.filter((p) => p.id !== newId));
                setDeleteProductId(null);
            });
        } catch (error) {
            console.error("Error deleting news:", error);
            // toast.error("Error al eliminar la noticia. Por favor, intenta nuevamente.");
        }
    };

    const handleOpenDialog = (product) => {
        if (product) {
            setEditingProduct(product);
            const categoryMap = {
                "Bar Tomo": "Bar Tomo",
                "Bar Arpía": "Bar Arpía",
                "Cara Cara": "Cara Cara"
            };
            const categoryValue = categoryMap[product.category] || product.category;
            setFormData({
                name: product.name,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl,
                imageAlt: product.imageAlt,
                badge: product.badge || "",
                category: categoryValue,
            });
        } else {
            setEditingProduct(null);
            setFormData({
                name: "",
                description: "",
                price: "",
                imageUrl: "",
                imageAlt: "",
                badge: "",
                category: "Cara Cara",
            });
        }
        setIsDialogOpen(true);
    };

    const handleSaveProduct = async () => {
        if (!formData.name || !formData.description || !formData.category) {
            // toast.error("Por favor completa todos los campos obligatorios");
            return;
        }

        if (editingProduct) {
            await updateProduct(editingProduct.id, formData);
            // toast.success("Producto actualizado exitosamente");
        } else {
            await createProduct(formData);
            // toast.success("Producto creado exitosamente");
        }
        setIsDialogOpen(false);
    };

    const handleDeleteProduct = async () => {
        try {
            await destroyProduct(deleteProductId);
        } catch (error) {
            console.error("Error deleting product:", error);
            // toast.error("Error al eliminar el producto. Por favor, intenta nuevamente.");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Package className="text-amber-400" size={28} />
                    <h2 className="text-2xl font-bold text-amber-400">Gestión de Productos</h2>
                </div>
                <button
                    onClick={() => handleOpenDialog()}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg transition-all flex items-center space-x-2 shadow-lg"
                >
                    <Plus size={20} />
                    <span>Nuevo Producto</span>
                </button>
            </div>

            {/* Filters */}
            <MultipleOptionFilter name={"Filtrar por Categoría"} options={categories} products={products} onFilteredProductsChange={setDisplayedProducts} />

            {/* Products Table */}
            <div className="bg-gray-900 rounded-xl border border-amber-900/30 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-amber-900/20 border-b border-amber-900/30">
                            <tr>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Producto</th>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Descripción</th>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Precio</th>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Categoría</th>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Badge</th>
                                <th className="text-right px-6 py-4 text-amber-400 font-semibold">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedProducts.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="text-center px-6 py-12 text-gray-400">
                                        No hay productos. Crea uno nuevo para comenzar.
                                    </td>
                                </tr>
                            ) : (
                                displayedProducts.sort((a, b) => a.category.localeCompare(b.category)).map((product, index) => (
                                    <tr key={product.id || `product-${index}`} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={product.imageUrl}
                                                    alt={product.imageAlt}
                                                    className="w-12 h-12 rounded-lg object-cover"
                                                />
                                                <span className="text-white font-medium">{product.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-300 max-w-md truncate">{product.description}</td>
                                        <td className="px-6 py-4 text-amber-400 font-semibold">{product.price}</td>
                                        <td className="px-6 py-4"><span className="bg-blue-500/20 text-amber-400 px-3 py-1 rounded-full text-sm">{product.category}</span></td>
                                        <td className="px-6 py-4">
                                            {product.badge ? (
                                                <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm">
                                                    {product.badge}
                                                </span>
                                            ) : (
                                                <span className="text-gray-500">-</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button
                                                    onClick={() => handleOpenDialog(product)}
                                                    className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteProductId(product.id)}
                                                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Create/Edit Dialog */}
            {isDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsDialogOpen(false)}
                    />

                    {/* Dialog Content */}
                    <div className="relative bg-gray-900 border border-amber-900/30 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                        {/* Header */}
                        <div className="border-b border-amber-900/30 px-6 py-4 flex items-center justify-between sticky top-0 bg-gray-900 z-10">
                            <h2 className="text-2xl text-amber-400 font-bold">
                                {editingProduct ? "Editar Producto" : "Nuevo Producto"}
                            </h2>
                            <button
                                onClick={() => setIsDialogOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="px-6 py-4 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-1 font-medium">
                                    Nombre del Producto *
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    placeholder="Ej: Café Premium"
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-gray-300 mb-1 font-medium">
                                    Descripción *
                                </label>
                                <textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                                    placeholder="Descripción detallada del producto"
                                    rows={3}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="price" className="block text-gray-300 mb-1 font-medium">
                                        Precio
                                    </label>
                                    <input
                                        id="price"
                                        type="text"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        placeholder="$0.00"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="category" className="block text-gray-300 mb-1 font-medium">
                                        Categoría *
                                    </label>
                                    <select
                                        id="category"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    >
                                        <option value="Cara Cara">Cara Cara</option>
                                        <option value="Bar Arpía">Bar Arpía</option>
                                        <option value="Bar Tomo">Bar Tomo</option>
                                        <option value="Casinos">Casinos</option>
                                        <option value="Mall">Mall</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="badge" className="block text-gray-300 mb-1 font-medium">
                                    Badge (Opcional)
                                </label>
                                <input
                                    id="badge"
                                    type="text"
                                    value={formData.badge}
                                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    placeholder="Popular, Nuevo, etc."
                                />
                            </div>

                            <div>
                                <label htmlFor="imageUrl" className="block text-gray-300 mb-1 font-medium">
                                    URL de Imagen
                                </label>
                                <input
                                    id="imageUrl"
                                    type="text"
                                    value={formData.imageUrl}
                                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    placeholder="https://..."
                                />
                            </div>

                            <div>
                                <label htmlFor="imageAlt" className="block text-gray-300 mb-1 font-medium">
                                    Texto Alternativo de Imagen
                                </label>
                                <input
                                    id="imageAlt"
                                    type="text"
                                    value={formData.imageAlt}
                                    onChange={(e) => setFormData({ ...formData, imageAlt: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    placeholder="Descripción de la imagen"
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-amber-900/30 px-6 py-4 flex items-center justify-end space-x-3 sticky bottom-0 bg-gray-900">
                            <button
                                onClick={() => setIsDialogOpen(false)}
                                className="px-6 py-2 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSaveProduct}
                                className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg transition-all shadow-lg"
                            >
                                {editingProduct ? "Actualizar" : "Crear"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation */}
            {deleteProductId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setDeleteProductId(null)}
                    />

                    {/* Dialog Content */}
                    <div className="relative bg-gray-900 border border-amber-900/30 rounded-xl shadow-2xl max-w-md w-full mx-4">
                        <div className="px-6 py-5">
                            <h3 className="text-xl text-amber-400 font-bold mb-2">¿Estás seguro?</h3>
                            <p className="text-gray-300">
                                Esta acción no se puede deshacer. El producto será eliminado permanentemente.
                            </p>
                        </div>

                        <div className="border-t border-amber-900/30 px-6 py-4 flex items-center justify-end space-x-3">
                            <button
                                onClick={() => setDeleteProductId(null)}
                                className="px-6 py-2 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleDeleteProduct}
                                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-lg"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
