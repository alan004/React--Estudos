import "./InputTexto.css";

const InputTexto = (props) => {

  const valorDigitado = (e) => {
    props.naAlteracao(e.target.value)
  }  

  return (
    <div className="input-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={valorDigitado} required={props.required} placeholder={props.placeholder} />
    </div>
  );
};

export default InputTexto;
