"use client";
import { useSidebar } from "@/app/context/SidebarContext";
import Navigation from "@/app/components/navigation/Navigation";
import styles from "./layout.module.css";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
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
      <div className={isOpen ? styles.open : styles.closed}>{children}</div>
    </>
  );
};

export default PageLayout;
