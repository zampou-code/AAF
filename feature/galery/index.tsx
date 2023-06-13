import Image from "@/components/image";
import Button from "@/components/button";
import Section from "@/components/section";
import SectionTitle from "@/components/section-title";

import styles from "./Galery.module.scss";
import GaleryCard from "@/components/card/galery-card";
import Accordion from "@/components/accordion";

const Galery = () => {
  return (
    <Section className={styles.galery} id="faq">
      <div className={styles.galery}>
        <GaleryCard />
        <GaleryCard />
        <GaleryCard />
        <GaleryCard />
      </div>
      <div className={styles.content}>
        <SectionTitle title="Pourquoi voté" subtitle="Alain ADJA" />

        <div className={styles.textContent}>
          <Accordion />
        </div>

        <Button>Lire la suite</Button>
      </div>
    </Section>
  );
};

export default Galery;
