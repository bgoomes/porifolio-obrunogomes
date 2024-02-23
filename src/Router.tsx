import { Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Dev } from './components/PageDev'

export function Router(){
    return (
        <Routes>
          <Route path='/' element={<Dev />} />
            <Route path='/dev' element={<App />} />   
          <Route />  
        </Routes>
    )
}