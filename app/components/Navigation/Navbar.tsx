"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Overview from "./Icons/Overview";
import Transactions from "./Icons/Transactions";
import Budgets from "./Icons/Budgets";
import Pots from "./Icons/Pots";
import RecurringBills from "./Icons/RecurringBills";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.navbar}>
      <li>
        <Link
          href="/"
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          <Overview fillColor={pathname === "/" ? "#277C78" : "#B3B3B3"} />
          <span className={styles.linkText}>Overview</span>
        </Link>
      </li>
      <li>
        <Link
          href="/transactions"
          className={`${styles.link} ${
            pathname === "/transactions" ? styles.active : ""
          }`}
        >
          <Transactions
            fillColor={pathname === "/transactions" ? "#277C78" : "#B3B3B3"}
          />
          <span className={styles.linkText}>Transactions</span>
        </Link>
      </li>
      <li>
        <Link
          href="/budgets"
          className={`${styles.link} ${
            pathname === "/budgets" ? styles.active : ""
          }`}
        >
          <Budgets
            fillColor={pathname === "/budgets" ? "#277C78" : "#B3B3B3"}
          />
          <span className={styles.linkText}>Budgets</span>
        </Link>
      </li>
      <li>
        <Link
          href="/pots"
          className={`${styles.link} ${
            pathname === "/pots" ? styles.active : ""
          }`}
        >
          <Pots fillColor={pathname === "/pots" ? "#277C78" : "#B3B3B3"} />
          <span className={styles.linkText}>Pots</span>
        </Link>
      </li>
      <li>
        <Link
          href="/recurring-bills"
          className={`${styles.link} ${
            pathname === "/recurring-bills" ? styles.active : ""
          }`}
        >
          <RecurringBills
            fillColor={pathname === "/recurring-bills" ? "#277C78" : "#B3B3B3"}
          />
          <span className={styles.linkText}>Recurring Bills</span>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
