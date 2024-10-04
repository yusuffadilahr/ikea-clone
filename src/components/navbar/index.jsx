import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiMenuBurger } from 'react-icons/ci'

const NavbarCustom = () => {
    return (
        <nav className='w-full h-14 md:h-20 bg-white lg:h-24 flex items-center z-20 top-0 fixed'>
            <div className='w-full justify-between items-center flex'>
                <div className='grid grid-cols-1 lg:grid-cols-5'>
                    <div className='w-[68px] md:w-[80px] lg:w-[90px] ml-5'>
                        <Image src="https://www.ikea.com/global/assets/logos/brand/ikea.svg" alt="logo-company" width={1000} height={1000} />
                    </div>
                    <Link href='/' className='hover:font-bold hidden lg:flex justify-center items-center'>Home</Link>
                    <Link href='/about' className='hover:font-bold lg:flex items-center hidden'>About Us</Link>
                    <Link href='/products' className='hover:font-bold hidden lg:flex items-center'>Products</Link>
                    <Link href='our-team' className='hover:font-bold hidden lg:flex items-center'>Our Team</Link>
                </div>
                <div className="flex lg:hidden mr-5">
                    <CiMenuBurger />
                </div>
            </div>
        </nav>
    )
}

export default NavbarCustom
