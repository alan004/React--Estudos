import "./Formulario.css";
import InputTexto from "../inputTexto";
import DropDown from "../DropDown";
import Btn from "../btn";

const Formulario = () => {
  const times = ["Corinthians", "Sao Paulo", "Santos", "Palmeiras", "Vasco"];
  const salvou = (e) => {
    e.preventDefault();
    console.log("O form foi salvo");
  };
  return (
    <section className="formulario">
      <form onSubmit={salvou}>
        <h2>Preencha os dados para criar o card do seu álbum.</h2>
        <InputTexto required={true} label="Nome" placeholder="Digite seu nome" />
        <InputTexto required={true} label="Posição" placeholder="Digite seu posição" />
        <InputTexto required={true} label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropDown required={true} itens={times} label="Time" />
        <Btn>Criar Figurinha</Btn>
      </form>
    </section>
  );
};

export default Formulario;
