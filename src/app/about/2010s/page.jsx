'use client'
import React from 'react'
import AboutPage from '../page'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import CardArticle from '@/components/core/articleCard'
import CardGridResponsive from '@/components/core/cardContent/cardGridResponsive/index'
import VideoContent from '@/components/core/videoContent'
import CardContent from '@/components/core/cardContent'
import CardBodyImage from '@/components/core/cardContent/cardBodyImage'
import ImageContent from '@/components/core/ImageContent'

const Page = () => {
    let pathName = usePathname()
    pathName = pathName.slice(-3)

    const ikeaData = [
        {
            title: "Democratic Design",
            description: "What is Democratic Design? Is it a road map for product developers, or a communicative tool that brings great ideas to life?",
            imageUrl: "https://ikeamuseum.com/wp-content/uploads/2021/05/fd-democraticdesign-featured.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            title: "Do you speak hot dog?",
            description: "How many brilliant ideas can you get thinking about hot dogs? Quite a lot as it turns out. In the mid-1990s, IKEA realised that...",
            imageUrl: "https://ikeamuseum.com/wp-content/uploads/2021/05/fd-1990-5-sek-hotdog-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            title: "When the eyes came off",
            description: "When Catti Bengtsson’s phone rang one afternoon in May 1997, she had no reason to be concerned. For just over three years...",
            imageUrl: "https://ikeamuseum.com/wp-content/uploads/2024/06/childrens-ikea-teddy-bear-gosse-1990s-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            title: "Children’s IKEA",
            description: "Explore two stories about Children’s IKEA. Children and families with children have always been central to IKEA. But it was in the...",
            imageUrl: "https://ikeamuseum.com/wp-content/uploads/2021/06/fd-childrens-featured.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            title: 'Quality',
            description: 'In September 1964, a sensational article was published in a Swedish interior design magazine, claiming that a 33 kronor',
            imageUrl: 'https://ikeamuseum.com/wp-content/uploads/2021/04/ikea-testing-room-furniture-durability-store-1960s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            title: 'Coloured trees',
            description: 'Is it possible to dye trees while they’re growing? IKEA veteran Jan Ahlsén asked this question and tried to find the answer in',
            imageUrl: 'https://ikeamuseum.com/wp-content/uploads/2024/06/ikea-jan-ahlsen-forest-moss-sweden-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        }
    ];

    const ikeaCollections = [
        {
            "title": "€1?!",
            "description": "What do you do if you are told to do the impossible? Say no? Well, in this particular case it wasn’t an option for Paulina Pajak. She is a Product Developer in the Lighting department.",
            "image_url": "https://ikeamuseum.com/wp-content/uploads/2021/06/im-2010-one-euro-challenge-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            "title": "Tomorrow’s textile",
            "description": "Textile, after wood, is the most extensively used material at IKEA through the ages. It appears in everything from bed linen.",
            "image_url": "https://ikeamuseum.com/wp-content/uploads/2023/11/im-2010-tomorrows-textile-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            "title": "The man who always says yes!",
            "description": "Jan Ahlsén worked as a developer of products and materials at IKEA for 40 years. Here he talks about his successes but mostly.",
            "image_url": "https://ikeamuseum.com/wp-content/uploads/2022/03/im-2010-yes-man-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            "title": "Collaborations",
            "description": "IKEA is, at its core, collaborative. Be it suppliers or consumers, everyone is invited to join in. Collaboration happens when.",
            "image_url": "https://ikeamuseum.com/wp-content/uploads/2021/05/fd-collaboration-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        }
    ]

    return (
        <AboutPage hiddenContent='hidden' px='0' year={pathName}>
            <main className='w-full mt-10 h-fit flex flex-col justify-center items-center'>

                <CardGridResponsive>
                    {/* Mobile Device */}
                    <div className='md:hidden grid grid-cols-2 gap-3'>
                        <div className='flex flex-col'>
                            <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/ikea-life-at-home-bedroom-living-room-2010s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                            <h1 className='font-bold text-sm py-2'>Life at home 1950s</h1>
                        </div>
                        <div className='flex flex-col'>
                            <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2023/06/2014-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-top object-cover h-[20vh] w-full flex' />
                            <h1 className='font-bold md:text-lg text-sm py-2'>1950s IKEA catalogues</h1>
                        </div>
                    </div>

                    <div className='flex flex-col h-[40vh]'>
                        <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/fd-2010s-productstories-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={2000} height={2000} className='rounded-xl object-cover md:h-[30vh] h-[50vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg text-sm  py-2'>Product Stories 1950s</h1>
                    </div>

                    {/* Ukuran Tablet Keatas */}
                    <div className='hidden md:flex flex-col'>
                        <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/ikea-life-at-home-bedroom-living-room-2010s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg py-2'>Life at home 1950s</h1>
                    </div>
                    <div className=' hidden md:flex flex-col'>
                        <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2023/06/2014-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-top object-cover h-[30vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg py-2'>1950s IKEA catalogues</h1>
                    </div>
                </CardGridResponsive>

                <VideoContent
                    video='https://ikeamuseum.com/wp-content/uploads/2021/05/IKEA_10s_ENG_MASTER_04_1.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
                    bgColor='bg-pink-200 text-black'
                    title='The chaotic ’10s'
                    descShort='In a world of urbanisation and housing shortages, financial worries and rising nationalism, IKEA intensifies its efforts to contribute to global sustainability for people and planet.'
                />

                <CardArticle bgColor='text-black'>
                    {ikeaCollections.map((item, i) => (
                        <div key={i} className='flex flex-col'>
                            <Image alt='history' src={item.image_url} width={1000} height={1000} className='rounded-xl h-96 object-cover w-full flex' />
                            <h1 className='font-bold text-lg py-2'>{item.title}</h1>
                            <p className='h-12 scroll-smooth overflow-x-auto text-neutral-500'>{item.description}</p>
                        </div>
                    ))}
                </CardArticle>

            </main>
        </AboutPage>
    )
}

export default Page
