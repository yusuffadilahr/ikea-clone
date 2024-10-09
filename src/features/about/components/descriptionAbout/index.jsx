import CultureComponent from '@/components/core/culture'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const DescriptionHistory = ({ hiddenContent }) => {
    return (
        <section className={`w-full h-fit pt-2 md:mt-5 lg:mt-24 ${hiddenContent}`}>
            <div className="pt-10 border-t px-2 lg:px-20">
                <h1 className="text-xl md:text-4xl mb-4 md:mb-10 font-bold border-neutral-500">About Us & History</h1>
                <p className="w-full lg:max-w-[68vw] mb-10 md:text-base text-sm">What started as a tiny mail order company in rural Sweden has now become a global home furnishing brand that brings affordability, design and comfort to people all over the world. We may have come a long way since our humble beginnings, but our vision remains the same: to create a better everyday life for the many people. Here you can explore the IKEA story and learn more about our heritage and the events that shaped us.</p>
            </div>
            <div className='w-full md:px-0 lg:px-60 h-fit flex flex-col justify-center md:mt-0 lg:mt-20 items-center mb-20 md:mb-36'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <Image loading="lazy" alt='founder' className='w-full object-cover rounded-xl h-full' src={'https://www.ikea.com/global/en/images/ingvarwithchair_28c4a64ed2.jpg?f=sg'} width={500} height={500} />
                    <div className='flex flex-col max-w-[70%] justify-center mt-20 md:mt-36 items-center w-full'>
                        <h1 className='flex justify-normal items-center mb-8 w-full font-bold text-xl md:text-5xl'>The story of IKEA</h1>
                        <p className='text-sm md:text-xl'>Weve come a long way since our early days in Älmhult, Sweden, but IKEA founder Ingvar Kamprads dream to create a better life for as many people as possible – whatever the size of their wallet – is and will always be our driving force.</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-96 flex lg:px-20 mb-5 md:mb-20'>
                <div className='flex-col gap-5 bg-yellow-400 flex justify-center items-center w-full h-full rounded-xl'>
                    <p className='lg:max-w-[50%] max-w-[90%] text-sm md:text-lg flex justify-normal w-full'>Did you know?</p>
                    <p className='lg:max-w-[50%] max-w-[90%] text-base md:text-2xl'>IKEA is named after the initials of founder <span className='font-bold'>I</span>ngvar <span className='font-bold'>K</span>amprad, <span className='font-bold'>E</span>lmtaryd, the farm on which he grew up, and <span className='font-bold'>A</span>gunnaryd, the nearby village.</p>
                </div>
            </div>
            <div className="w-full flex mt-10 md:mt-32 px-2 lg:px-20 mb-32">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className='w-full md:w-[80%]'>
                        <Image loading="lazy" width={500} height={500} src={'https://www.ikea.com/global/en/images/ikea_early_beginnings_green_shed_elmtaryd_sweden_1940s_1600x900_85425134bf.jpg?f=sg'} alt="about-section" className="w-full rounded-xl h-[50vh] md:h-[80vh] object-cover" />
                    </div>
                    <div className="flex flex-col gap-8 justify-center items-center w-full">
                        <h1 className="flex max-w-[90%] md:max-w-[65%] w-full justify-normal text-xl md:text-4xl font-bold">Humble beginnings</h1>
                        <p className='max-w-[90%] md:max-w-[65%] text-sm md:text-base'>IKEA was first registered as a trading company on the 28th of July, 1943 when Ingvar was just 17 years old. In his early years as an entrepreneur, Ingvar imported things like pens, watches and nylon stockings; adding furniture to the range in 1948.</p>
                        <div className='w-full justify-center items-center flex'>
                            <Link href='https://ikea.com' className='border-y flex justify-between py-3 w-full max-w-[90%] md:max-w-[65%] text-xs md:text-base'>
                                Dive into IKEA&apos;s full history at IKEA Museum
                                <BsArrowRight className='w-5 h-5' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex mt-10 px-2 lg:px-20 md:mb-20">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col lg:pl-6 justify-center w-full">
                        <h1 className="font-bold text-xl md:text-xl lg:text-2xl mb-5">The flatpack revolution begins</h1>
                        <p className='text-justify md:text-left md:pr-10 md:text-base text-sm'>High costs and damage rates when transporting furniture via mail order were constant thorns in Ingvar’s side. Although flatpack furniture already existed, it hadn’t really taken off in Sweden yet. In 1953, IKEA adopted the flatpack. Self-assembly products proved popular and to be the solution to those costly transportation problems.</p>
                        <div className="flex flex-col justify-center items-center w-full">
                            <h1 className="text-base md:text-xl lg:text-xl text-center md:text-left font-bold pt-10">
                                &quot; Most things still remain to be done. A glorious future! &quot;
                            </h1>
                            <p className="flex flex-col justify-start w-full lg:px-7 pt-6 font-bold">- Ingvar Kamprad
                                <span className="font-normal">IKEA founder</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <Image loading="lazy" width={500} height={500} src={'https://www.ikea.com/ext/ingkadam/m/c391306500d28d8/original/PE117762-crop001.jpg?f=l'} alt="about-section" className="w-full rounded-xl h-[80vh] object-cover" />
                    </div>
                </div>
            </div>
            <CultureComponent />
        </section>
    )
}

export default DescriptionHistory
