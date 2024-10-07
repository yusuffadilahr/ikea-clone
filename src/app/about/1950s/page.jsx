'use client'
import React from 'react'
import AboutPage from '../page'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import CardGridResponsive from '@/components/core/cardContent/cardGridResponsive/index'
import VideoContent from '@/components/core/videoContent'

const Page = () => {
    let pathName = usePathname()
    pathName = pathName.slice(-3)

    const flatpackData = [
        {
            image: 'https://ikeamuseum.com/wp-content/uploads/2021/05/im-1950_flatpack_feed_43_article-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D',
            title: 'Flatpacks',
        },
        {
            image: 'https://ikeamuseum.com/wp-content/uploads/2021/05/im-1950_flatpack_feed_43_game-768x580.png?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D',
            title: 'Flatpacks challenge',
        },
    ];

    return (
        <AboutPage hiddenContent='hidden' px='0' year={pathName}>

            <CardGridResponsive>
                {/* Mobile Device */}
                <div className='md:hidden grid grid-cols-2 gap-3'>
                    <div className='flex flex-col'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/06/im-1950-interiors-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                        <h1 className='font-bold text-sm py-2'>Life at home 1950s</h1>
                    </div>
                    <div className='flex flex-col'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2023/06/1951-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-top object-cover h-[20vh] w-full flex' />
                        <h1 className='font-bold md:text-lg text-sm py-2'>1950s IKEA catalogues</h1>
                    </div>
                </div>

                <div className='flex flex-col h-[40vh]'>
                    <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/fd-1950s-productstories-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={2000} height={2000} className='rounded-xl object-cover md:h-[30vh] h-[50vh] w-full flex' />
                    <h1 className='font-bold md:text-base lg:text-lg text-sm  py-2'>Product Stories 1950s</h1>
                </div>

                {/* Ukuran Tablet Keatas */}
                <div className='hidden md:flex flex-col'>
                    <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/06/im-1950-interiors-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                    <h1 className='font-bold md:text-base lg:text-lg py-2'>Life at home 1950s</h1>
                </div>
                <div className=' hidden md:flex flex-col'>
                    <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2023/06/1951-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-top object-cover h-[30vh] w-full flex' />
                    <h1 className='font-bold md:text-base lg:text-lg py-2'>1950s IKEA catalogues</h1>
                </div>
            </CardGridResponsive>

            <VideoContent
                video='https://ikeamuseum.com/wp-content/uploads/2021/05/IKEA_50s_ENG_MASTER_03_SUB_1.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
                descShort='In the shadow of the Cold War, Sweden experiences a time of self-confidence and progress and Swedes have more money. IKEA opens home furnishing showrooms and what will become the first store in Älmhult.'
                title='The rocking 50s'
                bgColor='bg-cyan-50'
            />

            <section className='w-full mt-10 h-fit flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center w-full mt-20 mb-10 h-fit lg:px-10'>
                    <div className='md:w-[85%] w-[90%] lg:w-[75%] h-fit flex'>
                        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-3'>
                            {flatpackData.map((item, i) => (
                                <div className='flex flex-col h-full' key={i}>
                                    <Image loading="lazy"alt='history' src={item.image} width={1000} height={1000} className='rounded-xl object-cover h-96 w-full flex' />
                                    <h1 className='font-bold text-lg py-2'>{item.title}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='mt-8 w-full h-fit pb-20 pt-32 flex justify-center items-center bg-amber-100 px-0'>
                    <div className='w-full h-full max-w-[70%] flex flex-col justify-center items-center'>
                        <Image loading="lazy"src={'https://ikeamuseum.com/wp-content/uploads/2022/09/im-1950-first-store-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} alt='founder' width={500} height={500} className='w-full border h-fit rounded-xl' />
                        <div className='w-full flex flex-col justify-start'>
                            <h1 className='font-bold text-2xl py-3'>The first IKEA store</h1>
                            <p className=''>When IKEA opened its new furniture showroom in Älmhult in 1958, everyone was there: the county governor, the chairman of the municipal board, along with press and critics from Stockholm, all curious to see the latest move from furniture rebel Ingvar Kamprad...</p>
                        </div>
                    </div>
                </div>
            </section>
        </AboutPage>
    )
}

export default Page
