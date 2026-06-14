import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact';
import { General } from '../components/General';
import { NewsSection } from '../components/NewsSection';
import barSkyline1 from "../assets/barSkylineImages/barSkyline1.avif";
import barSkyline2 from "../assets/barSkylineImages/barSkyline2.avif";

export function BarSkyline() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General
                    title="Bar Skyline"
                    description="Bar Skyline es el lugar perfecto para disfrutar de una lista de actividades de ocio únicas para los Gaorianos."
                    images={[barSkyline1, barSkyline2]}
                />
                <NewsSection section="Bar Skyline" 
                title1="Actividades de Ocio"
                description1="En Bar Skyline, ofrecemos una variedad de actividades de ocio para que los Gaorianos disfruten al máximo de su experiencia en el casino. Desde noches temáticas y eventos especiales hasta música en vivo y entretenimiento, siempre hay algo emocionante sucediendo en nuestro bar. Únete a nosotros para disfrutar de momentos inolvidables y experiencias únicas."
                title2="Noticias y Eventos"
                description2="Mantente al tanto de las últimas noticias y eventos en Bar Skyline. Desde promociones especiales hasta eventos temáticos, siempre hay algo emocionante sucediendo en nuestro bar. No te pierdas nuestras actualizaciones para estar informado sobre todas las actividades y ofertas exclusivas que tenemos para ti."
                />
                <Contact
                    direction="Segundo Piso Casino"
                    phone="+1 (555) 123-4567"
                    contact="ECEA"
                    schedule={`Jueves a Domingo: 
                                18:00 - 21:00`} 
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
