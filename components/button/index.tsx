import { MouseEventHandler, ReactNode } from "react";
import classNames from "classnames";
import { Button as MuiButton, ButtonBase } from "@mui/material";

import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  className?: string | number | any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, onClick, ...props }: ButtonProps) => {
  return (
    <MuiButton
      sx={{ fontFamily: "ElaineKinandhita" }}
      className={classNames(styles.button, {
        [className]: Boolean(className),
      })}
      {...props}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
