import classNames from "classnames";
import Image from "@/components/image";
import { StaticImageData } from "next/image";

import styles from "./GaleryCard.module.scss";

interface GaleryCardProps {
  image: StaticImageData | string;
}

const GaleryCard = ({ image }: GaleryCardProps) => {
  return (
    <div className={styles.galeryCard}>
      <Image
        src={image}
        alt="header logo"
        imageSize={{
          width: 1854,
          height: 1871,
        }}
        className={styles.image}
      />

      <div className={classNames(styles.overlay, styles.flipEffect)}>
        <h1 className={styles.overlayContent}>Oh Ok okkkk</h1>
      </div>
    </div>
  );
};

export default GaleryCard;
