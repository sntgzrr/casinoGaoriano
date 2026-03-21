import { useState } from "react";
import { Users, Edit, Trash2, CheckCircle, XCircle, X, Calendar } from "lucide-react";
import { useFetchingUsersData } from "../hooks/useServices";
//import { toast } from "sonner";

export function AdminUsersManager() {
    const { users, setUsers } = useFetchingUsersData();
    const [payments, setPayments] = useState([
        {
            'userId': '1',
            'week': '2024-06-10',
        }
    ]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [currentWeek, _] = useState("2026-07-13");
    const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const savePayments = (updatedPayments) => {
        setPayments(updatedPayments);
        localStorage.setItem("userPayments", JSON.stringify(updatedPayments));
    };

    const getUserPayment = (userId, week) => {
        const existing = payments.find((p) => p.userId === userId && p.week === week);
        if (existing) return existing;

        return {
            userId,
            week,
            days: {
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: false,
            },
        };
    };

    const handlePaymentToggle = (userId, day) => {
        const userPayment = getUserPayment(userId, currentWeek);
        userPayment.days[day] = !userPayment.days[day];

        const updatedPayments = payments.filter(
            (p) => !(p.userId === userId && p.week === currentWeek)
        );
        updatedPayments.push(userPayment);
        savePayments(updatedPayments);
    };

    const handleOpenPaymentDialog = (user) => {
        setSelectedUser(user);
        setIsPaymentDialogOpen(true);
    };

    const handleDeleteUser = (userId) => {
        setUserToDelete(userId);
        setIsDeleteDialogOpen(true);
    };

    const confirmDeleteUser = () => {
        if (userToDelete) {
            const updatedUsers = users.filter((u) => u.id !== userToDelete);
            setUsers(updatedUsers);
            localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

            const updatedPayments = payments.filter((p) => p.userId !== userToDelete);
            savePayments(updatedPayments);

            //toast.success("Usuario eliminado exitosamente");
            setIsDeleteDialogOpen(false);
            setUserToDelete(null);
        }
    };

    const getWeekDates = () => {
        const now = new Date();
        const dayOfWeek = now.getDay();
        const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        const monday = new Date(now);
        monday.setDate(now.getDate() + diff);

        const dates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            dates.push(date.toLocaleDateString("es-ES", { day: "2-digit", month: "short" }));
        }
        return dates;
    };

    const weekDates = getWeekDates();
    const dayNames = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const dayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Users className="text-amber-400" size={28} />
                    <h2 className="text-2xl font-bold text-amber-400">Gestión de Usuarios</h2>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-amber-900/30 rounded-lg">
                        <Calendar className="text-amber-400" size={18} />
                        <span className="text-gray-300">Semana {currentWeek}</span>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-gray-900 rounded-xl border border-amber-900/30 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-amber-900/20 border-b border-amber-900/30">
                            <tr>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Usuario</th>
                                <th className="text-left px-6 py-4 text-amber-400 font-semibold">Fecha Registro</th>
                                <th className="text-center px-6 py-4 text-amber-400 font-semibold">Pagos Semana</th>
                                <th className="text-right px-6 py-4 text-amber-400 font-semibold">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center px-6 py-12 text-gray-400">
                                        No hay usuarios registrados.
                                    </td>
                                </tr>
                            ) : (
                                users.map((user) => {
                                    const userPayment = getUserPayment(user.id, currentWeek);
                                    const paidDays = Object.values(userPayment.days).filter(Boolean).length;

                                    return (
                                        <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className="text-white font-medium">{user.username}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-400">{user.date_joined}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-center space-x-2">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${paidDays === 7
                                                        ? "bg-green-500/20 text-green-400"
                                                        : paidDays > 0
                                                            ? "bg-amber-500/20 text-amber-400"
                                                            : "bg-red-500/20 text-red-400"
                                                        }`}>
                                                        {paidDays}/7 días
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end space-x-2">
                                                    <button
                                                        onClick={() => handleOpenPaymentDialog(user)}
                                                        className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors"
                                                        title="Gestionar Pagos"
                                                    >
                                                        <Edit size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                                        title="Eliminar Usuario"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Payment Management Dialog */}
            {isPaymentDialogOpen && selectedUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsPaymentDialogOpen(false)}
                    />

                    <div className="relative bg-gray-900 border border-amber-900/30 rounded-xl shadow-2xl max-w-3xl w-full mx-4">
                        <div className="border-b border-amber-900/30 px-6 py-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl text-amber-400 font-bold">Control de Pagos</h2>
                                <p className="text-gray-400 text-sm mt-1">{selectedUser.name} - Semana {currentWeek}</p>
                            </div>
                            <button
                                onClick={() => setIsPaymentDialogOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="px-6 py-6">
                            <div className="grid grid-cols-7 gap-3">
                                {dayKeys.map((dayKey, index) => {
                                    const userPayment = getUserPayment(selectedUser.id, currentWeek);
                                    const isPaid = userPayment.days[dayKey];

                                    return (
                                        <div key={dayKey} className="text-center">
                                            <div className="text-gray-400 text-xs mb-2 font-medium">{dayNames[index]}</div>
                                            <div className="text-gray-500 text-xs mb-3">{weekDates[index]}</div>
                                            <button
                                                onClick={() => handlePaymentToggle(selectedUser.id, dayKey)}
                                                className={`w-full aspect-square rounded-lg flex items-center justify-center transition-all ${isPaid
                                                    ? "bg-green-500/20 border-2 border-green-500 hover:bg-green-500/30"
                                                    : "bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 hover:border-gray-600"
                                                    }`}
                                            >
                                                {isPaid ? (
                                                    <CheckCircle className="text-green-400" size={28} />
                                                ) : (
                                                    <XCircle className="text-gray-600" size={28} />
                                                )}
                                            </button>
                                            <div className={`text-xs mt-2 font-semibold ${isPaid ? "text-green-400" : "text-gray-600"}`}>
                                                {isPaid ? "Pagado" : "Pendiente"}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 p-4 bg-amber-900/10 border border-amber-900/30 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-300">Total pagado esta semana:</span>
                                    <span className="text-amber-400 font-bold text-lg">
                                        {Object.values(getUserPayment(selectedUser.id, currentWeek).days).filter(Boolean).length} / 7 días
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-amber-900/30 px-6 py-4 flex items-center justify-end">
                            <button
                                onClick={() => setIsPaymentDialogOpen(false)}
                                className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg transition-all shadow-lg"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Dialog */}
            {isDeleteDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsDeleteDialogOpen(false)}
                    />

                    <div className="relative bg-gray-900 border border-amber-900/30 rounded-xl shadow-2xl max-w-md w-full mx-4">
                        <div className="px-6 py-5">
                            <h3 className="text-xl text-amber-400 font-bold mb-2">¿Estás seguro?</h3>
                            <p className="text-gray-300">
                                Esta acción eliminará el usuario y todos sus registros de pago. Esta acción no se puede deshacer.
                            </p>
                        </div>

                        <div className="border-t border-amber-900/30 px-6 py-4 flex items-center justify-end space-x-3">
                            <button
                                onClick={() => setIsDeleteDialogOpen(false)}
                                className="px-6 py-2 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmDeleteUser}
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
