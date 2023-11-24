import styles from './card.module.css'
import { NavLink } from 'react-router-dom'

export const Card = ({title, description, path, img}) => {
  return (
   <div className="card bg-base-100 shadow-lg border-solid border-2 shadow-fuchsia-400 my-2 w-[320px] mx-auto">

  <div className="card-body w-auto flex flex-row p-4">
      <figure className=" w-2/3"><img className={styles.cardImg} src={img}/></figure>

    <div className={styles.cardP}>
      <h2 className="card-title">{title}</h2>
      <p >{description}</p>
    </div>

  </div>

  <div className="card-actions justify-center">
    <NavLink to={path}>
    <button className={styles.cardBoton}>Mas Info</button>
    </NavLink>
     
   
  </div>
</div>
  )
}
