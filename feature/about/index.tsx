import Image from "@/components/image";
import Button from "@/components/button";
import Section from "@/components/section";
import SectionTitle from "@/components/section-title";

import aal from "@/assets/images/aal.jpg";

import styles from "./About.module.scss";

const About = () => {
  return (
    <Section className={styles.about} id="about">
        <div className={styles.content}>
          <SectionTitle title="À propos" subtitle="Alain ADJA" className="one" />
          <div className={styles.textContent}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ipsum magnam rerum iure delectus et, assumenda voluptatem! Eius
              rerum fugiat consequatur iure sequi, dolore cupiditate id placeat
              dolorum dicta voluptatum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ipsum magnam rerum iure delectus et, assumenda voluptatem! Eius
              rerum fugiat consequatur iure sequi, dolore cupiditate id placeat
              dolorum dicta voluptatum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ipsum magnam rerum iure delectus et, assumenda voluptatem! Eius
              rerum fugiat consequatur iure sequi, dolore cupiditate id placeat
              dolorum dicta voluptatum?
            </p>
          </div>

          <Button>Lire la suite</Button>
        </div>
        <Image
          src={aal}
          alt="header logo"
          imageSize={{
            width: 1854,
            height: 1871,
          }}
          className={styles.image}
        />
    </Section>
  );
};

export default About;
