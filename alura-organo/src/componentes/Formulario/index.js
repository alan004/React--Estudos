import "./Formulario.css";
import InputTexto from "../inputTexto";
import DropDown from "../DropDown";
import Btn from "../btn";
import { useState } from "react";

const Formulario = (props) => {
  
  const [nome, setNome] = useState('')
  const [posicao, setPosicao] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')


  const onSave = (e) => {
    e.preventDefault();
    props.jogadorCadastrado ({
      nome, posicao, imagem, time,
    })
    setImagem('')
    setTime('')
    setPosicao('')
    setNome('')
  };

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do seu álbum.</h2>
        <InputTexto required={true} label="Nome" placeholder="Digite seu nome" valor={nome} naAlteracao={valor => setNome(valor)} />
        <InputTexto required={true} label="Posição" placeholder="Digite seu posição" valor={posicao} naAlteracao={valor => setPosicao(valor)} />
        <InputTexto required={true} label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} naAlteracao={valor => setImagem(valor)} />
        <DropDown required={true} itens={props.times} label="Time" valor={time} naAlteracao={valor => setTime(valor)} />
        <Btn>Criar Figurinha</Btn>
      </form>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.cadastrarTime({ nome: nomeTime , cor: corTime})
        setNomeTime('')
        setCorTime('')
      }
      }>
        <h2>Preencha os dados para criar um novo time.</h2>
        <InputTexto required={true} label="Nome Time" placeholder="Digite o nome do time" valor={nomeTime} naAlteracao={valor => setNomeTime(valor)} />
        <InputTexto required={true} label="Cor time" placeholder="Digite a cor do time" valor={corTime} naAlteracao={valor => setCorTime(valor)} />
        <Btn>Criar novo time</Btn>
      </form>
    </section>
  );
};

export default Formulario;
