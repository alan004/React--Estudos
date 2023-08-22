import { NavLink } from "react-router-dom";
import style from "./Menu.module.css"
import itens from "./itens.json"

export default function Menu(){
    return (
        <header>
            <nav className={style.navegacao}>
                {itens.map((item => (
                <NavLink key={item.nome} className={({ isActive, isPending }) => isPending ? style.link : isActive ?   `${style.link} ${style.linkAtivo}` : style.link} to={item.path}>{item.nome}
                    </NavLink>
                )))}
            </nav>
        </header>
    )
}