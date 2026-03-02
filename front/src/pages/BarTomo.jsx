import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact';
import { General } from '../components/General';
import { Products } from '../components/Products';
import { NewsSection } from '../components/NewsSection';

export function BarTomo() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General title="Bar Tomo" description="Bar Tomo es el lugar perfecto para disfrutar de una experiencia única en el Casino Gaoriano. Disfruta de una amplia selección de productos."/>
                <Products title="Productos" description="Descubre nuestra selección exclusiva de productos y bebidas." />
                <NewsSection section="Bar Tomo" />
                <Contact direction="Segundo Piso Casino" phone="+1 (555) 123-4567" email="info@bartomo.com" schedule="Lunes a Viernes: 10:00 AM - 12:00 AM Sábado y Domingo: 12:00 PM - 2:00 AM" />
            </main>
            <Footer />
        </div>
    )
}
