import  { AiFillHeart, AiOutlineHeart, AiOutlineExpandAlt } from 'react-icons/ai'
import { useState } from 'react';

export default function Card({ item, style, onFav }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  function toggleFullscreen() {
    setIsFullscreen(!isFullscreen);
  }


  function favoritar(){
    onFav(item.id)
  }
  return (
    <li className={`${style.galeria__card} ${isFullscreen ? style.fullscreen : ''}`}>
          <img
            className={style.galeria__imagem}
            src={item.imagem}
            alt={item.titulo}
          />
          <p className={style.galeria__descricao}>{item.titulo}</p>
          <div>
            <p>{item.creditos}</p>
            <span>
                <AiOutlineExpandAlt color="white" size="35" onClick={toggleFullscreen}/>
                <div className="favoritar">
                  {item.favorito ? <AiFillHeart size="23" onClick={favoritar} color='#DC143C'/> : <AiOutlineHeart onClick={favoritar} color="white" size="23" />}
                </div>
            </span>
          </div>
    </li>
  );
}