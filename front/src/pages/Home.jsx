import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { News } from '../components/News'
import { Footer } from '../components/Footer'
import { ScrollToInfo } from '../utils/ScrollToInfo'
import { useFetchingNewsData } from '../hooks/useServices'


export function Home() {
  const { news } = useFetchingNewsData();

  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <main>
        <ScrollToInfo />
        <Hero />
        <Services />
        <News news={news} />
      </main>
      <Footer />
    </div>
  )
}
