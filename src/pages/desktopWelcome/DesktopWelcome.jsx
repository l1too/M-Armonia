import Login from "../ingreso/Login"
export const DesktopWelcome = () => {

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-xl  sm:text-xl md:text-2xl font-bold">¡Bienvenidos a Mente en Armonía!</h1>
      <p className="py-6 text-lg sm:text-xl md:text-2xl">En un mundo en constante evolución, donde el trabajo desafía cada vez más nuestros límites, mantener un equilibrio entre el rendimiento laboral y el bienestar personal se ha vuelto esencial.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <Login/>
    </div>
  </div>
</div>
  )
}
