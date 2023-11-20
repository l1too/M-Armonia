
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import { Routes, Route } from 'react-router-dom' 
import Inicio from './pages/Inicio/Inicio'
import Signup  from './pages/Signup'

function App() {


  return (
    
    <>
          
<BrowserRouter>


          <Routes>
          <Route path='/' element={<Inicio/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
      </Routes>

      </BrowserRouter>
    </>
   
  )
}

export default App
