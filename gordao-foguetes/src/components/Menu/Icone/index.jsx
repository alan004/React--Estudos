import { Link } from 'react-router-dom'


export default function Icone({ icone, style, to }) {
    return (
        <li className={style.menu__item}>
          <img src={icone.path} alt={icone.alt} />
          <Link to={to}>{icone.link}</Link>
        </li>
    )
  }