import Navigation from "@/app/components/navigation/Navigation";
import styles from "./layout.module.css";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.navSection}>
        <Navigation />
      </div>
      {children}
    </>
  );
};

export default PageLayout;
