import { NavLink } from 'react-router-dom'
import styles from './boton.module.css'

export default function Boton(){
    return(
        <NavLink className={styles.btn} to='/signup'> Ingresar</NavLink>
    )
}