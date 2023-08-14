import Tags from "../Tags";
import styles from './galeria.module.scss'
import fotos from './fotos.json'
import Cards from "./Cards";
import { useState } from "react";


export default function Galeria(){
    const [itens, setItens] = useState(fotos)
    const tags = [...new Set(fotos.map((valor) => valor.tag))]

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto)=>{
            return foto.tag === tag
        })
        setItens(novasFotos)
    }

    function gerenciarFavorito(id){
        setItens(itens.map(item => {
            if(item.id === id) item.favorito = !item.favorito
            return item
        }))

    }

    return(
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
            <Cards itens={itens} style={styles} onFav={gerenciarFavorito}/>
        </section>
    )
}