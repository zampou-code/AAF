import classNames from "classnames";
import Image from "@/components/image";

import aal from "@/assets/images/aal.jpg";

import styles from "./GaleryCard.module.scss";

const GaleryCard = () => {
  return (
    <div className={styles.galeryCard}>
      <Image
        src={aal}
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
