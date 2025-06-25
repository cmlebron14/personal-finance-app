"use client";
import { useSidebar } from "../context/SidebarContext";
import Navigation from "../components/navigation/Navigation";
import styles from "./layout.module.css";

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebar();

  return (
    <>
      <div
        className={`${styles.nav} ${
          isOpen ? styles.navExpanded : styles.navCollapsed
        }`}
      >
        <Navigation />
      </div>
      <div className={isOpen ? styles.appNavExpanded : styles.appNavCollapsed}>
        {children}
      </div>
    </>
  );
};

export default NavLayout;
