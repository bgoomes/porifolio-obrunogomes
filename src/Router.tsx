import { Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Home } from './page/Home'

export function Router(){
    return (
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/home' element={<Home />} />
        </Routes>
    )
}