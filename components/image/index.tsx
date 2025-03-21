import classNames from "classnames";
import * as NextImage from "next/image";

import styles from "./Image.module.scss";

interface imageSize {
  width: number;
  height: number;
}

interface customSize {
  width: number | string;
  height: number | string;
}

interface ImageProps {
  src: string | NextImage.StaticImageData;
  alt: string;
  imageSize?: imageSize;
  customSize?: customSize;
  className?: string | any;
}

const Image = ({ src, alt, imageSize, customSize, className }: ImageProps) => {
  return (
    <div
      className={classNames(styles.imageContainer, {
        [className]: Boolean(className),
      })}
      style={customSize}
    >
      <NextImage.default
        src={src}
        alt={alt}
        width={imageSize?.width}
        height={imageSize?.height}
        className={styles.customImage}
        priority
      />
    </div>
  );
};

export default Image;
