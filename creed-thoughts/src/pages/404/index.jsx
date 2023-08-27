import styles from './Erro404.module.css'
import erro404 from 'assets/erro_404.png'

export default function Erro404() {
    return(
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}> post nao entcontrado</h1>
            <p className={styles.paragrafo}>
            Tem certeza de que era isso que você estava procurando? 
            </p>
            <p className={styles.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>

            <div className={styles.botaoContainer}>
                <button>Voltar</button>
            </div>
            <img className={styles.imagemCachorro} src={erro404} alt="Pagina não encontrada" />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
        
    )
}