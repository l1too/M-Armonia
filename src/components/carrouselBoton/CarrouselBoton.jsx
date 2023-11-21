import styles from './carrouselBoton.module.css'
export const CarrouselBoton = () => {
  return (
    <div className="text-sm breadcrumbs align-middle">
  <ul className=' gap-2 justify-center'>
    <button className={styles.boton}>Home</button> 
    <button className={styles.boton}>Documents</button> 
    <button className={styles.boton}>Add Document</button>
  </ul>
</div>
  )
}
