import Paragrafo from "components/Paragrafo"
import React from "react"
import styles from './youtube.module.scss'
import videosUrl from "./videos.json"

export default function Youtube(){
    const titulo = ['SHAPE TODAY💪']
    const paragrafos = ['Em 2023, o Sacani topou o desafio de mudar de vida. Aqui deixo listados todos os vídeos do projeto Shape Today, onde o Sacani vai pra academia puxar peso!']


    return(
        <>
            <Paragrafo titulos={titulo} paragrafos={paragrafos} />
            <div className={styles.galeria}>
                {videosUrl.map((video => {
                    return React.createElement('iframe', {src:video.url, frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})
                }))}
            </div>
        </>

    )
}