import styles from './boton.module.css'
import { NavLink } from 'react-router-dom'

export default function Boton(){
    return(
        // <button className={styles.btn}>{props.texto}</button>
        <NavLink className={styles.btn} to='/signup'>Ingresar</NavLink>
    )
}