
import { Banner } from '../../components/banner/Banner'
import { Card } from '../../components/card/Card'
import { CarrouselBoton } from '../../components/carrouselBoton/CarrouselBoton'
import imgBurnout from '../../assets/chica2.png'
import imgEstres from '../../assets/chica.png'
import imgInsomnio from '../../assets/chico.png'


export const Home = () => {
  const infoBurnout = "Es un estado decompleto cansancio físico..."
  const infoEstres = "Una de las aflicciones más comunes..."
  const infoInsomnio = "El insomnio (también llamado trastorno de insomnio)..."
  return (
    <div className=' mx-auto w-[95%] my-2'>
        <Banner/>
        <CarrouselBoton/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto'>
            <Card title={"Burnout"} path={"/burnout"} description={infoBurnout} img={imgBurnout}/>
            <Card title={"Estres laboral"} path={"/estres"} description={infoEstres} img={imgEstres}/>
            <Card title={"Insomnio"} path={"/insomnio"} description={infoInsomnio} img={imgInsomnio}/>
        </div>
    </div>
  )
}
