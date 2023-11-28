import styles from './burnout.module.css'
import img from '../../assets/chica2.png'
import icon from '../../assets/flecha3.svg'
import { NavLink } from 'react-router-dom'
const Burnout = () => {
  return (
    <>
    <div className={styles.titulo}>
        <NavLink to={"/home"}>
        <img src={icon} className=' w-7' alt="" />
        </NavLink>
        <h2 className=' text-2xl'>¿Que es el burnout?</h2>
        <span></span>
    </div>
    <div className={styles.contentImg}>
        <img className={styles.infoImg} src={img} alt="" />
    </div>

    <div className='max-w-[1100px] mx-auto'>

    <div className='w-5/6  mx-auto mt-1'>
      <p className='text-start'>El Burnout, también conocido como el "síndrome del trabajador quemado", es un estado de completo agotamiento físico, mental y emocional. Cuando te encuentras en un estado de Burnout, puede ser difícil llevar a cabo tareas que normalmente considerarías importantes, y sientes una creciente sensación de desesperación.</p>
    </div>
    <hr className={styles.hr} />
    <p className='text-center text-lg font-bold'>Signos y síntomas del Burnout:</p>
    <ul className={styles.ul}>
      <li>● Dolores de cabeza</li>
      <li>● Problemas estomacales e intestinales.</li>
      <li>● Fatiga extrema.</li>
      <li>● Vulnerabilidad a enfermedades frecuentes.</li>
      <li>● Cambios en los patrones de sueño y apetito.</li>
      <li>● Sensación de desesperación.</li>
      <li>● Dudas en uno mismo y sensación de fracaso.</li>
      <li>● Sentimiento de aislamiento y soledad.</li>
    </ul>
    
    <hr />
    
    <p className='text-center text-lg font-bold'>Estos signos y síntomas no solo afectan tu salud mental, sino que también pueden tener un impacto significativo en tu calidad de vida y tu capacidad para funcionar en el trabajo y en tus relaciones personales. Reconocerlos a tiempo y buscar apoyo es esencial para prevenir que el Burnout empeore.</p>
    
    <hr />

    </div>
    </>
    
  )
}
export default Burnout