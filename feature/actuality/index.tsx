import Section from "@/components/section";
import ActualityCard from "@/components/card/actuality-card";

import as1 from "@/assets/images/as/as1.jpg";
import as2 from "@/assets/images/as/as2.jpg";
import as3 from "@/assets/images/as/as3.jpg";

import styles from "./Actuality.module.scss";
import SectionTitle from "@/components/section-title";

const Actuality = () => {
  return (
    <Section className={styles.actuality} id="actu">
      <SectionTitle title="Actualité" className={styles.title} />
      <div className={styles.galery}>
        <ActualityCard image={as1} />
        <ActualityCard image={as2} />
        <ActualityCard image={as3} />
      </div>
    </Section>
  );
};

export default Actuality;
