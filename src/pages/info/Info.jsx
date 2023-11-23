import styles from './info.module.css'
import img from '../../assets/chica.png'
export const Info = () => {
  return (
    <>
        <div className={styles.titulo}>
            <a href=""></a>
            <h2>¿Que es el burnout?</h2>
        </div>
        <div className={styles.contentImg}>
            <img className={styles.infoImg} src={img} alt="" />
        </div>
        <div className='w-5/6 mx-auto mt-1'>
          <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ex ducimus non itaque sequi et dolore totam, necessitatibus veniam, beatae minus, hic placeat earum accusamus debitis porro nulla nesciunt esse?</p>
        </div>
        <hr className={styles.hr} />
        <p className='text-center text-lg font-bold'>¿Cuáles son las causas del estrés laboral?</p>
        <ul className={styles.ul}>
          <li>a</li>
          <li>a</li>
        </ul>
    </>
  )
}
