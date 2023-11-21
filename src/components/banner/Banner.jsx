import styles from './banner.module.css'
import img from '../../assets/women.png'
import logo from '../../assets/logo.png'

export const Banner = () => {
  return (
    <div className={styles.banner}>
      
      <img className={styles.logo} src={logo} alt="" />
        <div className={styles.title}>
            <h2>!Hello¡</h2>
            <h2>Gabriel Quiroga</h2>
        </div>
        <img className={styles.img} src={img} alt="" />
      
    </div>
  )
}
