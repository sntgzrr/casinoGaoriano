import { useState } from "react";
import { X, Eye, EyeOff, Lock, User, AlertCircle, CheckCircle } from "lucide-react";
import LogoGaori from "../assets/logo_gaori.png";

export function LoginModal({ isOpen, onClose }) {
    const [view, setView] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Login form
    const [loginId, setLoginId] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // Forgot password form
    const [forgotEmail, setForgotEmail] = useState("");

    // Register form
    const [regName, setRegName] = useState("");
    const [regRank, setRegRank] = useState("");
    const [regId, setRegId] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regConfirmPassword, setRegConfirmPassword] = useState("");

    if (!isOpen) return null;

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");
        if (!loginId || !loginPassword) {
            setError("Por favor complete todos los campos.");
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            // Simulate invalid credentials for demo
            if (loginId !== "demo" || loginPassword !== "demo123") {
                setError("RUT o contraseña incorrectos. Intente nuevamente.");
            } else {
                setView("success");
            }
        }, 1500);
    };

    const handleForgot = (e) => {
        e.preventDefault();
        setError("");
        if (!forgotEmail) {
            setError("Por favor ingrese su correo institucional.");
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setView("success");
        }, 1500);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setError("");
        if (!regName || !regRank || !regId || !regEmail || !regPassword || !regConfirmPassword) {
            setError("Por favor complete todos los campos.");
            return;
        }
        if (regPassword !== regConfirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setView("success");
        }, 1500);
    };

    const handleClose = () => {
        setView("login");
        setError("");
        setLoginId("");
        setLoginPassword("");
        setForgotEmail("");
        setRegName("");
        setRegRank("");
        setRegId("");
        setRegEmail("");
        setRegPassword("");
        setRegConfirmPassword("");
        setIsLoading(false);
        onClose();
    };

    const ranks = [
        "General", "Coronel", "Teniente Coronel",
        "Mayor", "Capitán", "Teniente", "Subteniente"
    ];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal */}
            <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
                {/* Gold border glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 rounded-2xl opacity-60 blur-sm" />

                <div className="relative bg-gray-950 rounded-2xl overflow-hidden">
                    {/* Header stripe */}
                    <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-amber-400 transition-colors z-10 cursor-pointer"
                    >
                        <X size={20} />
                    </button>

                    <div className="px-8 py-8">
                        {/* Logo */}
                        <div className="flex flex-col items-center mb-8">
                            <img src={LogoGaori} alt="Logo Gaoriano" className="w-10 h-10" />
                            <span className="text-xs tracking-[0.3em] text-amber-500 uppercase">Casino Gaoriano</span>
                        </div>

                        {/* ── LOGIN VIEW ── */}
                        {view === "login" && (
                            <>
                                <h2 className="text-xs tracking-[0.3em] text-center text-gray-100 mb-1 font-bold uppercase">
                                    Bienvenid@
                                </h2>

                                {error && (
                                    <div className="flex items-center gap-2 bg-red-950/60 border border-red-800/50 text-red-400 text-sm px-4 py-3 rounded-lg mb-5">
                                        <AlertCircle size={16} className="shrink-0" />
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleLogin} className="space-y-5">
                                    <div>
                                        <label className="block text-xs text-amber-500 tracking-widest uppercase mb-2">
                                            Usuario
                                        </label>
                                        <div className="relative">
                                            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                            <input
                                                type="text"
                                                value={loginId}
                                                onChange={(e) => setLoginId(e.target.value)}
                                                placeholder="Ej: 12.345.678-9"
                                                className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs text-amber-500 tracking-widest uppercase mb-2">
                                            Contraseña
                                        </label>
                                        <div className="relative">
                                            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={loginPassword}
                                                onChange={(e) => setLoginPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-10 pr-12 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all text-sm"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-400 transition-colors"
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>

                                    {/*<div className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => { setView("forgot"); setError(""); }}
                                            className="text-xs text-amber-600 hover:text-amber-400 transition-colors"
                                        >
                                            ¿Olvidó su contraseña?
                                        </button>
                                    </div>*/}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        style={{ fontWeight: 700, letterSpacing: "0.05em" }}
                                    >
                                        {isLoading ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />
                                                Verificando...
                                            </>
                                        ) : (
                                            "INGRESAR"
                                        )}
                                    </button>
                                </form>
                                 
                                {/*<div className="mt-6 text-center">
                                    <span className="text-gray-600 text-sm">¿Aún no tienes una cuenta? </span>
                                    <button
                                        onClick={() => { setView("register"); setError(""); }}
                                        className="text-sm text-amber-500 hover:text-amber-300 transition-colors"
                                        style={{ fontWeight: 600 }}
                                    >
                                        Registrarme
                                    </button>
                                </div>*/}

                                <p className="mt-6 text-center text-xs text-gray-700">
                                    Acceso restringido a personal autorizado.
                                </p>
                            </>
                        )}

                        {/* ── FORGOT PASSWORD VIEW ── */}
                        {view === "forgot" && (
                            <>
                                <h2 className="text-center text-gray-100 mb-1" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                                    Recuperar Contraseña
                                </h2>
                                <p className="text-center text-gray-500 text-sm mb-8">
                                    Ingrese su correo y le enviaremos las instrucciones.
                                </p>

                                {error && (
                                    <div className="flex items-center gap-2 bg-red-950/60 border border-red-800/50 text-red-400 text-sm px-4 py-3 rounded-lg mb-5">
                                        <AlertCircle size={16} className="shrink-0" />
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleForgot} className="space-y-5">
                                    <div>
                                        <label className="block text-xs text-amber-500 tracking-widest uppercase mb-2">
                                            Correo
                                        </label>
                                        <input
                                            type="email"
                                            value={forgotEmail}
                                            onChange={(e) => setForgotEmail(e.target.value)}
                                            placeholder="nombre@gmail.com"
                                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all text-sm"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        style={{ fontWeight: 700, letterSpacing: "0.05em" }}
                                    >
                                        {isLoading ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            "ENVIAR INSTRUCCIONES"
                                        )}
                                    </button>
                                </form>

                                <div className="mt-6 text-center">
                                    <button
                                        onClick={() => { setView("login"); setError(""); }}
                                        className="text-sm text-amber-600 hover:text-amber-400 transition-colors"
                                    >
                                        ← Volver al inicio de sesión
                                    </button>
                                </div>
                            </>
                        )}

                        {/* ── REGISTER VIEW ── */}
                        {view === "register" && (
                            <>
                                <h2 className="text-center text-gray-100 mb-1" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                                    Registrarme
                                </h2>
                                <p className="text-center text-gray-500 text-sm mb-6">
                                    Complete el formulario para iniciar su proceso de registro.
                                </p>

                                {error && (
                                    <div className="flex items-center gap-2 bg-red-950/60 border border-red-800/50 text-red-400 text-sm px-4 py-3 rounded-lg mb-4">
                                        <AlertCircle size={16} className="shrink-0" />
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleRegister} className="space-y-4">
                                    <div>
                                        <label className="block text-xs text-amber-500 tracking-widest uppercase mb-2">
                                            Nombre Completo
                                        </label>
                                        <input
                                            type="text"
                                            value={regName}
                                            onChange={(e) => setRegName(e.target.value)}
                                            placeholder="Nombre y apellidos"
                                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs text-amber-500 tracking-widest uppercase mb-2">
                                            Grado / Rango
                                        </label>
                                        <select
                                            value={regRank}
                                            onChange={(e) => setRegRank(e.target.value)}
                                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all text-sm appearance-none"
                                        >
                                            <option value="" disabled className="text-gray-600">Seleccione su grado</option>
                                            {ranks.map((r) => (
                                                <option key={r} value={r} className="bg-gray-900">{r}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs text-amber-500 tracking-widest uppercase mb-2">
                                            Correo
                                        </label>
                                        <input
                                            type="email"
                                            value={regEmail}
                                            onChange={(e) => setRegEmail(e.target.value)}
                                            placeholder="nombre@gmail.com"
                                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs text-amber-500 tracking-widest uppercase mb-2">
                                            Contraseña
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={regPassword}
                                                onChange={(e) => setRegPassword(e.target.value)}
                                                placeholder="Mínimo 8 caracteres"
                                                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 pr-12 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all text-sm"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-400 transition-colors"
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs text-amber-500 tracking-widest uppercase mb-2">
                                            Confirmar Contraseña
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                value={regConfirmPassword}
                                                onChange={(e) => setRegConfirmPassword(e.target.value)}
                                                placeholder="Repita su contraseña"
                                                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 pr-12 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all text-sm"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-400 transition-colors"
                                            >
                                                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                                        style={{ fontWeight: 700, letterSpacing: "0.05em" }}
                                    >
                                        {isLoading ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />
                                                Procesando...
                                            </>
                                        ) : (
                                            "SOLICITAR MEMBRESÍA"
                                        )}
                                    </button>
                                </form>

                                <div className="mt-5 text-center">
                                    <button
                                        onClick={() => { setView("login"); setError(""); }}
                                        className="text-sm text-amber-600 hover:text-amber-400 transition-colors"
                                    >
                                        ← Ya tengo cuenta
                                    </button>
                                </div>
                            </>
                        )}

                        {/* ── SUCCESS VIEW ── */}
                        {view === "success" && (
                            <div className="text-center py-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-600/30 rounded-full flex items-center justify-center mx-auto mb-5">
                                    <CheckCircle size={40} className="text-amber-400" />
                                </div>
                                <h2 className="text-gray-100 mb-3" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                                    {view === "success" && loginId
                                        ? "Acceso Autorizado"
                                        : "Solicitud Enviada"}
                                </h2>
                                <p className="text-gray-400 text-sm mb-8 max-w-xs mx-auto">
                                    {forgotEmail && !loginId
                                        ? `Hemos enviado las instrucciones a ${forgotEmail}. Revise su bandeja de entrada.`
                                        : regName
                                            ? `Su solicitud de membresía ha sido recibida, ${regName}. Será contactado en un plazo de 48 horas hábiles.`
                                            : "Ha ingresado exitosamente al portal de socios del Casino Militar."}
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black rounded-lg transition-all duration-300"
                                    style={{ fontWeight: 700, letterSpacing: "0.05em" }}
                                >
                                    {forgotEmail && !loginId ? "ENTENDIDO" : regName ? "ACEPTAR" : "IR AL PORTAL"}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Bottom stripe */}
                    <div className="h-1 w-full bg-gradient-to-r from-amber-900 via-amber-600 to-amber-900 opacity-40" />
                </div>
            </div>
        </div>
    );
}
