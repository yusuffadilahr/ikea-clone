'use client'
import React from 'react'
import AboutPage from '../page'
import Image from 'next/image'
import history from '@/assets/images/1940s.jpg'
import { usePathname } from 'next/navigation'
import VideoContent from '@/components/core/videoContent'

const Page = () => {
    let pathName = usePathname()
    pathName = pathName.slice(-3)

    return (
        <AboutPage hidden='hidden' pxSelect='px-5' hiddenContent='hidden' px='0' year={pathName}>
            <section className='w-full mt-10 h-fit flex flex-col justify-center items-center'>
                <VideoContent
                    onMobilePadMar='pt-0 mt-0'
                    mdpt='0'
                    pt='0'
                    descShort='Go back in time and explore the origins of IKEA and Ingvar Kamprad. Hardship, thrift and ingenuity in Småland, Sweden, and visions of a new life at home for the many people. Simple, functional and beautiful.'
                    title='Our Roots - 1940'
                    video='https://ikeamuseum.com/wp-content/uploads/2021/05/IKEA_OR_ENG_MASTER_02_1.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
                    bgColor='bg-white'
                />

                <div className='flex justify-center items-center w-full mt-20 h-fit lg:px-10'>
                    <div className='w-[75%] h-fit flex'>
                        <div className='grid grid-cols-2 w-full gap-3'>
                            <div className='flex flex-col'>
                                <Image loading="lazy" alt='history' src={history} width={1000} height={1000} className='rounded-xl h-96 object-cover w-full flex' />
                                <h1 className='font-bold text-lg py-2'>The Birth of IKEA</h1>
                                <p className='h-12 scroll-smooth overflow-x-auto text-neutral-500'>The trading company IKEA was registered on the 28th of July, 1943. But it was a far cry from the furniture company we know today. In his early years as an entrepreneur, Ingvar Kamprad imported pens, watches and nylon stockings, learning the ropes of purchasing step by step. But after some problems with import licences he started looking for new opportunities, and decided to focus on furniture. A business model gradually took shape when he realised that there was a major, interesting opportunity between the customer and manufacturer.</p>
                            </div>
                            <div className='flex flex-col'>
                                <Image loading="lazy" alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/04/ingvar-kamprad-steps-poodle-1940s-603x768.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl h-96 object-cover w-full flex' />
                                <h1 className='font-bold text-lg py-2'>The Birth of IKEA</h1>
                                <p className='h-12 scroll-smooth overflow-x-auto text-neutral-500'>The trading company IKEA was registered on the 28th of July, 1943. But it was a far cry from the furniture company we know today. In his early years as an entrepreneur, Ingvar Kamprad imported pens, watches and nylon stockings, learning the ropes of purchasing step by step. But after some problems with import licences he started looking for new opportunities, and decided to focus on furniture. A business model gradually took shape when he realised that there was a major, interesting opportunity between the customer and manufacturer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <VideoContent
                    title='The swinging 40s'
                    descShort='The war ends and neutral Sweden gets a head start, boosting its economy and sense of community. From playing shop as a small boy, Ingvar Kamprad founds IKEA and a new era is dawning.'
                    bgColor='bg-blue-200'
                    video='https://ikeamuseum.com/wp-content/uploads/2021/05/IKEA_40s_ENG_MASTER_02_SUB_1.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
                />

            </section>
        </AboutPage>
    )
}

export default Page
