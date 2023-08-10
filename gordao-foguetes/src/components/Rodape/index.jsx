import styles from './rodape.module.scss'
import linkedin from './linkedin.svg'
import git from './github.svg'

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__social}>
                <a target='_blank' href="https://www.linkedin.com/in/alan-abilio/"><img src={linkedin} alt="Logo Linkedin" /></a>
                <a target='_blank' href="https://github.com/alan004"><img src={git} alt="Logo Github" /></a>
            </div>
            <a target='_blank' href="https://github.com/alan004">
                <p>Desenvolvido por Alan004</p>
            </a>
        </footer>
    )
}