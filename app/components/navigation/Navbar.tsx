"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/app/context/SidebarContext";
import OverviewIcon from "@/public/images/icon-nav-overview.svg";
import TransactionsIcon from "@/public/images/icon-nav-transactions.svg";
import BudgetsIcon from "@/public/images/icon-nav-budgets.svg";
import PotsIcon from "@/public/images/icon-nav-pots.svg";
import RecurringBillsIcon from "@/public/images/icon-nav-recurring-bills.svg";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const { isOpen } = useSidebar();

  return (
    <ul className={styles.navbar}>
      <li>
        <Link
          href="/"
          className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
        >
          <OverviewIcon />
          {isOpen && <span className={styles.text}>Overview</span>}
        </Link>
      </li>
      <li>
        <Link
          href="/transactions"
          className={`${styles.link} ${
            isActive("/transactions") ? styles.active : ""
          }`}
        >
          <TransactionsIcon />
          {isOpen && <span className={styles.text}>Transactions</span>}
        </Link>
      </li>
      <li>
        <Link
          href="/budgets"
          className={`${styles.link} ${
            isActive("/budgets") ? styles.active : ""
          }`}
        >
          <BudgetsIcon />
          {isOpen && <span className={styles.text}>Budgets</span>}
        </Link>
      </li>
      <li>
        <Link
          href="/pots"
          className={`${styles.link} ${isActive("/pots") ? styles.active : ""}`}
        >
          <PotsIcon />
          {isOpen && <span className={styles.text}>Pots</span>}
        </Link>
      </li>
      <li>
        <Link
          href="/recurring-bills"
          className={`${styles.link} ${
            isActive("/recurring-bills") ? styles.active : ""
          }`}
        >
          <RecurringBillsIcon />
          {isOpen && <span className={styles.text}>Recurring Bills</span>}
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
