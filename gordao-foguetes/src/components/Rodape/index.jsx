import styles from './rodape.module.scss'
import face from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__social}>
                <a href="#"><img src={face} alt="Logo Facebook" /></a>
                <a href="#"><img src={twitter} alt="Logo Twitter" /></a>
                <a href="#"><img src={instagram} alt="Logo instagram" /></a>
            </div>
            <a href="https://github.com/alan004">
                <p>Desenvolvido por Alan004</p>
            </a>
        </footer>
    )
}