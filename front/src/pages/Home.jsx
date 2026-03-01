import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { News } from '../components/News'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <main>
        <Hero />
        <Services />
        <News />
      </main>
      <Footer />
    </div>
  )
}
