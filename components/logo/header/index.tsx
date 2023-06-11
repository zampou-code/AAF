import Link from "next/link";
import classNames from "classnames";
import Image from "@/components/image";

import logo from "assets/images/logo.png";

import styles from "./LogoHeader.module.scss";

interface LogoHeaderProps {
  className?: string | any;
}

const LogoHeader = ({ className }: LogoHeaderProps) => {
  return (
    <Link href="/" passHref>
      <Image
        src={logo}
        alt="header logo"
        imageSize={{
          width: 1854,
          height: 1871,
        }}
        className={classNames(styles.logoHeader, {
          [className]: Boolean(className),
        })}
      />
    </Link>
  );
};

export default LogoHeader;
