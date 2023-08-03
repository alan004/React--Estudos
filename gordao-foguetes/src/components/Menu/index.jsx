import icones from './icones.json'
import Icone from './Icone';


import styles from './menu.module.scss'

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
            {icones.map(icone => (<Icone key={icone.id} icone={icone} style={styles} />))}
            </ul>
        </nav>
    )
}