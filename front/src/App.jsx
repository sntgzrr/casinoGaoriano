import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
function App() {

  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  )
}

export default App
