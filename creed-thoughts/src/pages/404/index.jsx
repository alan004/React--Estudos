import Btn from 'components/Btn'
import styles from './Erro404.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function Erro404() {
    const navegar = useNavigate()
    return(
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}> Page not found</h1>
            <p className={styles.paragrafo}>
            Are you sure this was what you were looking for?
            </p>
            <p className={styles.paragrafo}>Please wait a moment and refresh the page, or return to the home page.
            </p>

            <div className={styles.botaoContainer}
                onClick={()=> navegar(-1)}
            >
                <Btn tamanho="lg">Go back</Btn>
            </div>
            <img className={styles.imagemCachorro} src={erro404} alt="Pagina não encontrada" />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
        
    )
}