import { useRef} from 'react'
import './Login.css'
import '../Inicio/input.css'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

export default function Input() {
  const navigate = useNavigate();

    const nameRef = useRef()
    const lastNameRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const formRef = useRef()

  async  function saveData(e) {
    e.preventDefault()
    const userValue = {
      name: nameRef.current ? nameRef.current.value : '',
      lastName: lastNameRef.current ? lastNameRef.current.value : '',
      age: ageRef.current ? ageRef.current.value : '',
      email: emailRef.current ? emailRef.current.value : '',
      password: passwordRef.current ? passwordRef.current.value : '',
    };
    
    try{
      let res = await axios.post(`http://localhost:4000/api/auth`, userValue)
      if(res.data.success){
          Swal.fire({
              icon: 'success',
              title: 'Gracias por Registrarte!',
              text: `${res.data.message}`,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login');
          }
          })
      formRef.current.reset() 
      }    
      else{
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: `Errors: ${res.data.message.join(', ')}`,
            })
      } 
  }catch(err){
          Swal.fire({
              icon: 'error',
              title: 'Error, the user email, it´s already exist',
              text: 'Try again with a new email.',
            })     
  }
}
return (
<>
<form className="container-form" ref={formRef}>
  <div className="mb-3">
    {/*  CARTEL INICIAR SESION */}
    <div className="register">
      <p className="login">Crear Cuenta</p>
  </div>

  <div className="mb-3"></div>
    <input placeholder="Name" className="form-control text-formulario" type="text" id="name" ref={nameRef} required />
  </div>

  <div className="mb-3">
    <input placeholder="Last Name" className="form-control text-formulario" type="text" id="lastname" ref={lastNameRef} required />
  </div>

  <div className="mb-3">
    <input placeholder="Age" className="form-control text-formulario" type="text" id="age" ref={ageRef} required/>
  </div>

  <div className="mb-3">
    <input placeholder="Email" className="form-control text-formulario" type="email" id="email" ref={emailRef} required />
  </div>

  <div className="mb-3">
    <input placeholder="Password" className="form-control text-formulario" type="password" id="password" ref={passwordRef} required />
  </div>

     {/* ENLACE A "NO TIENES CUENTA?" */}

     <p className="sin-cuenta text-formulario">
      <NavLink to='/login'>Ya tienes una cuenta?</NavLink>
        
      </p>
   {/* BOTON SUBMIT */}
   <div className="container-submit-two">
      <input
        onClick={saveData}
        className="submit-signup"
        type="button"
        value="Crear Cuenta"
      />
    </div>
</form>
</> 
)
}
