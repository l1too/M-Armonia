import styles from './estres.module.css'
import img from '../../assets/chica.png'
const Estres = () => {
  return (
    <>
        <div className={styles.titulo}>
        
            <h2>¿Que es el estres laboral?</h2>
        </div>
        <div className={styles.contentImg}>
            <img className={styles.infoImg} src={img} alt="" />
        </div>
        <div className='w-5/6 mx-auto mt-1'>
          <p className='text-start'>El estrés laboral es aquel que se produce debido a la excesiva presión que tiene lugar en el entorno de trabajo. Generalmente es consecuencia del desequilibrio entre la exigencia laboral (también propia) y la capacidad o recursos disponibles para cumplirla eficientemente. Aunque en ocasiones, también puede originarse por factores completamente ajenos al trabajador. Los síntomas pueden ir desde un ligero mal humor hasta graves depresiones, y casi siempre suelen ir acompañadas de un cierto agotamiento y debilidad física.</p>
        </div>
        <hr className={styles.hr} />
        <p className='text-center text-lg font-bold'>Las causas más comunes que nos podemos encontrar son:</p>
        <ul className={styles.ul}>
          <li>● Excesiva responsabilidad en el trabajo</li>
          <li>● Demasiada carga de trabajo.</li>
          <li>● Relaciones humanas problemáticas.</li>
          <li>● Condiciones laborales insatisfactorias..</li>
          <li>● Demasiada carga de trabajo.</li>
          <li>● Por supuesto, estos factores no afectan de la misma forma a todas las personas..</li>
        </ul>
        <hr />

        <p className='text-center text-lg font-bold'>¿Cómo prevenir el estrés laboral?</p>

        <ul className={styles.ul}>
          <li>● Dieta equilibrada</li>
          <li>● Ejercicio físico regular.</li>
          <li>● Desconectar completamente del trabajo una vez que salimos de la oficina.</li>
          <li>● Tratar de acostarse siempre a la misma hora y no dormir menos de seis horas.</li>
          <li>● Siempre que se pueda, tomarse un respiro, por medio de unas vacaciones. Pueden ser cortas, puede tratarse de una escapada de la ciudad cualquier fin de semana.</li>
          <li>● Hemos visto más arriba las graves consecuencias que para las empresas puede significar que sus empleados sufran de estrés laboral.</li>
        </ul>
        <hr />
    </>
  )
}
export default Estres