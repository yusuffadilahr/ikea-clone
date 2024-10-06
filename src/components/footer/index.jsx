import React from 'react'
import icon from '@/assets/images/footer-illustration.svg'
import Image from 'next/image'
import Link from 'next/link'

const FooterCustom = () => {
    return (
        <footer className="bottom-0 h-fit w-full pt-32 bg-white text-black">
            <div className="w-full flex justify-center items-center flex-col gap-10 mb-20">
                <h1 className="font-bold text-sm md:text-2xl">A world of inspiration for your home</h1>
                <Image width={500} height={500} src="https://www.ikea.com/global/assets/logos/brand/ikea.svg" alt="logo-company" className='w-20 md:w-[150px] ml-5' />
            </div>
            <Image width={500} height={500} src='https://www.ikea.com/global/en/images/footer-illustration.svg' alt="" className='w-full h-fit' />
            <div className="w-full h-52 bg-blue-800 flex flex-col justify-center items-center">
                <div className='w-full h-full justify-center items-center flex flex-col text-white'>
                    <div className='grid px-2 lg:px-10 grid-cols-2 md:grid-cols-3 text-xs md:text-base lg:text-xl lg:grid-cols-6 font-semibold text-white gap-5'>
                        <Link href='' className="flex items-center justify-start lg:justify-center lg:items-center md:items-center md:justify-start">
                            <h1>Internasional Sales</h1>
                        </Link>
                        <Link href='' className="flex items-center justify-end lg:justify-center lg:items-center md:items-center md:justify-center">
                            <h1>Inter IKEA Group</h1>
                        </Link>
                        <Link href='' className="flex items-center justify-start lg:justify-center lg:items-center md:items-center md:justify-end">
                            <h1>IKEA Foundation</h1>
                        </Link>
                        <Link href='' className="flex items-center justify-end lg:justify-center lg:items-center md:items-center md:justify-start">
                            <h1>IKEA Museum</h1>
                        </Link>
                        <Link href='' className="flex items-center justify-start lg:justify-center lg:items-center md:items-center md:justify-center">
                            <h1>Social Entrepreneurship</h1>
                        </Link>
                        <Link href='' className="flex items-center justify-end lg:justify-center lg:items-center md:items-center md:justify-end">
                            <h1>FAQ</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pb-5 flex justify-center items-center w-full bg-blue-800 px-4">
                <h1 className="text-white text-xs md:text-sm">&copy; Cloned by Yusuf Fadilah Rukmana</h1>
            </div>
        </footer>
    )
}

export default FooterCustom
