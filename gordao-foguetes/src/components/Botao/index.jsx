import style from './botao.module.scss'

export default function Botao({children}) {
  return (
    <button className={style.botao}>{children}</button>
  )
}