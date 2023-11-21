import styles from './boton.module.css'

export default function Boton(props){
    return(
        <button className={styles.btn}>{props.texto}</button>
    )
}