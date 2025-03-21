import Image from "@/components/image";
import { StaticImageData } from "next/image";
import { Card, CardActionArea, CardContent } from "@mui/material";

import styles from "./ActualityCard.module.scss";

interface ActualityCardProps {
  image: StaticImageData | string;
}

const ActualityCard = ({ image }: ActualityCardProps) => {
  return (
    <Card className={styles.actualityCard}>
      <CardActionArea>
        <div className={styles.imageContent}>
          <Image
            src={image}
            alt="header logo"
            imageSize={{
              width: 1854,
              height: 1871,
            }}
            className={styles.image}
          />
          <div className={styles.time}>
            <span>27</span>
            <span>JANV</span>
          </div>
        </div>
        <CardContent className={styles.content}>
          <h2> Lorem ipsum dolor sit</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            laboriosam, blanditiis illo ea ipsa error dolorem sed.
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActualityCard;
