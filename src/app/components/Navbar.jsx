"use client"
import React, { useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancelPresentation } from "react-icons/md";
import Link from 'next/link';
import styles from "./main.module.css"

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)

  function nav(){
    setShowNav(!showNav)

  }
  return (
    <div className={`flex flex-row justify-between items-center z-10 h-16 fixed inset-x-0 text-white lg:px-16 px-3 lg:h-20 ${styles.nav} `}>
        <div className='lg:text-xl font-bold'>FUTURETECH</div>
        <RxHamburgerMenu className='md:hidden sm:hidden text-white' onClick={nav}/>
        <div className={`flex md:flex-row flex-col items-center text-white    md:relative fixed top-0 bottom-0 left-0 right-0  md:gap-4 gap-14 transition-transform transform ease-in-out duration-500 place-content-center ${showNav ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} ${styles.ul} `}>
        <MdCancelPresentation className='md:hidden' onClick={nav} />
        <Link href='/'>
            <div>Blog</div>
        </Link>
            <div>Projects</div>
            <div>About</div>
            <Link href='/newsletter'>
            <div>Newsletter</div>
            </Link>
            <div className='flex flex-row gap-3 items-center bg-black text-white rounded-2xl p-2 md:ml-5'>
                <div><IoSunnyOutline /></div>
                <div><IoMoonOutline /></div>
            </div>
        </div>
    </div>
  )
}
