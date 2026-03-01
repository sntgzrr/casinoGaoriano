import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact';
import { General } from '../components/General';
import { Carrousel } from '../components/Carrousel';
import Gaori from "../assets/gaori_aniversario.jpg";

export function BarTomo() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General title="Bar Tomo" description="Sumérgete en la atmósfera única de Bar Tomo, disfruta de una amplia selección de productos." />
                <Carrousel title="Nuestros Productos" description="Explora nuestra selección de productos exclusivos." images={[Gaori, Gaori]} />
                <Contact direction="Segundo Piso Casino" phone="+1 (555) 123-4567" email="info@bartomo.com" schedule="Lunes a Viernes: 10:00 AM - 12:00 AM Sábado y Domingo: 12:00 PM - 2:00 AM" />
            </main>
            <Footer />
        </div>
    )
}
