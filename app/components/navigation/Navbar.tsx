import Link from "next/link";
import { usePathname } from "next/navigation";
import OverviewIcon from "@/public/images/icon-nav-overview.svg";
import TransactionsIcon from "@/public/images/icon-nav-transactions.svg";
import BudgetsIcon from "@/public/images/icon-nav-budgets.svg";
import PotsIcon from "@/public/images/icon-nav-pots.svg";
import BillsIcon from "@/public/images/icon-nav-recurring-bills.svg";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <ul className={styles.navbar}>
      <li className={styles.navItem}>
        <Link
          href="/"
          className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
        >
          <OverviewIcon />
          <span className={styles.text}>Overview</span>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/transactions"
          className={`${styles.link} ${
            isActive("/transactions") ? styles.active : ""
          }`}
        >
          <TransactionsIcon />
          <span className={styles.text}>Transactions</span>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/budgets"
          className={`${styles.link} ${
            isActive("/budgets") ? styles.active : ""
          }`}
        >
          <BudgetsIcon />
          <span className={styles.text}>Budgets</span>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/pots"
          className={`${styles.link} ${isActive("/pots") ? styles.active : ""}`}
        >
          <PotsIcon />
          <span className={styles.text}>Pots</span>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="/recurring-bills"
          className={`${styles.link} ${
            isActive("/recurring-bills") ? styles.active : ""
          }`}
        >
          <BillsIcon />
          <span className={styles.text}>Recurring Bills</span>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
