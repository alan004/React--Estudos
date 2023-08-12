import Paragrafo from "components/Paragrafo";

export default function Sobre(){
    const titulos = ['Salve, salve, amigos da astronomia em todo mundo','Meu nome é Alan!🚀🚀🚀']
    const paragrafos = ['Te convido a acessar as outras páginas do site, é só clicar no menu 😊 Você encontra aqui uma galeria de fotos, a playlist completa do projeto "Shape Today" e também um espaço dedicado ao site do Serjão.','Esse projeto é fruto dos meus estudos em React, onde resolvi fazer uma grande homenagem ao Sérgio Sacani, AKA Gordão Foguetes. Admiro o trabalho do Sergio e ele é muito gente boa.']
    return(
        <Paragrafo titulos={titulos} paragrafos={paragrafos} />
    )
}