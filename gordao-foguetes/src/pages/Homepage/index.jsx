
import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Galeria from "components/Galeria";
import Menu from "components/Menu";
import Populares from "components/Populares";
import Rodape from "components/Rodape";
import bannerSergio from './banner.png'
import styles from './homepage.module.scss'

export default function Homepage(){
    return(
        <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
                <Menu/>
                <Banner css={styles.principal__imagem} imagem={bannerSergio}/>
            </section>
            <div className={styles.conteudo}>
                <Galeria/>
            </div>
        </main>
        <Rodape/>
        </>
    )
}