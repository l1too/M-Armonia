
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/inicio/Inicio'
import Signup from './pages/ingreso/Signup'
import Login from './pages/ingreso/Login'
import { Home } from './pages/home/Home'
import Estres from './pages/estres/Estres'
import Burnout from './pages/burnout/Burnout'
import Insomnio from './pages/insomnio/Insomnio'


// import { Routes, Route } from 'react-router-dom' 

function App() {


  return (
    
    <Routes>

      {/* <Route path="/" element={ <Inicio/>} />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/signup" element={ <Signup/> } /> */}
      <Route path='/' element={ <Inicio/> }/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/home' element={ <Home/>}/>
      <Route path='/estres' element={ <Estres/> }/>
      <Route path='/burnout' element={ <Burnout/>}/>
      <Route path='/insomnio' element={ <Insomnio/> }/>
    </Routes>
   
  )
}

export default App
