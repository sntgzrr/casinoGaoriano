import { Header } from '../components/Header'
import { General } from '../components/General'
import { Contact } from '../components/Contact'
import { NewsSection } from '../components/NewsSection'
import { Footer } from '../components/Footer'
import piscina1 from "../assets/piscinaImages/piscina1.png";
import piscina2 from "../assets/piscinaImages/piscina2.png";
import piscina3 from "../assets/piscinaImages/piscina3.png";

export function Piscina() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <General 
                    title="Piscina" 
                    description="Disfruta de nuestra piscina para relajarte y divertirte con amigos." 
                    images={[piscina1, piscina2, piscina3]}
                />
                <NewsSection 
                    section="Piscina" 
                    title1="Tener en cuenta"
                    description1="El uso de la piscina es exlusivo para personal órganico y familiares militares."
                    title2="Horarios de Mantenimiento"
                    description2="Durante el mes de marzo, se realizarán trabajos de mantenimiento en la zona de la piscina."
                />
                <Contact 
                    direction="Primer Piso Casino" 
                    phone="31111"
                    contact="SETGA"
                    schedule="L-D 10:00 - 22:00"
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
