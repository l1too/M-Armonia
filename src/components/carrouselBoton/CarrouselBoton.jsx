import { NavLink, useNavigate } from 'react-router-dom'
import styles from './carrouselBoton.module.css'
import { useSelector,useDispatch } from "react-redux";
import loginAction from "../../../redux/actions/loginForm"
import Swal from "sweetalert2";

export const CarrouselBoton = () => {
  let token = useSelector((store) => store.loginInReducer.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    Swal.fire({
      title: "¿Estás seguro que queres cerrar la sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f00909",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Si, cerrar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        const tokenStorage = localStorage.getItem("token");
        dispatch(loginAction.logOut(tokenStorage));
        Swal.fire({
          title: "Sesión Cerrada",
          icon: "success",
          width: "25rem",
          padding: "2rem",
        });
        navigate("/login");
      }
    });
  };
  return (
    <div className="text-sm breadcrumbs align-middle">
  <ul className=' gap-2 justify-center' >
    <NavLink to={"/home"} className={styles.boton}>Home</NavLink> 
    {/* Los link se utilizan para navegar, los botones para realizar acciones */}


    {token.logged ? <>

      <NavLink to={"/music"} className={styles.boton}>Musica</NavLink>
    
      <NavLink to={'/game'} className={styles.boton}>Games</NavLink>

      <NavLink to={'/notas'} className={styles.boton}>Notas</NavLink>
      
      <NavLink className={styles.boton} onClick={Logout}>Desloguearse</NavLink>

        </> : null}
    
  </ul>
</div>
  )
}

