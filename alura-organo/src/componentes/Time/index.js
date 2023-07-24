import Card from '../Card'
import './Time.css'


const Time = (props) =>{
    return (
        props.jogadores.length > 0 && <section className="time" style={{backgroundColor: props.corSecundaria} }>
            <h3 style={{ borderColor:props.corPrimaria }} >{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador => <Card corPrimaria={props.corPrimaria} key={jogador.nome} nome={jogador.nome} imagem={jogador.imagem} posicao={jogador.posicao} />)}
            </div>
        </section>
    )
}

export default Time