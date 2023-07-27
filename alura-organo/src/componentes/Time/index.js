import Card from '../Card'
import hexToRgba from 'hex-to-rgba';
import './Time.css'


const Time = ({time, jogadores, onDelete, mudarCor}) =>{
    return (

        jogadores.length > 0 && <section className="time" style={{backgroundColor: hexToRgba(time.cor, 0.6)} }>
            <input onChange={e => mudarCor(e.target.value, time.id)} value={time.cor} type='color' className='input__cor'/>
            <h3 style={{ borderColor:time.cor }} >{time.nome}</h3>
            <div className='jogadores'>
                {jogadores.map(jogador => {  
                    return <Card corPrimaria={time.cor} key={jogador.nome} nome={jogador.nome} imagem={jogador.imagem} posicao={jogador.posicao} onDelete={onDelete} />
                    })}
            </div>
        </section>
    )
}

export default Time