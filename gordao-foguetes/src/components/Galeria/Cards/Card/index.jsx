import open from "./open.png";
import like from "./favorito.png";
import  { AiOutlineHeart, AiOutlineExpandAlt } from 'react-icons/ai'

export default function Card({ item, style }) {
  return (
    <li className={style.galeria__card}>
      <img
        className={style.galeria__imagem}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={style.galeria__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
            <AiOutlineExpandAlt color="white" size="25" />
            <AiOutlineHeart color="white" size="25"/>
        </span>
      </div>
    </li>
  );
}