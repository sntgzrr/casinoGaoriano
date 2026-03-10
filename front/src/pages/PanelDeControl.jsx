import { Header } from "../components/Header";
import { AdminDashboard } from "../components/AdminDashboard";
import { Footer } from "../components/Footer";

export function PanelDeControl() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Header />
            <main>
                <AdminDashboard />
            </main>
            <Footer />
        </div>
    )
}
