import { Header } from '../components/Header'
import { General } from '../components/General'
import { Contact } from '../components/Contact'
import { NewsSection } from '../components/NewsSection'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import productsData from '../mocks/productsData.json'
import Gaori from "../assets/gaori_aniversario.jpg";

export function Casinos() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General 
                    title="Comedores" 
                    description="Disfruta de las comidas gaorianas en nuestros comedores." 
                    images={[Gaori, Gaori]}
                />
                <Products title="Menú" description="Descubre nuestra selección de platos exquisitos."
                    products={productsData.filter(item => item.category === "Casino")}
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
