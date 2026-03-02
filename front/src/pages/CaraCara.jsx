import { Header } from '../components/Header'
import { General } from '../components/General'
import { Contact } from '../components/Contact'
import { NewsSection } from '../components/NewsSection'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import productsData from '../mocks/productsData.json'

export function CaraCara() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General title="Cara Cara" description="Disfruta de nuestra zona de comidas Cara Cara para comer deliciosos platos a la carta." />
                <Products title="Cara Cara" description="Descubre nuestra selección de platos exquisitos y bebidas refrescantes."
                    products={productsData.filter(item => item.category === "CaraCara")} 
                    infoBanner={true} 
                    infoBannerTitle="Compra" 
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos únicamente Nequi." />
                <NewsSection section="Cara Cara" />
                <Contact direction="Primer Piso Casino" phone="31111" email="caraCara@gaoriano.com" schedule="Lunes a Viernes 10:00 - 22:00" />
            </main>
            <Footer />
        </div>
    )
}
