import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";
import { useRef } from "react";
import useTypewriterEffect from "../hooks/useTypewriterEffect";

export function Hero() {
  const container = useSplitTextAnimation();
  const textRef = useRef();
  const cursorRef = useRef();
  useTypewriterEffect(textRef, cursorRef, ["Gaoriano"]);

  return (
    <section className="py-20 px-4 bg-gray-900 h-screen flex items-center justify-center overflow-hidden" ref={container}>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
          Bienvenido<br />
          <span ref={textRef}></span><span ref={cursorRef} className="ml-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">|</span>
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
