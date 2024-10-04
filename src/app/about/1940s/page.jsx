'use client'
import React from 'react'
import AboutPage from '../page'
import Image from 'next/image'
import history from '@/assets/images/1940s.jpg'
import history2 from '@/assets/images/1940s.jpg'
import { usePathname } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setAboutHover } from '@/redux/slice/aboutSlice/1940s/aboutSlice'
import { useEffect } from 'react'

const Page = () => {
    return (
        <AboutPage>
            <section className='w-full mt-5 h-fit flex flex-col justify-center items-center'>
                <video autoPlay muted loop playsInline className='w-[70%] border h-fit rounded-xl'>
                    <source src='https://ikeamuseum.com/wp-content/uploads/2021/05/IKEA_OR_ENG_MASTER_02_1.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D' type='video/mp4' />
                </video>
                <div className="pt-10 px-2 lg:px-10 md:flex md:justify-center md:items-center md:flex-col">
                    <h1 className="text-xl md:text-xl font-bold mb-3">Our Roots - 1940</h1>
                    <p className="w-full lg:max-w-[48vw] text-center mb-10">Go back in time and explore the origins of IKEA and Ingvar Kamprad. Hardship, thrift and ingenuity in Småland, Sweden, and visions of a new life at home for the many people. Simple, functional and beautiful.</p>
                </div>
                <div className='flex justify-center items-center w-full h-screen bg-purple-800 lg:px-10'>
                    <div className='bg-white w-[75%] h-full flex'>
                        <div className='grid grid-cols-2 w-full'>
                            <Image alt='history' src={history} weight={1000} height={1000} />
                            <Image alt='history' src={history2} weight={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </section>
        </AboutPage>
    )
}

export default Page
