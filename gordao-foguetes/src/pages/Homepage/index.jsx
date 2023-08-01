
import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
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
        </main>
        </>
    )
}