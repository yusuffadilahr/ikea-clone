'use client'
import Link from 'next/link'
import React from 'react'
import talk from '@/assets/images/aboutus-talk.avif'
import founder from '@/assets/images/founder.avif'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const AboutPage = ({ children }) => {

    const arrayHistory = [
        { id: 1, year: '1940s', url: '/about/1940s' },
        { id: 2, year: '1950s', url: '/about/1950s' },
        { id: 3, year: '1960s', url: '/about/1960s' },
        { id: 4, year: '1970s', url: '/about/1970s' },
        { id: 5, year: '1980s', url: '/about/1980s' },
        { id: 6, year: '1990s', url: '/about/1990s' },
        { id: 7, year: '2000s', url: '/about/2000s' },
        { id: 8, year: '2010s', url: '/about/2010s' },
        { id: 9, year: '2020s', url: '/about/2020s' }
    ]

    return (
        <>
            <main className='w-full h-fit flex flex-col pl-5 pr-5 mt-14'>

                <section className='w-full h-fit flex-col flex justify-center'>
                    <div className='flex justify-center h-fit pt-20 w-full flex-col items-center'>
                        <h1 className='text-7xl font-bold'>The Story of IKEA</h1>
                        <p className='text-center max-w-[500px] mt-5 text-lg'>Follow the timeline to discover stories on innovation and insights, big mistakes and great ideas.</p>
                    </div>
                    <div className='w-full justify-center items-center h-fit flex flex-col pt-10'>
                        <div className='flex w-full justify-center items-center'>
                            <div className='flex w-[70%] items-center justify-center overflow-y-auto gap-2 text-sm'>
                                {arrayHistory.map((item, i) => (
                                    <Link href={item.url} key={i} className='py-4 px-4 w-full font-bold bg-neutral-100 text-center rounded-full'>
                                        {item.year}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {children}
                    </div>
                </section>

                <section className="w-full h-fit pt-2">
                    <div className="pt-10 border-t px-2 lg:px-10">
                        <h1 className="text-xl md:text-4xl mb-10 font-bold border-neutral-500">About Us & History</h1>
                        <p className="w-full lg:max-w-[68vw] mb-10">What started as a tiny mail order company in rural Sweden has now become a global home furnishing brand that brings affordability, design and comfort to people all over the world. We may have come a long way since our humble beginnings, but our vision remains the same: to create a better everyday life for the many people. Here you can explore the IKEA story and learn more about our heritage and the events that shaped us.</p>

                    </div>
                    <div className="w-full h-fit md:h-fit flex flex-col gap-5 lg:gap-0 md:flex md:flex-row">
                        <div className="w-full md:w-1/2 lg:w-6/12 h-full flex flex-col pt-2 md:pt-10 px-2 lg:px-12">
                            <h1 className="text-lg md:text-2xl font-bold mb-5">From humble origins to global brand – a brief history of IKEA</h1>
                            <p className="w-full md:max-w-[850%] text-sm md:text-base">The IKEA story began in the Swedish town of Älmhult in the 1940s, with an enterprising boy who hoped to improve the lives of people everywhere. Here you follow the development of IKEA, decade for decade.</p>
                            <button className="border text-xs rounded-full mb-5 md:mb-0 px-1 py-2 mt-5 md:mt-10 border-black hover:border">Learn more about the history of IKEA</button>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-full h-full">
                            <Image src={talk} alt="about-section" className="w-full md:w-fit lg:w-full h-[70vh] object-left object-cover" />
                        </div>
                    </div>
                    <div className="w-full flex mt-10 px-2 lg:px-10">
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <Image src={founder} alt="about-section" className="w-full h-[80vh] object-cover" />
                            </div>
                            <div className="flex flex-col lg:pl-6 justify-center w-full">
                                <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-5">The flatpack revolution begins</h1>
                                <p>High costs and damage rates when transporting furniture via mail order were constant thorns in Ingvar’s side. Although flatpack furniture already existed, it hadn’t really taken off in Sweden yet. In 1953, IKEA adopted the flatpack. Self-assembly products proved popular and to be the solution to those costly transportation problems.</p>
                                <div className="flex flex-col justify-center items-center w-full">
                                    <h1 className="text-base md:text-xl lg:text-xl font-bold pt-10">
                                        " Most things still remain to be done. A glorious future! "
                                    </h1>
                                    <p className="flex flex-col justify-start w-full lg:px-7 pt-6 font-bold">- Ingvar Kamprad
                                        <span className="font-normal">IKEA founder</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default AboutPage
