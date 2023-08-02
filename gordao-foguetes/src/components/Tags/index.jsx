import styles from './tags.module.scss'

export default function Tags(){
    return(
        <div className={styles.tags}>
            <p>Filtre por tag:</p>
            <ul className={styles.tags__lista}>
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
            </ul>
        </div>
    )
}