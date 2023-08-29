import styles from "./Btn.module.css"
export default function Btn({ children, tamanho }) {
  return <button 
  className={`
  ${styles.btn}
  ${styles[tamanho]}
  `}>
    {children}</button>;
}
