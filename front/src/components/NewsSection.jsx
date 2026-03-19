import { Calendar, Bell } from "lucide-react";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";
import { useState, useEffect } from "react";

export function NewsSection({ title1, description1, title2, description2, buttonText=false }) {
    const container = useSplitTextAnimation();
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const day = now.getDay();
            const hours = now.getHours();
            if (day >= 5 && day <= 6 && hours >= 18 && hours <= 6) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }
        };
        buttonText && checkTime();
    }, [buttonText]);

    return (
        <section ref={container} className="py-20 px-4 bg-gray-900">
            {/* Info Section */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/20 rounded-xl p-8 border border-blue-900/30">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Bell className="text-blue-400" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-blue-400 mb-2">{title1}</h3>
                            <p className="text-gray-300">
                                {description1}
                            </p>
                            {buttonText && (
                                <button
                                    disabled={isDisabled}
                                    onClick={() => window.open("https://forms.gle/9Zt3n2h7mL8sHj5b6", "_blank")}
                                    className={isDisabled ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform shadow-lg shadow-amber-500/50 cursor-not-allowed opacity-50 mt-4"
                                        : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50 cursor-pointer mt-4"}
                                >
                                Ingresar al Link
                            </button> )}
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-amber-900/20 to-amber-950/20 rounded-xl p-8 border border-amber-900/30">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Calendar className="text-amber-400" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-amber-400 mb-2">{title2}</h3>
                            <p className="text-gray-300">
                                {description2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
