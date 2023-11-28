import Boton from "../../components/Boton/Boton"
import img from '../../assets/img1.png';

export const DesktopWelcome = () => {
    console.log('Image path:', img);

  return (
    <div className="hero min-h-screen bg-[#f64dc3eb]">
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">¡Bienvenidos a Mente en Armonía!</h1>
      <p className="mb-2">En un mundo en constante evolución, donde el trabajo desafía cada vez más nuestros límites, mantener un equilibrio entre el rendimiento laboral y el bienestar personal se ha vuelto esencial</p>
      <img className="mb-1" src={img} alt="" />
      <Boton/>
    </div>
  </div>
</div>
  )
}
