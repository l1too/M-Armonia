import styles from './banner.module.css'
import img from '../../assets/women.png'
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'

export const Banner = () => {
  let token = useSelector((store) => store.loginInReducer.token);
 
  return (
    <>
    <div className={styles.banner}>
      <img className={styles.logo} src={logo} alt="" />
        <div className={styles.title}>
            <h2>¡ Bienvenido/a !</h2>
            <h2>{token.name}</h2>
        </div>
        <img className={styles.img} src={img} alt="" />
    </div>
    </>
  )
}
