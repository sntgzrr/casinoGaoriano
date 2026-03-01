import { useSplitTextAnimation } from '../hooks/useSplitTextAnimation'
import { Carrousel } from './Carrousel';
import Gaori from "../assets/gaori_aniversario.jpg";

export function General({ title, description }) {
    const container = useSplitTextAnimation();
    return (
        <section className='py-20 px-4 bg-gray-900' ref={container}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-1 h-full mt-12 rounded-lg bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-8 rounded-xl border border-amber-900/30">
                <div className='md:col-span-2 md:row-span-1'>
                    <Carrousel images={[Gaori, Gaori]} />
                </div>
                <div className='md:col-span-2 md:row-span-1 text-gray-400 text-lg max-w-2xl mx-auto flex flex-col items-center justify-center italic'>
                    <h2 className="split-text-chars text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                        {title}
                    </h2>
                    <p className="split-text-words text-gray-400 text-lg max-w-2xl mx-auto italic">
                        "{description}"
                    </p>
                </div>
            </div>
        </section>
    )
}
