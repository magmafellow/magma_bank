"use client";

import Link from "next/link";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { AiFillBank } from "react-icons/ai";
import { usePathname } from "next/navigation";


export default function NavBar() {
  const path = usePathname()
  
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <AiFillBank className="text-4xl text-sky-400" />
        <span className="self-center pl-1 whitespace-nowrap text-xl font-semibold dark:text-white">
          Magma Bank
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active={path==='/'}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/accounts" active={path==='/accounts'} >
          Accounts
        </Navbar.Link>
        <Navbar.Link as={Link} href="/support" active={path==='/support'} >Support</Navbar.Link>
        <Navbar.Link as={Link} href="/pricing" active={path==='/pricing'}>Pricing</Navbar.Link>
        <Navbar.Link as={Link} href="/login" active={path==='/login'} >Login</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
