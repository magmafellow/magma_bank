'use client'

import { DarkThemeToggle } from "flowbite-react";
import Container from "./ui/container";
import NavBar from "./ui/navbar";
import { PiPlusSquareThin, PiMinusSquareThin } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";
import Footer from "./ui/footer";
import AccountsDropdown from "./ui/accounts_dropdown";


export default function Home() {
  return (
    <Container>
      <NavBar />
      <h1 className="mb-4 pt-2 text-4xl text-slate-900 dark:text-white">
        Hello, Alexei Romanov!
      </h1>
      <div className="rounded-md border border-sky-400 bg-sky-100 text-sky-800 dark:border-sky-300 dark:bg-sky-800 px-2 py-1 dark:text-sky-400">
        <div className="text-lg mb-3">
          <div>Balance: <span className="font-medium">190,97</span> <span className="text-sm font-semibold">rub</span></div>
          <div className="flex gap-x-2 items-center">
            {/* name of account */}
            <span className="text-lg font-light tracking-wide">secondary income</span>
            <span>support end: 2025-01-15</span>
            <span className="font-medium">pni: 198-00001-aa</span>
          </div>
        </div>
        <AccountsDropdown />
        <div className="flex mt-3 gap-x-4 ">
          <div>
            <PiPlusSquareThin className="cursor-pointer text-[50px] dark:hover:text-orange-300 hover:text-orange-800" />
          </div>
          <div>
            <PiMinusSquareThin className="cursor-pointer text-[50px] dark:hover:text-orange-300 hover:text-orange-800" />
          </div>
          <div>
            <IoIosSend className="cursor-pointer text-[50px] dark:hover:text-orange-300 hover:text-orange-800" />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
