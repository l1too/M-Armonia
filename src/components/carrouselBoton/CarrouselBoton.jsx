import styles from './carrouselBoton.module.css'
export const CarrouselBoton = () => {
  return (
    <div className="text-sm breadcrumbs align-middle">
  <ul className=' gap-2 justify-center'>
    <button className={styles.boton}>Home</button> 
    <button className={styles.boton}>Documents</button> 
    {/* Los link se utilizan para navegar, los botones para realizar acciones */}
    <a href="/music" className={styles.boton}>Musica</a>
  </ul>
</div>
  )
}
