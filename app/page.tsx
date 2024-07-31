'use client'

import Container from "./ui/container";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import AccountsDropdown from "./ui/slash/accounts_dropdown";
import BankCard from "./ui/slash/bank-card";
import AccountActions from "./ui/slash/account-actions";


export default function Home() {
  return (
    <Container>
      <NavBar />
      <h1 className="mb-4 pt-2 text-4xl text-slate-900 dark:text-white">
        Hello, Alexei Romanov!
      </h1>
      <main className="rounded-md border border-sky-400 bg-sky-100 text-sky-800 dark:border-sky-300 dark:bg-sky-800 px-2 py-1 dark:text-sky-400">
        <BankCard className="mb-3" />
        <AccountsDropdown />
        <AccountActions />
      </main>
      <Footer />
    </Container>
  );
}
