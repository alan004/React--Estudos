import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Banner from "./componentes/banner";
import Time from "./componentes/Time";
import Rodape from "./componentes/rodape";

function App() {
  const [jogadores, setJogadores] = useState([])
  const times = [
    {nome: 'Corinthians',
    corPrimaria:'#DB6EBF',
    corSecundaria: '#FAE9F5'
  },
    {nome:'Sao Paulo',
    corPrimaria:'#E06B69',
    corSecundaria: '#FDE7E8'
  },
    {nome: 'Santos', 
    corPrimaria:'#82CFFA',
    corSecundaria: '#E8F8FF'
  },
    {nome: 'Palmeiras', 
    corPrimaria:'#57C278',
    corSecundaria: '#D9F7E9'
  },
    {nome: 'Vasco',
    corPrimaria:'#FF8A29',
    corSecundaria: '#FFEEDF'
  }
  ]

  const novoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} jogadorCadastrado={jogador => novoJogadorAdicionado(jogador)} />
      {times.map(time =>  <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} jogadores={jogadores.filter(jogador => jogador.time === time.nome)} />)}
      <Rodape/>
    </div>
  );
}

export default App;
