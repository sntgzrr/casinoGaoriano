import { Header } from '../components/Header'
import { General } from '../components/General'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export function Piscina() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General title="Piscina" description="Disfruta de nuestra piscina para relajarte y divertirte con amigos." />
                <Contact direction="Primer Piso Casino" phone="31111" email="piscina@gaoriano.com" schedule="Lunes a Viernes 10:00 - 22:00"/>
            </main>
            <Footer />
        </div>
    )
}
