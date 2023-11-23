
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/inicio/Inicio'
import Signup from './pages/ingreso/Signup'
import Login from './pages/ingreso/Login'
import { Info } from './pages/info/Info'
import { Home } from './pages/home/Home'


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
      <Route path='/info' element={ <Info/>}/>
      <Route path='/home' element={ <Home/>}/>
    </Routes>
   
  )
}

export default App
