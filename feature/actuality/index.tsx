import Section from "@/components/section";
import ActualityCard from "@/components/card/actuality-card";

import styles from "./Actuality.module.scss";

const Actuality = () => {
  return (
    <Section className={styles.actuality} id="actu">
      <ActualityCard />
      <ActualityCard />
      <ActualityCard />
    </Section>
  );
};

export default Actuality;
