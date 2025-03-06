import Link from 'next/link'
import React from 'react'

type navbarProps = {
    openNavbar: boolean,
    setOpenNavbar: (value: boolean) => void,
}

export default function Navbar({openNavbar , setOpenNavbar} : navbarProps) {
  return (
    <div className={`absolute md:static top-[45px] left-0 md:left-auto w-full md:w-auto py-10 md:py-0 md:h-auto h-screen bg-main-primary md:bg-inherit z-[100] transform transition-transform duration-100 ${
        openNavbar ? 'translate-x-0 ' : '-translate-x-[200vh] md:translate-x-0'
      }`} >
        <ul className='flex flex-col md:flex-row items-center gap-5 text-[26px] md:text-[19px] font-[400] '>
            <li onClick={() => setOpenNavbar(!openNavbar)} ><Link href={'/'}>Home</Link></li>
            <li onClick={() => setOpenNavbar(!openNavbar)}><Link href='/shop'>Shop</Link></li>
            <li onClick={() => setOpenNavbar(!openNavbar)}><Link href='/products'>Products</Link></li>
            <li onClick={() => setOpenNavbar(!openNavbar)}><Link href='/about'>About</Link></li>
            <li onClick={() => setOpenNavbar(!openNavbar)}><Link href='/contact'>Contact</Link></li>
        </ul> 
    </div>
  )
}
  