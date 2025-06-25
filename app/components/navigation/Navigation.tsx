"use client";
import { useSidebar } from "@/app/context/SidebarContext";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ToggleButton from "./ToggleButton";
import styles from "./navigation.module.css";

const Navigation = () => {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`${styles.navigation} ${isOpen ? styles.open : styles.closed}`}
    >
      <Logo />
      <Navbar />
      <ToggleButton />
    </div>
  );
};

export default Navigation;
