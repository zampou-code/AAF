import { MouseEventHandler, ReactNode } from "react";
import classNames from "classnames";
import { Button as MuiButton, ButtonBase } from "@mui/material";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  className?: string | number | any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, onClick, ...props }: ButtonProps) => {
  return (
    <MuiButton
      className={classNames({
        [className]: Boolean(className),
      })}
      {...props}
      onClick={onClick}
      sx={{
        fontFamily: "ElaineKinandhita",
        fontSize: "19px",
        textTransform: "capitalize",
        padding: "10px 20px",
        color: "var(--primary)",
        background: "var(--secondary)",
        borderRadius: "0",
        "&:hover": {
          background: "var(--secondary)",
        },
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
