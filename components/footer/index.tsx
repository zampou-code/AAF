import LogoHeader from "@/components/logo/header";
import { BsFacebook, BsYoutube, BsInstagram, BsTiktok } from "react-icons/bs";

import styles from "./Footer.module.scss";
import Button from "../button";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <Button>
          <BsFacebook size={30} />
        </Button>
        <Button>
          <BsYoutube size={30} />
        </Button>
      </div>
      <LogoHeader />
      <div className={styles.socials}>
        <Button>
          <BsInstagram size={30} />
        </Button>
        <Button>
          <BsTiktok size={30} />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
