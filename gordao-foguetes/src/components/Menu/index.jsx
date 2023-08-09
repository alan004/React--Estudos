import icones from "./icones.json";
import Icone from "./Icone";
import {  AiOutlineMenu } from 'react-icons/ai'


import styles from "./menu.module.scss";

export default function Menu() {
  return (
    <>
      <nav className={styles.menu}>
        <input
          id="ativarMenu"
          name="menu"
          type="checkbox"
          className={styles.menu__ativarCheckbox}
        />
      <label htmlFor="ativarMenu" className={styles.menu__ativarIMG}>
          <AiOutlineMenu color="#c98cf1" size={30}></AiOutlineMenu>
        </label>
        <ul className={styles.menu__lista}>
          {icones.map((icone) => (
            <Icone key={icone.id} icone={icone} style={styles} />
          ))}
        </ul>
      </nav>
    </>
  );
}
