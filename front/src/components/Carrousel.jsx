import { useState, useEffect, useRef } from "react";

export function Carrousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

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
        <section className="relative">
            <div className='mh-200 w-full flex items-center justify-center my-8'>
                <div className='h-full w-full overflow-hidden relative rounded-lg' onMouseEnter={stopAuto} onMouseLeave={startAuto}>
                    <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {images.map((src, idx) => (
                            <div key={idx} className='h-full w-full flex-shrink-0'>
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
