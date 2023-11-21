import { useRef} from 'react'
import './Inicio/input.css'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

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
              title: 'We found an error...',
              text: `Errors: ${res.data.message.join(', ')}`,
            })
      } 
  }catch(err){
          Swal.fire({
              icon: 'error',
              title: 'Error, the user email, itÂ´s already exist',
              text: 'Try again with a new email.',
            })     
  }
}
return (
  <form className="form-login-singup" ref={formRef}>
  <p id="heading">Sign Up</p>
  <div className="field">
  
    <input placeholder="Name" className="input-field" type="text" id="name" ref={nameRef} required/>
  </div>
  <div className="field">
 
    <input placeholder="Last Name" className="input-field" type="text" id="lastname" ref={lastNameRef} required/>
  </div>
  <div className="field">
  
    <input placeholder="Age" className="input-field" type="text" id="age" ref={ageRef} required/>
  </div>
  <div className="field">
  
    <input placeholder="Email" className="input-field" type="email" id="email" ref={emailRef} required/>
  </div>
  <div className="field">
  
    <input placeholder="Password" className="input-field" type="password" id="passSignIn" ref={passwordRef} required/>
  </div>
  <div className="container-submit-two">
      <input
        onClick={saveData}
        className="submit-signup"
        type="button"
        value="Submit"
      />
    </div>
</form>
  )
}