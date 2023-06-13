import Image from "@/components/image";
import Section from "@/components/section";
import SectionTitle from "@/components/section-title";
import CustomizedAccordions from "@/components/accordion/test";

import faq from "@/assets/images/faq.jpg";

import styles from "./Faq.module.scss";

const Faq = () => {
  return (
    <Section className={styles.faq} id="faq">
      <Image
        src={faq}
        alt="header logo"
        imageSize={{
          width: 1854,
          height: 1871,
        }}
        className={styles.image}
      />
      <div className={styles.content}>
        <SectionTitle title="Pourquoi voté" subtitle="Alain ADJA" className="two" />
        <div className={styles.textContent}>
          <CustomizedAccordions />
        </div>
      </div>
    </Section>
  );
};

export default Faq;
