import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Card.css'

const Card = ({nome, posicao, imagem, corPrimaria, favorito, onDelete, onFavorite}) =>{

    function favoritar(){
    onFavorite(nome)
}

    return (
        <div className='card'>
            <AiFillCloseCircle 
                size={32} 
                className="deletar" 
                onClick={() => onDelete(nome)}
            />
            <div className='cabecalho' style={{backgroundColor:corPrimaria}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{posicao}</h5>
                <div className='favoritar'>
                {favorito ? <AiFillHeart onClick={favoritar} color='#DC143C'/> : <AiOutlineHeart onClick={favoritar} />}
                </div>
            </div>
        </div>
    )
}

export default Card