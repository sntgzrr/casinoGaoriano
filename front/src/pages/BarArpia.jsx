import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact';
import { General } from '../components/General';
import { Products } from '../components/Products';
import { NewsSection } from '../components/NewsSection';
import { useFetchingProductsData } from '../hooks/useServices'
import Gaori from "../assets/gaori_aniversario.jpg";

export function BarArpia() {
    const { products } = useFetchingProductsData();
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General
                    title="Bar Arpía"
                    description="Bar Arpía es el lugar perfecto para disfrutar de una experiencia única para el Gaoriano. Disfruta de una amplia selección de productos."
                    images={[Gaori, Gaori]}
                />
                <Products title="Productos" description="Descubre nuestra selección exclusiva de productos y bebidas."
                    products={products.filter(item => item.category === "Bar Arpía")}
                    infoBanner={true}
                    infoBannerTitle="Compra para Miembros"
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos únicamente tarjetas de débito." />
                <NewsSection section="Bar Arpía" />
                <Contact
                    direction="ESCOM"
                    phone="+1 (555) 123-4567"
                    contact="ESALO"
                    schedule="L-V: 10:00 - 12:00"
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
