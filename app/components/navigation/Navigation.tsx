"use client";
import Navbar from "./Navbar";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Navbar />
    </div>
  );
};

export default Navigation;
