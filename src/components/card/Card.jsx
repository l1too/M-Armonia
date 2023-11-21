import img from '../../assets/chica.png'
import styles from './card.module.css'
export const Card = () => {
  return (
   <div className="card bg-base-100 shadow-lg border-solid border-2 shadow-fuchsia-400 my-2 w-[320px] mx-auto">

  <div className="card-body w-auto flex flex-row p-4">
      <figure className=" w-2/3"><img className={styles.cardImg} src={img} alt="Movie"/></figure>

    <div className=' '>
      <h2 className="card-title">New movie is released!</h2>
      <p>Click the button to watch on Jetflix app.</p>
    </div>

  </div>

  <div className="card-actions justify-center">
      <button className={styles.cardBoton}>Watch</button>
  </div>
</div>
  )
}
