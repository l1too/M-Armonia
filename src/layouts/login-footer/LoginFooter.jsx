import Boton from "../../components/Boton/Boton"
import styles from './loginFooter.module.css'
import img from '../../assets/img1.png'
export default function LoginFooter(){
    return(
        <>
        <img className={styles.loginImg} src={img} alt="" />
        <div className={styles.loginFooter}>
            <Boton />
        </div>
        </>

    )
}