import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import { Provider } from "react-redux";
import rootReducer from "../redux/reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<Provider store={store}>

<Routes>
<Route path='/' element={<Inicio/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/login' element={<Login/>}/>

</Routes>
</Provider>
  </BrowserRouter>,
)
