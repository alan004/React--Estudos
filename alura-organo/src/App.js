import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Banner from "./componentes/banner";
import Time from "./componentes/Time";
import Rodape from "./componentes/rodape";
import { v4 as uuidv4 } from 'uuid';


function App() {
  
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Corinthians',
      cor:'#993399',
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

  const inicial = [
  {
    id: uuidv4(),
    nome: 'Fagner',
    posicao: 'Lateral',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIafxb4qMwTSI2KnYkc5MqFvegIc6SvESwbw&usqp=CAU',
    time: 'Corinthians'
  },
  {
    id: uuidv4(),
    nome: 'Renato Augusto',
    posicao: 'Meia',
    imagem: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/01/25/869438187-63d0862dcd627.jpeg',
    time: 'Corinthians'
  },
  {
    id: uuidv4(),
    nome: 'Roger Guedes',
    posicao: 'Atacante',
    imagem: 'https://www.ofutebolero.com.br/__export/1688683963784/sites/elfutboleromx/img/2023/07/06/roger_guedes_1.jpg_215239124.jpg',
    time: 'Corinthians'
  },
  {
    id: uuidv4(),
    nome: 'Rony Rústico',
    posicao: 'Atacante',
    imagem: 'https://ds-images.bolavip.com/news/image/800/800/?src=https://images.bolavip.com/webp/br/full/BBR_20230702_BBR_44775_AGIF22102600345890-scaled-e1686086826251.webp',
    time: 'Palmeiras'
  },
  {
    id: uuidv4(),
    nome: 'Endrick',
    posicao: 'Atacante',
    imagem: 'https://conteudo.imguol.com.br/c/esporte/5f/2023/07/02/endrick-celebra-gol-do-palmeiras-sobre-o-athletico-em-confronto-do-campeonato-brasileiro-1688329515330_v2_450x450.jpg.webp',
    time: 'Palmeiras'
  }]

  const [jogadores, setJogadores] = useState(inicial)

  const novoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
    console.log(jogador)
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

  function gerenciaFavorito(nome) {
    debugger
    setJogadores(jogadores.map(jogador => {
      if(jogador.nome === nome)  jogador.favorito = !jogador.favorito
      return jogador
    }))
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
          onFavorite={gerenciaFavorito} 
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
