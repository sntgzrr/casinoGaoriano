import { Header } from '../components/Header'
import { General } from '../components/General'
import { Contact } from '../components/Contact'
import { NewsSection } from '../components/NewsSection'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { useFetchingProductsData } from '../hooks/useServices'
import casino1 from '../assets/casinoImages/casino1.png'
import casino2 from '../assets/casinoImages/casino2.png'
import casino3 from '../assets/casinoImages/casino3.png'

export function Casinos() {
    const { products } = useFetchingProductsData();
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General
                    title="Casinos"
                    description="Disfruta de las comidas gaorianas en nuestros Casinos."
                    images={[casino1, casino2, casino3]}
                />
                <Products title="Menú" description="Descubre nuestra selección de platos exquisitos."
                    products={products.filter(item => item.category === "Casinos")}
                    infoBanner={true}
                    infoBannerTitle="Compra"
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos únicamente tarjeta débito." />
                <NewsSection section="Comedores" />
                <Contact
                    direction="Primer Piso Casino"
                    phone="31111"
                    contact="ESALO"
                    schedule="L-V 10:00 - 22:00 S-D 12:00 - 20:00"
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
