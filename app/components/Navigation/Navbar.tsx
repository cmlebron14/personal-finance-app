"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Overview</Link>
        </li>
        <li>
          <Link href="/transactions">Transactions</Link>
        </li>
        <li>
          <Link href="/budgets">Budgets</Link>
        </li>
        <li>
          <Link href="/pots">Pots</Link>
        </li>
        <li>
          <Link href="/recurring-bills">Recurring Bills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
