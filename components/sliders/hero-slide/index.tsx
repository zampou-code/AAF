import { Pagination, Autoplay } from "swiper";
import Image from "@/components/image";
import styles from "./HeroSlide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import hero1 from "../../../assets/images/sliders/hero/hero1.jpg";

import "swiper/css";
import "swiper/css/pagination";

const HeroSlide = () => {
  return (
    <section className={styles.heroSilde}>
      <Swiper
        loop={true}
        direction="vertical"
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className={styles.sliderContainer}
      >
        {Array.from({ length: 10 }, (_, index) => index + 1).map((i) => (
          <SwiperSlide key={i} className={styles.slider}>
            <div className={styles.slideContent}>
              <h1>Hooooooooooo</h1>
            </div>
            <Image
              src={hero1}
              alt="fr"
              imageSize={{
                width: 2700,
                height: 1038,
              }}
              customSize={{
                width: "100%",
                height: "auto",
              }}
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlide;
