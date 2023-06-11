import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./Section.module.scss";

interface SectionProps {
  className?: string | any;
  children: ReactNode;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section
      className={classNames(styles.section, {
        [className]: Boolean(className),
      })}
    >
      {children}
    </section>
  );
};

export default Section;
