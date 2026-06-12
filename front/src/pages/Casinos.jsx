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
                    qrCode={true}
                    infoBannerTitle="Compra"
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos únicamente tarjetas débito, crédito y pagos por medio de QR."
                    buttonInfoBanner={true}
                />
                <NewsSection section="Comedores"
                    title1="Tener en cuenta"
                    title2="Link Desarranche"
                    description1="Los días Sábados y Domingos, se debe de llenar el siguiente link que se habilitará a las
                                18:00 horas y se cerrará a las 23:00 horas del día anterior. Personal que no llene el formulario, deberá de esperar a disponibilidad de alimentos."
                    description2="Para realizar el desarranche, por favor llena el formulario en nuestro link de Google Forms. Recuerda llenar el link con anticipación."
                    buttonText={true}
                    buttonInfoBanner={true}
                />
                <Contact
                    direction="Primer Piso Casino"
                    phone="31111"
                    contact="ESALO"
                    schedule={`Desayuno: 06:30 - 07:30
                                Almuerzo: 12:30 - 14:00
                                FIN DE SEMANA
                                Desayuno: 08:30 - 09:30
                                Almuerzo: 13:00 - 14:00`}
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
