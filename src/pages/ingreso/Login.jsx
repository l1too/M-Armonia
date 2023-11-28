import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import loginAction from "../../../redux/actions/loginForm";
import { useNavigate } from "react-router-dom";
import './Login.css'
import { NavLink } from 'react-router-dom'


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();
  let store = useSelector((state) => state.loginReducer);
  const navigate = useNavigate();





  async function saveData(e) {
    e.preventDefault();
    let logged = {
      email: emailRef.current.value ? emailRef.current.value : '',
      password: passwordRef.current.value ? passwordRef.current.value : '',
    };
    try {
      let res = await axios.post(`http://localhost:4000/api/auth/signin`, logged);
      let tokenx = res.data.response.token;
      if (res.data.success) {
        dispatch(loginAction.getToken(tokenx));
        localStorage.setItem("token", tokenx);
        localStorage.setItem(
          "user",
          JSON.stringify(res.data.response.userToken.id)
        );
        Swal.fire({
          icon: "success",
          text: res.data.message,
        });
        navigate("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "We found an error... ",
          text: `Errors: ${res.data.message.join(" , ")}`,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "We found an error...",
        text: `Errors: You have entered an invalid email or password.`,
      });
    }
  }

  return (<>

<form className="container-form max-w-[700px] mx-auto" ref={formRef}>
  <div className="mb-3">
    {/*  CARTEL INICIAR SESION */}
    <div className="loguearse">
      <p className="login">Iniciar Sesión</p>
    </div>
    <input placeholder="Username" id="email" name="email" className="form-control text-formulario" type="email"  ref={emailRef} required/>
  </div>
  <div className="mb-3">
    <input placeholder="Password" className="form-control text-formulario" type="password" id="password" ref={passwordRef} required />
  </div>
     {/* ENLACE A "NO TIENES CUENTA?" */}

     <p className="sin-cuenta text-formulario">
      <NavLink to='/signup'>No tienes una cuenta?</NavLink>
        
      </p>
   {/* BOTON SUBMIT */}
   <div className="container-submit-two">
   
        <NavLink value="Login" onClick={saveData} className="submit-signup bg-[#1EC598] text-white">
          Login
        </NavLink>
      </div>
</form>

 </> );
}