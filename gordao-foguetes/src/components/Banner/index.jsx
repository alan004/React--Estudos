export default function Banner(props) {
  return (
    <div className={props.css}>
      <h1>A galeria mais completa do Sergio Sacani</h1>
      <img src={props.imagem} alt="Imagem do Sergio Sacani" />
    </div>
  );
}
