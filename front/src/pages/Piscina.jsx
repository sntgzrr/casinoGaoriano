import { Header } from '../components/Header'
import { General } from '../components/General'
import { Contact } from '../components/Contact'
import { NewsSection } from '../components/NewsSection'
import { Footer } from '../components/Footer'

export function Piscina() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General title="Piscina" description="Disfruta de nuestra piscina para relajarte y divertirte con amigos." />
                <NewsSection section="Piscina" />
                <Contact 
                    direction="Primer Piso Casino" 
                    phone="31111"
                    contact="SETGA"
                    schedule="L-D 10:00 - 22:00"
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
