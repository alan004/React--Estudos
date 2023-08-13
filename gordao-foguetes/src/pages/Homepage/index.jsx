import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Galeria from "components/Galeria";
import Sobre from 'components/Sobre';
import Menu from "components/Menu";
import Rodape from "components/Rodape";
import bannerSergio from './banner.png'
import styles from './homepage.module.scss'
import Youtube from 'components/Youtube';
import SpaceToday from 'components/SpaceToday';

export default function Homepage(){
    return(
        <>
        <Cabecalho/>
        <Router>
        <main>
            <section className={styles.principal}>
                <Menu/>
                <Banner css={styles.principal__imagem} imagem={bannerSergio}/>
            </section>
            <div className={styles.conteudo}>
                <Routes>
                    <Route path="/" element={<Sobre/>}/>
                    <Route path="/galeria" element={<Galeria/>}/>
                    <Route path="/fortao" element={<Youtube/>}/>
                    <Route path="/spacetoday" element={<SpaceToday/>}/>
                </Routes>
            </div>
        </main> 
        </Router>
        <Rodape/>
        </>

    )
}