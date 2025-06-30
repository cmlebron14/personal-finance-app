import { useSidebar } from "@/app/context/SidebarContext";
import MinimizeIcon from "@/public/images/icon-minimize-menu.svg";
import styles from "./toggleButton.module.css";

const ToggleButton = () => {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <button
      className={`${styles.button} ${isOpen ? "" : styles.buttonClosed}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <MinimizeIcon />
      <span className={`${styles.text} ${isOpen ? "" : styles.textClosed}`}>
        Minimize Menu
      </span>
    </button>
  );
};

export default ToggleButton;
