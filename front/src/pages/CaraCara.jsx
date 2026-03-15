import { Header } from '../components/Header'
import { General } from '../components/General'
import { Contact } from '../components/Contact'
import { NewsSection } from '../components/NewsSection'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { useFetchingProductsData } from '../hooks/useServices'
import Gaori from "../assets/gaori_aniversario.jpg";

export function CaraCara() {
    const { products } = useFetchingProductsData();
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General 
                    title="Cara Cara" 
                    description="Disfruta de nuestra zona de comidas Cara Cara para comer deliciosos platos a la carta."
                    images={[Gaori, Gaori]}
                />
                <Products title="Cara Cara" description="Descubre nuestra selección de platos exquisitos y bebidas refrescantes."
                    products={products.filter(item => item.category === "Cara Cara")} 
                    infoBanner={true} 
                    infoBannerTitle="Compra" 
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos únicamente Nequi." />
                <NewsSection section="Cara Cara" />
                <Contact 
                    direction="Primer Piso Casino" 
                    phone="31111" 
                    contact="ESALO" 
                    schedule="J: 18:00 - 21:00 / V: 18:00 - 21:00" 
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
