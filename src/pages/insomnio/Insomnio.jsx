import styles from './insomnio.module.css'
import img from '../../assets/chico.png'
const Insomnio = () => {
  return (
    <>
        <div className={styles.titulo}>
        
            <h2>¿Que es el insomnio?</h2>
        </div>
        <div className={styles.contentImg}>
            <img className={styles.infoImg} src={img} alt="" />
        </div>
        <div className='w-5/6 mx-auto mt-1'>
          <p className='text-start'>El insomnio (también llamado trastorno de insomnio) es un problema común del sueño que puede afectar su calidad de vida. Las personas con insomnio tienen dificultad para conciliar el sueño o dormir sin interrupciones. Pueden despertarse durante la noche o muy temprano en la mañana siguiente.
Sus problemas para dormir pueden aparecer y desaparecer, o podrían ser continuos.</p>
        </div>
        <hr className={styles.hr} />
        <p className='text-center text-lg font-bold'>Los trastornos del sueño relacionados con el trabajo, pueden tener impactos significativos en la salud. Aquí hay algunas maneras en que estos trastornos pueden afectar la salud:</p>
        <ul className={styles.ul}>
          <li>● Fatiga y Bajo Rendimiento Cognitivo.</li>
          <li>● Problemas de Salud Menta.</li>
          <li>● Impacto en el Sistema Inmunológico.</li>
          <li>● Problemas Gastrointestinales y Metabólicos.</li>
        </ul>
        <hr />

        <p className='text-center text-lg font-bold'>¿Cómo se puede prevenir el insomnio?</p>

        <ul className={styles.ul}>
          <li>● Establecer un horario regular de sueño y despertar</li>
          <li>● Realizar ejercicio durante el día, evitando hacerlo por la noche.</li>
          <li>● Después del anochecer, mantener un ambiente oscuro en el dormitorio.</li>
          <li>● Evitar la cafeína, estimulantes, tabaco y alcohol, especialmente antes de acostarse.</li>
          <li>● Leer algo ligero y entretenido antes de acostarse para liberar la mente de preocupaciones.</li>
          <li>● Practicar técnicas de relajación.</li>
        </ul>
        <hr />
    </>
  )
}
export default Insomnio