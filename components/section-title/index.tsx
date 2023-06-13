import classNames from "classnames";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  title?: string;
  subtitle?: string;
  className?: string | number | any;
}

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={styles.sectionTitle}>
      {title && (
        <h3
          className={classNames(styles.title, {
            [className]: Boolean(className),
          })}
        >
          {title}
        </h3>
      )}
      {subtitle && (
        <h1 className={classNames(styles.subtitle, styles[className])}>
          {subtitle}
        </h1>
      )}
    </div>
  );
};

export default SectionTitle;
