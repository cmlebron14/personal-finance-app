"use client";
import { useState, useEffect } from "react";
import { useSidebar } from "@/app/context/SidebarContext";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ToggleButton from "./ToggleButton";
import styles from "./navigation.module.css";

const Navigation = () => {
  const { isOpen } = useSidebar();
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${styles.navigation} ${isOpen ? styles.open : styles.closed}`}
    >
      {isDesktop && <Logo />}
      <Navbar />
      {isDesktop && <ToggleButton />}
    </div>
  );
};

export default Navigation;
