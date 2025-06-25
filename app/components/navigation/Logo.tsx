"use client";
import Image from "next/image";
import { useSidebar } from "@/app/context/SidebarContext";
import styles from "./logo.module.css";

const Logo = () => {
  const { isOpen } = useSidebar();

  if (isOpen) {
    return (
      <Image
        src="/images/logo-large.svg"
        alt="finance logo"
        height={22}
        width={122}
        className={styles.logo}
      />
    );
  }

  return (
    <Image
      src="/images/logo-small.svg"
      alt="finance logo"
      height={22}
      width={14}
      className={styles.logo}
    />
  );
};

export default Logo;
