import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { BarTomo } from '../pages/BarTomo'
import { Piscina } from '../pages/Piscina'
import { CaraCara } from '../pages/CaraCara'

export function PageRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/barTomo' element={<BarTomo />} />
            <Route path='/piscina' element={<Piscina />} />
            <Route path='/caraCara' element={<CaraCara />} />
        </Routes>
    )
}
