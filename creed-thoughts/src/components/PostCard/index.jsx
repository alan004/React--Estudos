import { Link } from "react-router-dom"
import styles from "./PostCard.module.css"
import Btn from "components/Btn"
export default function PostCard({post}){
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
            <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt="Imagem de capa do post" />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <Btn>Ler</Btn>
            </div>
        </Link>

    )
}