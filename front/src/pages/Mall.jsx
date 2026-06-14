import { Header } from '../components/Header'
import { General } from '../components/General'
import { Contact } from '../components/Contact'
import { NewsSection } from '../components/NewsSection'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { useFetchingProductsData } from '../hooks/useServices'
import mall1 from '../assets/mallImages/mall1.avif'
import mall2 from '../assets/mallImages/mall2.avif'

export function Mall() {
    const { products } = useFetchingProductsData();
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General
                    title="Mall"
                    description="Disfruta de una cena todos los días en nuestro Mall."
                    images={[mall1, mall2]}
                />
                <Products title="Menú" description="Descubre nuestra selección de platos exquisitos."
                    products={products.filter(item => item.category === "Mall")}
                    qrCode = {true}
                    infoBanner={true}
                    infoBannerTitle="Compra"
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos tarjetas débito, crédito o pagos por meido de código QR." />
                <NewsSection section="Mall"
                    title1="Para tener en cuenta"
                    description1="Nuestro servicio de comida en el Mall está disponible para el personal familiar militar, personal orgánico y personal de contratistas."
                    title2="Horarios de atención"
                    description2="Nuestro servicio está disponible todos los días de 18:00 a 21:00 horas hasta acabar existencias." />
                <Contact
                    direction="Primer Piso Casino"
                    phone="31111"
                    contact="ESALO"
                    schedule={`Lunes a Domingo: 
                                18:00 - 21:00`}
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
