// import Link from "next/link";
import { Link } from "react-scroll";
import styles from "./MenuMain.module.scss";

const MenuMain = () => {
  const duration = 100;

  return (
    <nav className={styles.menuMain}>
      <ul>
        <li>
          <Link to="section1" smooth={true} duration={duration}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={duration}>
            A propos
          </Link>
        </li>
        <li>
          <Link to="media" smooth={true} duration={duration}>
            Mediathèque
          </Link>
        </li>
        <li>
          <Link to="actu" smooth={true} duration={duration}>
            Actualité
          </Link>
        </li>
        <li>
          <Link to="actu" smooth={true} duration={duration}>
            Faq
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMain;
