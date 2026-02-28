import GaoriAniversario from "../assets/gaori_aniversario.jpg";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

export function Hero() {
  const container = useSplitTextAnimation();
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden" ref={container}>
      <div className="absolute inset-0">
        <img src={GaoriAniversario} alt="Gaori Aniversario" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="split-text-chars text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
          Bienvenid@ al<br />
          Casino Gaoriano
        </h2>
        <button
          onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50"
        >
          Descubre Nuestros Servicios
        </button>
      </div>
    </section>
  );
}
