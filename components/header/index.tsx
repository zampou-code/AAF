import Button from "@/components/button";
import { useMediaQuery } from "@mui/material";
import MenuMain from "@/components/menus/main";
import LogoHeader from "@/components/logo/header";
import MenuMobile from "@/components/menus/mobile";

import styles from "./Header.module.scss";

const Header = () => {
  const match = useMediaQuery("(min-width:916px)");

  return (
    <header className={styles.header}>
      <LogoHeader />
      {match ? (
        <>
          <MenuMain />
          <Button>Soutenir</Button>
        </>
      ) : (
        <MenuMobile />
      )}
    </header>
  );
};

export default Header;
