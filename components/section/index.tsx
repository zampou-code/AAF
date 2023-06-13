import { ReactNode } from "react";
import classNames from "classnames";
import { Element } from "react-scroll";

import styles from "./Section.module.scss";

interface SectionProps {
  id?: any;
  className?: string | any;
  children: ReactNode;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <Element name={id}>
      <section
        id={id}
        className={classNames(styles.section, {
          [className]: Boolean(className),
        })}
      >
        {children}
      </section>
    </Element>
  );
};

export default Section;
