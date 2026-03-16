import { Header } from '../components/Header'
import { General } from '../components/General'
import { Contact } from '../components/Contact'
import { NewsSection } from '../components/NewsSection'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { useFetchingProductsData } from '../hooks/useServices'
import Gaori from "../assets/gaori_aniversario.jpg";

export function Mall () {
    const { products } = useFetchingProductsData();
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General 
                    title="Mall" 
                    description="Disfruta de una cena todos los días en nuestro Mall." 
                    images={[Gaori, Gaori]}
                />
                <Products title="Menú" description="Descubre nuestra selección de platos exquisitos."
                    products={products.filter(item => item.category === "Mall")} 
                    infoBanner={true} 
                    infoBannerTitle="Compra" 
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos únicamente tarjetas débito." />
                <NewsSection section="Mall" />
                <Contact 
                    direction="Primer Piso Casino" 
                    phone="31111" 
                    contact="ESALO" 
                    schedule="L-D: 18:00 - 21:00" 
                    showContact={false}
                />
            </main>
            <Footer />
        </div>
    )
}
