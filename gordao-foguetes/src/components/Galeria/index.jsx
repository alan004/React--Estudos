import Tags from "../Tags";
import styles from './galeria.module.scss'
import fotos from './fotos.json'
import Cards from "./Cards";


export default function Galeria(){
    return(
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags/>
            <Cards itens={fotos} style={styles} />
        </section>
    )
}