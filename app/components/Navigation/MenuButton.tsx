import Image from "next/image";
import styles from "./menubutton.module.css";

const MenuButton = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <button className={styles.button} onClick={setIsNavOpen(!isNavOpen)}>
      <Image
        src="./images/icon-minimize-menu.svg"
        alt="Minimize Menu Icon"
        width={24}
        height={24}
      />
      <span className={styles.buttonText}>Minimize Menu</span>
    </button>
  );
};

export default MenuButton;
