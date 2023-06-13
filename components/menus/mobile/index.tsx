import Link from "next/link";
import { useState } from "react";
import Button from "@/components/button";
import { MdSubject, MdClose } from "react-icons/md";

import styles from "./MenuMobile.module.scss";

const MenuMobile = () => {
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
              <Link href="#" passHref>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#about" passHref>
                A propos
              </Link>
            </li>
            <li>
              <Link href="#media" passHref>
                Mediathèque
              </Link>
            </li>
            <li>
              <Link href="#actu" passHref>
                Actualité
              </Link>
            </li>
            <li>
              <Link href="#faq" passHref>
                Faq
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
