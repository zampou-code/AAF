import { ReactNode } from "react";
import { ButtonBase } from "@mui/material";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <ButtonBase className={styles.button}>{children}</ButtonBase>;
};

export default Button;
