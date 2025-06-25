"use client";
import { useSidebar } from "@/app/context/SidebarContext";
import MinimizeIcon from "@/public/images/icon-minimize-menu.svg";
import styles from "./toggleButton.module.css";

const ToggleButton = () => {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <button
      className={`${styles.button} ${isOpen ? "" : styles.closed}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <MinimizeIcon />
      {isOpen && <span className={styles.text}>Minimize Menu</span>}
    </button>
  );
};

export default ToggleButton;
