
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/inicio/Inicio'
import Signup from './pages/ingreso/Signup'
import Login from './pages/ingreso/Login'
import { Home } from './pages/home/Home'
import Estres from './pages/estres/Estres'
import Burnout from './pages/burnout/Burnout'
import Music from './pages/Music/Music'
import Insomnio from './pages/insomnio/Insomnio'
import Game from './components/games/Game'
import Notas from './pages/notas/notas'
import { DesktopWelcome } from './pages/desktopWelcome/DesktopWelcome'


// import { Routes, Route } from 'react-router-dom' 

function App() {
  const isMobile = window.innerWidth < 600;


  return (
    
    <Routes>
      <Route path='/' element={ isMobile ? <Inicio/> : <DesktopWelcome/> }/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/home' element={ <Home/>}/>
      <Route path='/estres' element={ <Estres/> }/>
      <Route path='/burnout' element={ <Burnout/>}/>
      <Route path='/music' element={ <Music/> }/>
      <Route path='/insomnio' element={ <Insomnio/> }/>
      <Route path='/game' element={ <Game />} />
      <Route path='/notas' element={ <Notas/>} />
    </Routes>


   
  )
}

export default App
