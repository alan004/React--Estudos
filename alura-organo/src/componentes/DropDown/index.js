import "./DropDown.css";
const DropDown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select onChange={e => props.naAlteracao(e.target.value)} required={props.required} value={props.valor}>
        <option>Selecione o time:</option>
        {props.itens.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
