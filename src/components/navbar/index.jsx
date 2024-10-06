'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { CiMenuBurger } from 'react-icons/ci'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { PiArrowBendRightUp } from 'react-icons/pi'

const NavbarCustom = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true)

    const handleOpenSideBar = () => {
        setSideBarOpen(!sideBarOpen)
    }
    return (
        <>
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

                    {sideBarOpen ?
                        <button onClick={handleOpenSideBar} className="flex lg:hidden mr-5">
                            <CiMenuBurger />
                        </button>
                        :
                        <button onClick={handleOpenSideBar} className="flex lg:hidden mr-5">
                          <IoMdCloseCircleOutline/>
                        </button>
                    }

                    {/* {sideBarOpen ? <CiMenuBurger /> : <IoCloseCircleOutline />} */}
                </div>
            </nav>
            {sideBarOpen ?
                ''
                :
                <aside className='w-[80%] lg:hidden top-14 lg:top-20 py-8 fixed flex flex-col z-20 right-0 h-screen bg-white px-5'>
                    <section className="w-full h-fit rounded-lg gap-1 flex flex-col">
                        <div className="w-full h-[10vh] bg-yellow-400 rounded-t-lg flex justify-center items-center">
                            <button className='md:text-2xl h-32 text-lg flex items-center font-bold hover:text-neutral-600'>Go Shopping
                                <BsArrowRightCircleFill className="ml-5 md:ml-4 lg:ml-10" />
                            </button>
                        </div>
                        <Link href='https://ikea.com' className="w-full h-16 md:h-16 bg-yellow-400 hover:bg-yellow-200 rounded-b-lg text-sm md:text-lg flex justify-start pl-10 items-center">
                            source: <span className='font-bold ml-1'>IKEA.com</span> <PiArrowBendRightUp />
                        </Link>
                    </section>
                    <section className='text-xl md:text-2xl font-bold mt-5 text-black'>
                        <Link href='/' className='flex py-4 border-t justify-between items-center pr-2'>
                            Home
                            <BsArrowRightCircleFill />
                        </Link>
                        <Link href='/about' className='flex py-4 border-t justify-between items-center pr-2'>
                            About Us
                            <BsArrowRightCircleFill />
                        </Link>
                        <Link href='/products' className='flex py-4 border-t justify-between items-center pr-2'>
                            Products
                            <BsArrowRightCircleFill />
                        </Link>
                        <Link href='/team' className='flex py-4 border-y justify-between items-center pr-2'>
                            Our Team
                            <BsArrowRightCircleFill />
                        </Link>
                    </section>
                    <section className='w-full mt-10 flex items-end justify-center'>
                        <h1 className='text-neutral-500 text-sm'>&copy;cloned by Yusuf Fadilah Rukmana</h1>
                    </section>
                </aside>
            }
        </>
    )
}

export default NavbarCustom
