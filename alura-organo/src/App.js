import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Banner from "./componentes/banner";
import Time from "./componentes/Time";
import Rodape from "./componentes/rodape";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [jogadores, setJogadores] = useState([])

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Corinthians',
      cor:'#DB6EBF',
  },
    {
      id: uuidv4(),
      nome:'Sao Paulo',
      cor:'#E06B69',
  },
    {
      id: uuidv4(),
      nome: 'Santos', 
    cor:'#82CFFA',
  },
    {
      id: uuidv4(),
      nome: 'Palmeiras', 
    cor:'#57C278',
  },
    {
      id: uuidv4(),
      nome: 'Vasco',
      cor:'#FF8A29',
  }
  ])

  const novoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  function deletarJogador(nome){
    setJogadores(jogadores.filter(jogador => jogador.nome !== nome))
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      } 
      return time 
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id:uuidv4()}])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        jogadorCadastrado={jogador => novoJogadorAdicionado(jogador)} 
      />
      {times.map(time =>  
        <Time 
          mudarCor={mudarCorDoTime} 
          key={time.nome} 
          time={time}
          jogadores={jogadores.filter(jogador => jogador.time === time.nome)} 
          onDelete={deletarJogador} />
      )}
      <Rodape/>
    </div>
  );
}

export default App;
