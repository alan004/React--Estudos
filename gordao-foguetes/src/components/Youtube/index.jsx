import Paragrafo from "components/Paragrafo"
import React from "react"
import styles from './youtube.module.scss'

export default function Youtube(){
    const titulo = ['SHAPE TODAY💪']
    const paragrafos = ['Em 2023, o Sacani topou o desafio de mudar de vida. Aqui deixo listados todos os vídeos do projeto Shape Today, onde o Sacani vai pra academia puxar peso!']
    const videosUrl = ['https://www.youtube.com/embed/44MLFATUjmE','https://www.youtube.com/embed/vc_Jws4egQU','https://www.youtube.com/embed/3dR7zXLmbMA','https://www.youtube.com/embed/PbJx8CO_yJM']


    return(
        <>
            <Paragrafo titulos={titulo} paragrafos={paragrafos} />
            <div className={styles.galeria}>
                {videosUrl.map((video => {
                    return React.createElement('iframe', {width:"500", height:"360", src:video, frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})
                }))}
            </div>
        </>

    )
}