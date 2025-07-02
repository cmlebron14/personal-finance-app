import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/app/context/SidebarContext";
import OverviewIcon from "@/public/images/icon-nav-overview.svg";
import TransactionsIcon from "@/public/images/icon-nav-transactions.svg";
import BudgetsIcon from "@/public/images/icon-nav-budgets.svg";
import PotsIcon from "@/public/images/icon-nav-pots.svg";
import BillsIcon from "@/public/images/icon-nav-recurring-bills.svg";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const { isOpen } = useSidebar();

  return (
    <ul className={styles.navbar}>
      <li className={styles.navItem}>
        <Link
          href="/"
          className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
        >
          <div className={styles.svgWrapper}>
            <OverviewIcon />
          </div>
          <span className={`${styles.text} ${isOpen ? "" : styles.closed}`}>
            Overview
          </span>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/transactions"
          className={`${styles.link} ${
            isActive("/transactions") ? styles.active : ""
          }`}
        >
          <div className={styles.svgWrapper}>
            <TransactionsIcon />
          </div>
          <span className={`${styles.text} ${isOpen ? "" : styles.closed}`}>
            Transactions
          </span>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/budgets"
          className={`${styles.link} ${
            isActive("/budgets") ? styles.active : ""
          }`}
        >
          <div className={styles.svgWrapper}>
            <BudgetsIcon />
          </div>
          <span className={`${styles.text} ${isOpen ? "" : styles.closed}`}>
            Budgets
          </span>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/pots"
          className={`${styles.link} ${isActive("/pots") ? styles.active : ""}`}
        >
          <div className={styles.svgWrapper}>
            <PotsIcon />
          </div>
          <span className={`${styles.text} ${isOpen ? "" : styles.closed}`}>
            Pots
          </span>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/recurring-bills"
          className={`${styles.link} ${
            isActive("/recurring-bills") ? styles.active : ""
          }`}
        >
          <div className={styles.svgWrapper}>
            <BillsIcon />
          </div>
          <span className={`${styles.text} ${isOpen ? "" : styles.closed}`}>
            Recurring Bills
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
