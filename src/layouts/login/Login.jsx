import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import loginAction from "../../../redux/actions/loginForm";
import { useNavigate } from "react-router-dom";
import styles from './login.module.css'
import Boton from "../../components/Boton/Boton";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();
  let store = useSelector((state) => state.loginReducer);
  const navigate = useNavigate();

  console.log(store);
  async function saveData(e) {
    e.preventDefault();
    let logged = {
      email: emailRef.current.value ? emailRef.current.value : '',
      password: passwordRef.current.value ? passwordRef.current.value : '',
    };
    try {
      let res = await axios.post(`http://localhost:4000/api/auth/signin`, logged);
      let tokenx = res.data.response.token;
      console.log(res.data.response);
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
        navigate("/");
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
  <form className={styles.formLogin} ref={formRef}>
    <div className={styles.loginTitle}>
      <p id="heading">Iniciar Sesion</p>
    </div>
    <div className="field">

      <input placeholder="Username" className={styles.loginEmail} type="email" id="emailSignIn" ref={emailRef} required/>
    </div>
    <div className="field">

      <input placeholder="Password" className={styles.loginPassword} type="password" id="passSignIn" ref={passwordRef} required/>
    </div>
    <div className="container-submit-two">
        <input
          onClick={saveData}
          className="submit-signup"
          type="button"
          value="Submit"
        />
        <Boton onClick={saveData} texto={"Login"}type="button" value="Submit" />
      </div>
</form>
 </> );
}