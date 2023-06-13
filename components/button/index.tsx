import { MouseEventHandler, ReactNode } from "react";
import classNames from "classnames";
import { ButtonBase } from "@mui/material";

import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  className?: string | number | any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, onClick, ...props }: ButtonProps) => {
  return (
    <ButtonBase
      className={classNames(styles.button, {
        [className]: Boolean(className),
      })}
      {...props}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
