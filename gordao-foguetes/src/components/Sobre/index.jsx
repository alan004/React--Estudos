import styles from './sobre.module.scss'
export default function Sobre(){
    return(
        <section className={styles.sobre}>
            <h2>Salve, salve, amigos da astronomia em todo mundo!</h2> <h2>  Meu nome é Alan!🚀🚀🚀</h2>
            <div className={styles.sobre__texto}>
                <p>Te convido a acessar as outras páginas do site, é só clicar no menu 😊 Você encontra aqui uma galeria de fotos, a playlist completa do projeto "Shape Today" e também um espaço dedicado ao site do Serjão.</p>
                <p>Esse projeto é fruto dos meus estudos em React, onde resolvi fazer uma grande homenagem ao Sérgio Sacani, AKA Gordão Foguetes. Admiro o trabalho do Sergio e ele é muito gente boa.</p>
            </div>
        </section>

    )
}