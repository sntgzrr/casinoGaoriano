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
                    infoBannerTitle="Desarranche"
                    infoBannerText="Para realizar el desarranche, por favor llena el formulario en nuestro sitio web. En caso de alguna duda, nuestro equipo estará en el casino encantado de asistirte." 
                    buttonInfoBanner={true}
                />
                <NewsSection section="Comedores"
                    title1="Tener en cuenta"
                    title2="Horarios de atención"
                    description1="Los días Sábados y Domingos, se debe de llenar el siguiente link que se habilitará los días viernes a las
                                18:00 horas y se cerrará a las 06:00 del día sábado. Personal que no llene el formulario, deberá de esperar a disponibilidad de alimentos."
                    description2="Lunes a Viernes: 10:00 - 22:00
                                Sábados y Domingos: 12:00 - 20:00"
                    buttonText={true}
                />
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
