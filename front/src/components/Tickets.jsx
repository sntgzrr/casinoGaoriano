import { useState } from "react";
import { Ticket, Calendar, CheckCircle, X, Download, ChevronLeft, ChevronRight } from "lucide-react";


export function Tickets({ isOpen, onClose }) {
    const { user } = {
        user: {
            id: "2",
            name: "Juan Pérez",
            email: "",
        }
    }
    const [payments, _] = useState([
        {
            userId: "2",
            days: {
                monday: true,
                tuesday: false,
                wednesday: true,
                thursday: false,
                friday: true,
                saturday: false,
                sunday: false,
            },
            week: "2026-13",
        }
    ]);

    if (!isOpen || !user) return null;

    const getCurrentWeek = (offset) => {
        const now = new Date();
        now.setDate(now.getDate() + offset * 7);
        const year = now.getFullYear();
        const weekNumber = getWeekNumber(now);
        return `${year}-${weekNumber.toString().padStart(2, "0")}`;
    };

    const getWeekNumber = (date) => {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    };

    const getWeekDates = (offset) => {
        const now = new Date();
        now.setDate(now.getDate() + offset * 7);
        const dayOfWeek = now.getDay();
        const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        const monday = new Date(now);
        monday.setDate(now.getDate() + diff);

        const dates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            dates.push({
                full: date.toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }),
                short: date.toLocaleDateString("es-ES", { day: "2-digit", month: "short" }),
                date: date,
            });
        }
        return dates;
    };

    const currentWeek = getCurrentWeek(0);
    const weekDates = getWeekDates(0);
    const dayNames = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const dayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    const currentPayment = payments.find((p) => p.week === currentWeek);
    const paidDays = currentPayment
        ? dayKeys.filter((key) => currentPayment.days[key])
        : [];

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative bg-gray-900 border border-amber-900/30 rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="border-b border-amber-900/30 px-6 py-4 flex items-center justify-between sticky top-0 bg-gray-900 z-10">
                    <div className="flex items-center space-x-3">
                        <Ticket className="text-amber-400" size={28} />
                        <div>
                            <h2 className="text-2xl text-amber-400 font-bold">Mis Tickets</h2>
                            <p className="text-gray-400 text-sm">Visualiza tus días pagados</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Week Navigation */}
                <div className="px-6 py-4 border-b border-gray-800">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center space-x-2">
                            <Calendar className="text-amber-400" size={18} />
                            <span className="text-white font-semibold">
                                Semana {currentWeek}
                            </span>
                            <span className="ml-2 px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full">
                                Actual
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6">
                    {/* User Info */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-amber-900/20 to-amber-950/20 rounded-lg border border-amber-900/30">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-gray-400 text-sm">Usuario</div>
                                <div className="text-white font-bold text-lg">{user.name}</div>
                                <div className="text-gray-400 text-sm">{user.email}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-gray-400 text-sm">Días Pagados</div>
                                <div className="text-amber-400 font-bold text-3xl">{paidDays.length}</div>
                                <div className="text-gray-400 text-sm">de 7 días</div>
                            </div>
                        </div>
                    </div>

                    {/* Tickets Grid */}
                    {paidDays.length === 0 ? (
                        <div className="text-center py-12">
                            <Ticket className="text-gray-600 mx-auto mb-4" size={48} />
                            <p className="text-gray-400 text-lg">No tienes tickets para esta semana</p>
                            <p className="text-gray-500 text-sm mt-2">
                                Los tickets se generan cuando se registra un pago
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-4">
                            {paidDays.map((dayKey) => {
                                const dayIndex = dayKeys.indexOf(dayKey);
                                const dateInfo = weekDates[dayIndex];

                                return (
                                    <div
                                        key={dayKey}
                                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 border-amber-500/30 p-6 hover:border-amber-500/50 transition-all"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                                                    <CheckCircle className="text-white" size={24} />
                                                </div>
                                                <div>
                                                    <div className="text-amber-400 font-bold text-lg">
                                                        {dayNames[dayIndex]}
                                                    </div>
                                                    <div className="text-gray-400 text-sm">{dateInfo.short}</div>
                                                </div>
                                            </div>
                                            <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                                                PAGADO
                                            </div>
                                        </div>

                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Fecha:</span>
                                                <span className="text-white font-medium">{dateInfo.full}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Usuario:</span>
                                                <span className="text-white font-medium">{user.name}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">ID:</span>
                                                <span className="text-amber-400 font-mono">{user.email.split("@")[0]}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-gray-700">
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-500 text-xs">Ticket válido</span>
                                                <div className="text-amber-400 font-mono text-xs">
                                                    #{currentWeek}-{dayKey.substring(0, 3).toUpperCase()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Summary */}
                    {paidDays.length > 0 && (
                        <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-gray-400 text-sm">Total de tickets generados</div>
                                    <div className="text-white font-bold text-lg">{paidDays.length} tickets</div>
                                </div>
                                <button
                                    onClick={handlePrint}
                                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg transition-all shadow-lg"
                                >
                                    <Download size={16} />
                                    <span>Imprimir Tickets</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-amber-900/30 px-6 py-4 bg-gray-900/50 sticky bottom-0">
                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm">
                            GAORI - Sistema de Tickets
                        </p>
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors cursor-pointer"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
