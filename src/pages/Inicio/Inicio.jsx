import styles from './inicio.module.css'
import Content from '../../layouts/content/Content'
import LoginFooter from '../../layouts/login-footer/LoginFooter'
export default function Inicio(){
    return(
        <div className={styles.inicio}>
            <Content/>
            <LoginFooter/>
        </div>
    )
}