import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  title?: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className={styles.sectionTitle}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {subtitle && <h1 className={styles.subtitle}>{subtitle}</h1>}
    </div>
  );
};

export default SectionTitle;
