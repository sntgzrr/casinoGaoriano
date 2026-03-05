import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact';
import { General } from '../components/General';
import { Products } from '../components/Products';
import { NewsSection } from '../components/NewsSection';
import productsData from '../mocks/productsData.json'
import Gaori from "../assets/gaori_aniversario.jpg";

export function BarTomo() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General 
                    title="Bar Tomo" 
                    description="Bar Tomo es el lugar perfecto para disfrutar de una experiencia única en el Casino Gaoriano. Disfruta de una amplia selección de productos."
                    images={[Gaori, Gaori]}
                />
                <Products title="Productos" description="Descubre nuestra selección exclusiva de productos y bebidas." 
                    products={productsData.filter(item => item.category === "BarTomo")} 
                    infoBanner={true}
                    infoBannerTitle="Compra para Miembros" 
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos únicamente tarjetas de débito."/>
                <NewsSection section="Bar Tomo" />
                <Contact 
                    direction="Segundo Piso Casino" 
                    phone="+1 (555) 123-4567" 
                    contact="ESALO" 
                    schedule="L-V: 10:00 AM - 12:00 AM S-D: 12:00 PM - 2:00 AM" 
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
