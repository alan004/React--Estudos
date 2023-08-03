import fotosPopulares from './populares.json'
import styles from './populares.module.scss'

export default function Populares(){
    return(
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotosPopulares.map((fotoPopular) => {
                    return (
                        <li key={fotoPopular.id}>
                            <img src={fotoPopular.path} alt={fotoPopular.alt} />
                        </li>
                    )
                })}

            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}