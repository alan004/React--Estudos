import "./Input.css";

const Input = ({label, valor, required, type = 'text', placeholder, naAlteracao}) => {

  const valorDigitado = (e) => {
    naAlteracao(e.target.value)
  }  

  return (
    <div className={`input input-${type}`}>
      <label>{label}</label>
      <input type={type} value={valor} onChange={valorDigitado} required={required} placeholder={placeholder} />
    </div>
  );
};

export default Input;
