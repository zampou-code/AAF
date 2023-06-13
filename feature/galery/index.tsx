import Image from "@/components/image";
import Button from "@/components/button";
import Section from "@/components/section";
import SectionTitle from "@/components/section-title";
import GaleryCard from "@/components/card/galery-card";

import media1 from "@/assets/images/media/media1.jpg";
import media2 from "@/assets/images/media/media2.jpg";
import media3 from "@/assets/images/media/media3.jpg";

import styles from "./Galery.module.scss";

const Galery = () => {
  return (
    <Section className={styles.galery} id="media">
      <GaleryCard image={media1} />
      <GaleryCard image={media2} />
      <GaleryCard image={media3} />
    </Section>
  );
};

export default Galery;
