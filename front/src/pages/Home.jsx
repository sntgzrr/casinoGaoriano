import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { News } from '../components/News'
import { Footer } from '../components/Footer'
import { ScrollToInfo } from '../utils/ScrollToInfo'
import newsData from '../mocks/newsData.json'

export function Home() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <main>
        <ScrollToInfo />
        <Hero />
        <Services />
        <News news={newsData} />
      </main>
      <Footer />
    </div>
  )
}
