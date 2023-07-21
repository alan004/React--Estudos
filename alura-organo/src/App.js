import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Banner from "./componentes/banner";

function App() {
  const [jogadores, setJogadores] = useState([])

  const novoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogadores({...jogadores, jogador})
  }

  
  return (
    <div className="App">
      <Banner />
      <Formulario jogadorCadastrado={jogador => novoJogadorAdicionado(jogador)} />
    </div>
  );
}

export default App;
