import Link from "next/link";
import Button from "@/components/button";
import styles from "./MenuMain.module.scss";

const MenuMain = () => {
  return (
    <nav className={styles.menuMain}>
      <ul>
        <li>
          <Link href="#" passHref>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            A propos
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            Mediathèque
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            Actualité
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            Faq
          </Link>
        </li>
        <li>
          <Button>Soutenir</Button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMain;
