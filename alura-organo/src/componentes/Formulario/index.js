import "./Formulario.css";
import InputTexto from "../inputTexto";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do seu álbum.</h2>
        <InputTexto label="Nome" placeholder="Digite seu nome" />
        <InputTexto label="Posição" placeholder="Digite seu posição" />
        <InputTexto label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default Formulario;
