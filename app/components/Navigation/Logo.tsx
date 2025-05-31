"use client";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/assets/images/logo-large.svg"
      alt="finance logo"
      width={122}
      height={22}
    />
  );
};

export default Logo;
