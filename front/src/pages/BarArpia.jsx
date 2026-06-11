import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact';
import { General } from '../components/General';
import { Products } from '../components/Products';
import { NewsSection } from '../components/NewsSection';
import { useFetchingProductsData } from '../hooks/useServices'
import barApia1 from "../assets/barArpiaImages/barArpia1.png";
import barApia2 from "../assets/barArpiaImages/barArpia2.png";

export function BarArpia() {
    const { products } = useFetchingProductsData();
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General
                    title="Bar Arpía"
                    description="Bar Arpía es el lugar perfecto para disfrutar de una experiencia única para el Gaoriano. Disfruta de una amplia selección de productos."
                    images={[barApia1, barApia2]}
                />
                <Products title="Productos" description="Descubre nuestra selección exclusiva de productos y bebidas."
                    products={products.filter(item => item.category === "Bar Arpía")}
                    infoBanner={true}
                    infoBannerTitle="Compra"
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos únicamente tarjetas de débito y crédito." />
                <NewsSection section="Bar Arpía" 
                    title1="Tener en cuenta"
                    description1="En el bar Arpía ofrecemos una variedad de snacks y aperitivos para complementar tu experiencia. Disfruta de nuestras deliciosas opciones mientras te relajas en el ambiente único del Bar Arpía."
                    title2="Horarios de atención"
                    description2="El bar Arpía está abierto de lunes a viernes, con horarios específicos para cada día. Consulta nuestros horarios para planificar tu visita y disfrutar de nuestros productos y servicios."
                />
                <Contact
                    direction="ESCOM"
                    phone="+1 (555) 123-4567"
                    contact="ESALO"
                    schedule={`Lunes, martes, jueves y viernes: 
                                09:00 - 11:00
                                15:00 - 17:00`} 
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
