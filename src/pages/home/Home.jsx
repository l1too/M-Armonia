
import { Banner } from '../../components/banner/Banner'
import { Card } from '../../components/card/Card'
import { CarrouselBoton } from '../../components/carrouselBoton/CarrouselBoton'
import styles from './home.module.css'
export const Home = () => {
  return (
    <div className=' mx-auto w-[95%] my-2'>
        <Banner/>
        <CarrouselBoton/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}
