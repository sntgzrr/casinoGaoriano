import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useSplitTextAnimation } from '../hooks/useSplitTextAnimation'

export function BarTomo() {
    const container = useSplitTextAnimation();
    return (
        <div className='min-h-screen bg-black text-white' ref={container}>
            <Header />
                <section className='py-20 px-4 bg-gradient-to-b from-black to-gray-900'>
                    <div className='container mx-auto max-w-7xl'>
                        <div className='text-center mb-16 mt-10'>
                            <h2 className="split-text-chars text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                                Bar Tomo
                            </h2>
                            <p className="split-text-words text-gray-400 text-lg max-w-2xl mx-auto">
                                Sumérgete en la atmósfera única de Bar Tomo, disfruta de una amplia selección de productos.
                            </p>
                        </div>
                    </div>
                </section>
            <Footer />
        </div>
    )
}
