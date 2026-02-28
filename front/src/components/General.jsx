import { useSplitTextAnimation } from '../hooks/useSplitTextAnimation'

export function General({ title, description }) {
    const container = useSplitTextAnimation();
    return (
        <section className='py-20 px-4 ' ref={container}>
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-1 h-120 mt-12">
                <div className='md:col-span-2 md:row-span-1 rounded-lg bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-8 rounded-xl border border-amber-900/30'>
                    IMG
                </div>
                <div className='md:col-span-2 md:row-span-1 rounded-lg bg-gradient-to-br from-amber-900/10 to-amber-950/10 p-8 rounded-xl border border-amber-900/30'>
                    TEXT
                </div>
            </div>
        </section>
    )
}
