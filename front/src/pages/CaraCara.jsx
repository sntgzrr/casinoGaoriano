import { Header } from '../components/Header'
import { General } from '../components/General'
import { Contact } from '../components/Contact'
import { NewsSection } from '../components/NewsSection'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { useFetchingProductsData } from '../hooks/useServices'
import caraCara1 from '../assets/caraCaraImages/caraCara1.png'
import caraCara2 from '../assets/caraCaraImages/caraCara2.png'
import caraCara3 from '../assets/caraCaraImages/caraCara3.png'

export function CaraCara() {
    const { products } = useFetchingProductsData();
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General 
                    title="Cara Cara" 
                    description="Disfruta de nuestra zona de comidas Cara Cara para comer deliciosos platos a la carta."
                    images={[caraCara1, caraCara2, caraCara3]}
                />
                <Products title="Productos" description="Descubre nuestra selección de platos exquisitos y bebidas refrescantes."
                    products={products.filter(item => item.category === "Cara Cara")} 
                    infoBanner={true} 
                    infoBannerTitle="Compra" 
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos únicamente pagos por Nequi o llave Bre-B." />
                <NewsSection section="Cara Cara" 
                    title1="Tener en cuenta"
                    description1="El uso de Cara Cara es de uso para cualquier persona que visite el casino. Sin embargo, el consumo de los productos ofrecidos en Cara Cara es exclusivo para el personal Familiar Militar y Personal Orgánico."
                    title2="Días de Atención"
                    description2="Los días en que abre el servicio de comidas Cara Cara dependerá de disponibilidad de productos."
                />
                <Contact 
                    direction="Primer Piso Casino" 
                    phone="31111" 
                    contact="ESALO" 
                    schedule={`Lunes a Viernes: 
                                18:00 - 21:00
                                Sábados y Domingos: 
                                08:00 - 21:00`} 
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
