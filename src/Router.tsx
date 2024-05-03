import { Routes, Route } from 'react-router-dom'
import { App } from './App'

import { Dev } from './page/PageDev'


export function Router(){
    return (
        <Routes>
          <Route path='/' element={<Dev/>} />
          <Route path='/home' element={<App />} />
        </Routes>
    )
}