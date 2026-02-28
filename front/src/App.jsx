import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { BarTomo } from './pages/BarTomo'
function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/barTomo' element={<BarTomo />} />
    </Routes>
  )
}

export default App
