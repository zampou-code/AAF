import { RefObject } from "react";
import classNames from "classnames";
import Image from "@/components/image";
import Button from "@/components/button";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight, BiArrowToBottom } from "react-icons/bi";

import hero1 from "@/assets/images/sliders/hero/hero1.jpg";
import as4 from "@/assets/images/as/as4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./HeroSlide.module.scss";
import { useRef } from "react";

const HeroSlide = () => {
  const swiperRef: RefObject<any> = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className={classNames("hero-slide", styles.heroSilde)}>
      <Swiper
        loop={true}
        ref={swiperRef}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        className={styles.sliderContainer}
      >
        <SwiperSlide className={styles.slider}>
          <Image
            src={hero1}
            alt="fr"
            imageSize={{
              width: 2700,
              height: 1038,
            }}
            className={styles.slideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slider}>
          <Image
            src={as4}
            alt="fr"
            imageSize={{
              width: 2700,
              height: 1038,
            }}
            className={styles.slideImage}
          />
        </SwiperSlide>

        <div className={styles.arrows}>
          <Button onClick={handlePrevClick} className={styles.btn}>
            <BiChevronLeft size={30} />
          </Button>
          <Button onClick={handleNextClick} className={styles.btn}>
            <BiChevronRight size={30} />
          </Button>
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSlide;
