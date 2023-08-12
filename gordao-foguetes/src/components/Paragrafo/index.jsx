import styles from './paragrafo.module.scss'
export default function Paragrafo({titulos, paragrafos}){
    return(
        <section className={styles.sobre}>
            {titulos.map((titulo => {
                return <h2>{titulo}</h2>
            }))}
            <div className={styles.sobre__texto}>
                {paragrafos.map((paragrafo => {
                    return <p>{paragrafo}</p>
                }))}
            </div>
        </section>

    )
}