import { useState } from "react";
import { Plus, Edit, Trash2, Newspaper, Star, X } from "lucide-react";
import { useFetchingNewsData } from "../hooks/useServices";
import { postNew, putNew, deleteNew } from "../utils/services/newsServices";
// import { toast } from "sonner";

export function AdminNewsManager() {
    const { news, setNews } = useFetchingNewsData();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingNews, setEditingNews] = useState(null);
    const [deleteNewsId, setDeleteNewsId] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        imageUrl: "",
        imageAlt: "",
        category: "",
        isFeatured: false,
    });

    const updateNew = async (newId, newData) => {
        try {
            await putNew(newId, newData).then((updatedNew) => {
                if (newId) {
                    setNews((prevNews) => prevNews.map((n) => (n.id === newId ? updatedNew : n)));
                } else {
                    setNews((prevNews) => [...prevNews, updatedNew]);
                }
            });
        } catch (error) {
            console.error("Error saving news:", error);
            // toast.error("Error al guardar la noticia. Por favor, intenta nuevamente.");
        }
    };

    const createNew = async (newData) => {
        try {
            await postNew(newData).then((createdNew) => {
                setNews((prevNews) => [...prevNews, createdNew]);
            });
        } catch (error) {
            console.error("Error creating news:", error);
            // toast.error("Error al crear la noticia. Por favor, intenta nuevamente.");
        }
    }

    const destroyNew = async (newId) => {
        try {
            await deleteNew(newId).then(() => {
                setNews((prevNews) => prevNews.filter((n) => n.id !== newId));
                setDeleteNewsId(null);
            });
        } catch (error) {
            console.error("Error deleting news:", error);
            // toast.error("Error al eliminar la noticia. Por favor, intenta nuevamente.");
        }
    };

    const handleOpenDialog = (newsItem) => {
        if (newsItem) {
            setEditingNews(newsItem);
            setFormData({
                title: newsItem.title,
                description: newsItem.description,
                date: newsItem.date,
                imageUrl: newsItem.imageUrl,
                imageAlt: newsItem.imageAlt,
                category: newsItem.category || "",
                isFeatured: newsItem.isFeatured || false,
            });
        } else {
            setEditingNews(null);
            setFormData({
                title: "",
                description: "",
                date: "",
                imageUrl: "",
                imageAlt: "",
                category: "",
                isFeatured: false,
            });
        }
        setIsDialogOpen(true);
    };

    const handleSaveNews = async () => {
        if (!formData.title || !formData.description || !formData.date) {
            // toast.error("Por favor completa todos los campos obligatorios");
            return;
        }

        if (editingNews) {
            await updateNew(editingNews.id, formData);
            // toast.success("Noticia actualizada exitosamente");
        } else {
            await createNew(formData);
            // toast.success("Noticia creada exitosamente");
        }

        setIsDialogOpen(false);
    };

    const handleDeleteNews = async () => {
        try {
            await destroyNew (deleteNewsId);
        } catch (error) {
            console.error("Error saving news:", error);
            // toast.error("Error al guardar la noticia. Por favor, intenta nuevamente.");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Newspaper className="text-amber-400" size={28} />
                    <h2 className="text-2xl font-bold text-amber-400">Gestión de Noticias</h2>
                </div>
                <button
                    onClick={() => handleOpenDialog()}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg transition-all flex items-center space-x-2 shadow-lg"
                >
                    <Plus size={20} />
                    <span>Nueva Noticia</span>
                </button>
            </div>

            {/* News Table */}
            <div className="bg-gray-900 rounded-xl border border-amber-900/30 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-amber-900/20 border-b border-amber-900/30">
                            <tr>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Noticia</th>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Descripción</th>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Fecha</th>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Categoría</th>
                                <th className="text-center px-6 py-4 text-amber-400 font-semibold">Destacada</th>
                                <th className="text-right px-6 py-4 text-amber-400 font-semibold">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center px-6 py-12 text-gray-400">
                                        No hay noticias. Crea una nueva para comenzar.
                                    </td>
                                </tr>
                            ) : (
                                news.map((newsItem, index) => (
                                    <tr key={newsItem.id || `news-${index}`} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={newsItem.imageUrl}
                                                    alt={newsItem.imageAlt}
                                                    className="w-12 h-12 rounded-lg object-cover"
                                                />
                                                <span className="text-white font-medium">{newsItem.title}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-300 max-w-md truncate">{newsItem.description}</td>
                                        <td className="px-6 py-4 text-gray-400">{newsItem.date}</td>
                                        <td className="px-6 py-4">
                                            {newsItem.category ? (
                                                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                                                    {newsItem.category}
                                                </span>
                                            ) : (
                                                <span className="text-gray-500">-</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {newsItem.isFeatured && <Star className="text-amber-400 mx-auto" size={20} fill="currentColor" />}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button
                                                    onClick={() => handleOpenDialog(newsItem)}
                                                    className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteNewsId(newsItem.id)}
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
                                {editingNews ? "Editar Noticia" : "Nueva Noticia"}
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
                                <label htmlFor="title" className="block text-gray-300 mb-1 font-medium">
                                    Título de la Noticia *
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    placeholder="Ej: Torneo de Ajedrez"
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
                                    placeholder="Descripción detallada de la noticia"
                                    rows={4}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="date" className="block text-gray-300 mb-1 font-medium">
                                        Fecha *
                                    </label>
                                    <input
                                        id="date"
                                        type="text"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        placeholder="Ej: 15 de Marzo, 2026"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="category" className="block text-gray-300 mb-1 font-medium">
                                        Categoría (Opcional)
                                    </label>
                                    <input
                                        id="category"
                                        type="text"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        placeholder="Deportes, Evento, etc."
                                    />
                                </div>
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

                            <div className="flex items-center space-x-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, isFeatured: !formData.isFeatured })}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${formData.isFeatured ? 'bg-amber-500' : 'bg-gray-700'
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.isFeatured ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                                <label htmlFor="featured" className="text-gray-300 cursor-pointer select-none">
                                    Marcar como noticia destacada
                                </label>
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
                                onClick={handleSaveNews}
                                className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg transition-all shadow-lg"
                            >
                                {editingNews ? "Actualizar" : "Crear"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation */}
            {deleteNewsId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setDeleteNewsId(null)}
                    />

                    {/* Dialog Content */}
                    <div className="relative bg-gray-900 border border-amber-900/30 rounded-xl shadow-2xl max-w-md w-full mx-4">
                        <div className="px-6 py-5">
                            <h3 className="text-xl text-amber-400 font-bold mb-2">¿Estás seguro?</h3>
                            <p className="text-gray-300">
                                Esta acción no se puede deshacer. La noticia será eliminada permanentemente.
                            </p>
                        </div>

                        <div className="border-t border-amber-900/30 px-6 py-4 flex items-center justify-end space-x-3">
                            <button
                                onClick={() => setDeleteNewsId(null)}
                                className="px-6 py-2 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleDeleteNews}
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
