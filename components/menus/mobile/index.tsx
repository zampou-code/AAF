import { useState } from "react";
import { Link } from "react-scroll";
import Button from "@/components/button";
import { MdSubject, MdClose } from "react-icons/md";

import styles from "./MenuMobile.module.scss";

const MenuMobile = () => {
  const duration = 100;
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow((old: boolean) => !old);

  return (
    <>
      <Button onClick={handleShow} className={styles.action}>
        {show ? <MdClose size={30} /> : <MdSubject size={30} />}
      </Button>
      {show && (
        <nav className={styles.menuMobile}>
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
          </ul>

          <Button>Soutenir</Button>
        </nav>
      )}
    </>
  );
};

export default MenuMobile;
