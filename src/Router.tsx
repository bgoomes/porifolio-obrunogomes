import { Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Home } from './page/Home'
import { Sobre } from './page/Sobre'
import { Projetos } from './page/Projetos'
import { Contato } from './page/Contato'

export function Router(){
    return (
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/home' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
    )
}