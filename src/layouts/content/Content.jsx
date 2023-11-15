import styles from './content.module.css'

import Container from '../../components/Container/Container'
export default function Content(){
    return(
        <Container>
             <h1 className={styles.contentTitle}>¡Bienvenidos a Mente en Armonia!</h1>
            <p className={styles.contentParagraph}>En un mundo en constante evolución, donde el trabajo desafía cada vez más nuestros límites, mantener un equilibrio entre el rendimiento laboral y el bienestar personal se ha vuelto esencial</p>
        </Container>
    )
}