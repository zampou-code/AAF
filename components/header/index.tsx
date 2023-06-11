import MenuMain from "../menus/main";
import LogoHeader from "../logo/header";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <LogoHeader />
      <MenuMain />
    </header>
  );
};

export default Header;
