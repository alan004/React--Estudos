import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import fotoCreed from "assets/creed.jpg"


export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Creed's personal blog
                </h1>
                <p className={styles.paragrafo}>
                    www.creedthoughts.gov.www\creedthoughts.
                </p>
            </div>
            <div className={styles.imagens}>
                <img src={circuloColorido} className={styles.circuloColorido} alt="imagem do banner" />
                <img src={fotoCreed} className={styles.minhaFoto} alt="Foto do autor Creed"/>
            </div>

        </div>
    )
}