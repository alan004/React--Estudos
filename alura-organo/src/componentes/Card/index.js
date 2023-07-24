import './Card.css'

const Card = ({nome, posicao, imagem, corPrimaria}) =>{
    return (
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor:corPrimaria}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{posicao}</h5>
            </div>
        </div>
    )
}

export default Card