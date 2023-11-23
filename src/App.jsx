
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/inicio/Inicio'
import Signup from './pages/ingreso/Signup'
import Login from './pages/ingreso/Login'


// import { Routes, Route } from 'react-router-dom' 

function App() {


  return (
    
    <Routes>

      {/* <Route path="/" element={ <Inicio/>} />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/signup" element={ <Signup/> } /> */}
      <Route path='/' element={<Inicio/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={ <Login/>}/>
    
     
    </Routes>
   
  )
}

export default App
