import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact';
import { General } from '../components/General';
import { Products } from '../components/Products';
import { NewsSection } from '../components/NewsSection';
import { useFetchingProductsData } from '../hooks/useServices';
import barTomo2 from "../assets/barTomoImages/barTomo2.avif";
import barTomo3 from "../assets/barTomoImages/barTomo3.avif";
import barTomo4 from "../assets/barTomoImages/barTomo4.avif";

export function BarTomo() {
    const { products } = useFetchingProductsData();
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General
                    title="Bar Tomo"
                    description="Bar Tomo es el lugar perfecto para disfrutar de una experiencia única en el Casino Gaoriano. Disfruta de una amplia selección de productos."
                    images={[barTomo2, barTomo3, barTomo4]}
                />
                <Products title="Productos" description="Descubre nuestra selección exclusiva de productos y bebidas."
                    products={products.filter(item => item.category === "Bar Tomo")}
                    infoBanner={true}
                    infoBannerTitle="Compra"
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos tarjetas de débito y crédito, excepto tarjetas American Express."
                    />
                <NewsSection
                    section="Bar Tomo"
                    title1="Horarios de atención"
                    description1="El bar Tomo está abierto de lunes a domingo, con horarios específicos para cada día. Consulta nuestros horarios para planificar tu visita y disfrutar de nuestros productos y servicios."
                    title2="Horarios de Inventario"
                    description2="El bar Tomo realiza inventarios periódicos para garantizar la calidad y disponibilidad de nuestros productos. Durante estos períodos, es posible que algunos productos no estén disponibles temporalmente. Agradecemos tu comprensión mientras trabajamos para ofrecerte la mejor experiencia posible."
                />
                <Contact
                    direction="Segundo Piso Casino"
                    phone="+1 (555) 123-4567"
                    contact="ESALO"
                    schedule={`Lunes, martes, jueves y viernes: 
                                12:30 - 14:00
                                18:00 - 21:00 
                            Miércoles: 
                                17:00 - 21:00
                            Fin de semana:
                                10:30 - 14:30
                                18:00 - 21:00`}
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
