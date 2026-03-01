import { useState, useEffect, useRef } from "react";
import { useSplitTextAnimation } from "../hooks/useSplitTextAnimation";

export function Carrousel({ title, description, images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);
    const container = useSplitTextAnimation();

    const startAuto = () => {
        stopAuto();
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);
    };

    const stopAuto = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAuto();
        return () => stopAuto();
    }, [images.length]);

    const prev = () => {
        setCurrentSlide((s) => (s - 1 + images.length) % images.length);
        startAuto();
    };

    const next = () => {
        setCurrentSlide((s) => (s + 1) % images.length);
        startAuto();
    };

    return (
        <section className="py-20 px-4" ref={container}>
            <div className='container mx-auto max-w-7xl'>
                <div className='text-center mb-16 mt-10'>
                    <h2 className="split-text-chars text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                        {title}
                    </h2>
                    <p className="split-text-words text-gray-400 text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
            </div>
            <div className='mh-200 w-full flex items-center justify-center my-8 rounded-lg bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-8 rounded-xl border border-amber-900/30'>
                <div className='h-100 w-3/4 overflow-hidden relative rounded-lg' onMouseEnter={stopAuto} onMouseLeave={startAuto}>
                    <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {images.map((src, idx) => (
                            <div key={idx} className='h-100 w-full flex-shrink-0'>
                                <img src={src} alt={`Slide ${idx + 1}`} className='h-full w-full object-cover' />
                            </div>
                        ))}
                    </div>

                    <button aria-label='Anterior' onClick={prev} className='absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
                        </svg>
                    </button>

                    <button aria-label='Siguiente' onClick={next} className='absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
                        </svg>
                    </button>

                    <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2'>
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentSlide(idx);
                                    startAuto();
                                }}
                                aria-label={`Ir a slide ${idx + 1}`}
                                className={`h-2 w-8 rounded-full ${idx === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
