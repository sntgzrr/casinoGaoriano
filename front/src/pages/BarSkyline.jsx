import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact';
import { General } from '../components/General';
import { NewsSection } from '../components/NewsSection';
import barSkyline1 from "../assets/barSkylineImages/barSkyline1.jpg";
import barSkyline2 from "../assets/barSkylineImages/barSkyline2.png";

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
                <NewsSection section="Bar Skyline" />
                <Contact
                    direction="Segundo Piso Casino"
                    phone="+1 (555) 123-4567"
                    contact="ECEA"
                    schedule="J-D: 18:00 - 21:00"
                    showPhone={false}
                />
            </main>
            <Footer />
        </div>
    )
}
