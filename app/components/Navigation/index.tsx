"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import styles from "./navigation.module.css";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  console.log("is nav open?", isNavOpen);

  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <Image
          src="/images/logo-large.svg"
          alt="finance logo"
          width={122}
          height={22}
        />
      </div>
      <Navbar />
      <MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </div>
  );
};

export default Navigation;
