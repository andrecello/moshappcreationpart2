import Link from 'next/link'
import React from 'react'
import { BiSolidGame } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className = 'flex space-x-6 border mb-5 px-5 h-14 items-center'>
        <Link href='/'><BiSolidGame /></Link>
        <ul className = 'flex space-x-6'>
            <li><Link className = 'text-sky-500 hover:text-sky-950' href='/'>Dashboard</Link></li>
            <li><Link href='/issues'>Issues</Link></li>
            <li><Link href='/aboutme'>About Me</Link></li>
            <li><Link href='/welcomescreen'>TroubleShooting</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar