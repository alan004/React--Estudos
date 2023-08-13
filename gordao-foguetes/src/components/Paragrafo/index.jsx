import styles from './paragrafo.module.scss'
export default function Paragrafo({titulos, paragrafos}){
    return(
        <section className={styles.sobre}>
            {titulos.map((titulo => {
                return <h2 key={titulo}>{titulo}</h2>
            }))}
            <div className={styles.sobre__texto}>
                {paragrafos.map((paragrafo => {
                    return <p key={paragrafo}>{paragrafo}</p>
                }))}
            </div>
        </section>

    )
}