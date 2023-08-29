import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import Erro404 from "pages/404";
import BaseHeading from "components/BaseHeading";
import styles from "./Post.module.css"
import PostCard from "components/PostCard";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  if (!post) {
    return <Erro404 />;
  }
const postRecomendado = posts
    .filter((post) => post.id !== Number(parametros.id) )
    .sort((a,b)=> b.id - a.id)
    .slice(0 , 4)


  return (
    <Routes>
      <Route path="*" element={<BaseHeading />}>
        <Route
          index
          element={
              <PostModel
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
              >
                <div className="post-markdown-container">
                  <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>
                <h2 className={styles.tituloOutrosPosts}>You might also like</h2>
                <ul className={styles.postsRecomendados}>
                    {postRecomendado.map((post) =>(
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
              </PostModel>
          }
        />
      </Route>
    </Routes>
  );
}
