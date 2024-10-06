import React from 'react'
import icon from '@/assets/images/footer-illustration.svg'
import Image from 'next/image'

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
                    <div className='grid px-10 grid-cols-2 text-sm lg:grid-cols-6 font-semibold text-white gap-5'>
                        <button className="flex items-center">
                            <h1>Internasional Sales</h1>
                        </button>
                        <button className="flex items-center justify-center">
                            <h1>Inter IKEA Group</h1>
                        </button>
                        <button className="flex items-center justify-center">
                            <h1>IKEA Foundation</h1>
                        </button>
                        <button className="flex items-center justify-center">
                            <h1>IKEA Museum</h1>
                        </button>
                        <button className="flex items-center justify-center">
                            <h1>Social Entrepreneurship</h1>
                        </button>
                        <button className="flex items-center justify-center">
                            <h1>FAQ</h1>
                        </button>
                    </div>
                </div>
            </div>
            <div className="pb-5 flex justify-center items-center w-full bg-blue-800 px-4">
                <div className='grid grid-cols-3 w-full text-center'>
                    <div className="flex justify-start items-start">
                        <h1 className="text-white">Github</h1>
                    </div>
                    <h1 className="text-white">&copy; Cloned by Yusuf Fadilah Rukmana</h1>
                    <div className="flex justify-end items-end">
                        <h1 className="text-white">Linkedin</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterCustom
