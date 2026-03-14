import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact';
import { General } from '../components/General';
import { Products } from '../components/Products';
import { NewsSection } from '../components/NewsSection';
import productsData from '../mocks/productsData.json'
import barTomo2 from "../assets/barTomoImages/barTomo2.png";
import barTomo3 from "../assets/barTomoImages/barTomo3.png";
import barTomo4 from "../assets/barTomoImages/barTomo4.png";

export function BarTomo() {
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
                    products={productsData.filter(item => item.category === "BarTomo")} 
                    infoBanner={true}
                    infoBannerTitle="Compra para Miembros" 
                    infoBannerText="Todos nuestros productos están disponibles para el personal Familiar Militar y Personal Orgánico. Aceptamos únicamente tarjetas de débito."/>
                <NewsSection section="Bar Tomo" />
                <Contact 
                    direction="Segundo Piso Casino" 
                    phone="+1 (555) 123-4567" 
                    contact="ESALO" 
                    schedule="L-V: 13:00 - 15:00 / 18:00 - 21:00 S-D: 8:00 - 21:00" 
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
