'use client'
import Link from 'next/link'
import React from 'react'
import { BiSolidGame } from "react-icons/bi";
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentPath = usePathname();
    console.log(currentPath);

    const links = [
        { label: 'Dashboard', href: '/'},
        { label: 'Issues', href: '/issues'},
        { label: 'About me', href: '/aboutme'},
        { label: 'Troubleshooting', href:'/troubleshooting'},
        { label: 'Blog', href:'/blog'}

    ]
  return (
    <nav className = 'flex space-x-6 border mb-5 px-5 h-14 items-center'>
        <Link href='/'><BiSolidGame /></Link>
        <ul className = 'flex space-x-6'>
            {links.map(link => 
                <Link 
                    key={link.href}
                        className = {`${link.href === currentPath ? 'text-fuchsia-500' : 'text-sky-500'} hover:text-sky-950 transition-colors`}
                        href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar