'use client'
import React from 'react'
import AboutPage from '../page'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import CardContent from '@/components/core/cardContent'
import CardBodyVideo from '@/components/core/cardContent/cardBodyVideo'
import CardBodyImage from '@/components/core/cardContent/cardBodyImage'

const Page = () => {
    let pathName = usePathname()
    pathName = pathName.slice(-3)
    console.log(pathName)

    const historyData = [
        {
            id: 1,
            title: 'Cześć, Polsko!',
            description: 'Swedish manufacturers did not have the capacity to meet Ingvar Kamprad’s demand. And a lot of the Swedish...',
            imageUrl: 'https://ikeamuseum.com/wp-content/uploads/2021/06/im-1960-czesc-polsko-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            id: 2,
            title: 'First store abroad',
            description: 'IKEA went international and opened a store in Norway. But how did that decision come about? Through a...',
            imageUrl: 'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/06/im-1960-first-store-abroad-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            id: 3,
            title: 'Dear Brita!',
            description: 'At the end of the 1950s, the IKEA catalogues looked completely different to the later editions, with their styled home...',
            imageUrl: 'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2022/09/im-1960-roomsettingsbrita-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            id: 4,
            title: 'Quality',
            description: 'In September 1964, a sensational article was published in a Swedish interior design magazine, claiming that a 33...',
            imageUrl: 'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/04/ikea-testing-room-furniture-durability-store-1960s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            id: 5,
            title: 'More than a low price',
            description: 'IKEA is a balancing act between seemingly conflicting ambitions. Sales machine or inspiration? Business or...',
            imageUrl: 'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/05/fd-morethanalowprice-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            id: 6,
            title: 'Ingvar in America',
            description: 'In the early 1960s, Ingvar Kamprad started planning for further expansion of IKEA in Scandinavia and the wider world...',
            imageUrl: 'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/06/im-1960-ingvar-in-america-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        }
    ];

    const mediaData = [
        {
            id: 1,
            src: 'https://ikeamuseum.com/wp-content/uploads/2021/05/fd-1960s-productstories-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D',
            alt: 'Product Stories 1950s',
            title: 'Product Stories 1950s',
            width: 2000,
            height: 2000,
        },
        {
            id: 2,
            src: 'https://ikeamuseum.com/wp-content/uploads/2021/06/im-1960-interiors-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D',
            alt: 'Life at home 1950s',
            title: 'Life at home 1950s',
            width: 1000,
            height: 1000,
        },
        {
            id: 3,
            src: 'https://ikeamuseum.com/wp-content/uploads/2023/06/1960-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D',
            alt: '1950s IKEA catalogues',
            title: '1950s IKEA catalogues',
            width: 1000,
            height: 1000,
        },
    ];

    const ikeaImages = [
        {
            title: "IKEA in Stockholm",
            description: "A king, a fire, and a brand new IKEA.",
            src: "https://ikeamuseum.com/wp-content/uploads/2021/04/aerial-photo-ikea-kungens-kurva-stockholm-sweden-1960s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            title: "Textile Revolution",
            description: "Hanging on by a thread.",
            src: "https://ikeamuseum.com/wp-content/uploads/2023/03/ikea-textil-tyg-overkast-monster-daisy-1974-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            title: "Textiles at IKEA 1965–1984",
            description: "That’s not terribly ugly.",
            src: "https://ikeamuseum.com/wp-content/uploads/2023/03/im-1960-textiles-at-ikea-1965-1984-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        }
    ];

    return (
        <AboutPage hiddenContent='hidden' px='0' year={pathName}>
            <main className='w-full mt-10 h-fit flex flex-col justify-center items-center'>

                <section className='flex justify-center items-center w-full mt-10 mb-10 h-fit lg:px-10'>
                    <div className='w-[75%] h-fit flex'>
                        <div className='grid grid-cols-3 w-full gap-3'>
                            {mediaData.map((item, i) => (
                                <div key={i} className='flex flex-col h-[40vh]'>
                                    <Image alt={item.alt} src={item.src} width={item.width} height={item.height} className='rounded-xl object-cover w-full flex' />
                                    <h1 className='font-bold text-lg py-2'>{item.title}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='mt-8 w-full h-fit pb-20 pt-32 flex justify-center items-center bg-purple-100 px-0'>
                    <div className='w-full h-full max-w-[70%] flex flex-col justify-center items-center'>
                        <video autoPlay muted loop playsInline className='w-full border h-fit rounded-xl'>
                            <source src='https://ikeamuseum.com/wp-content/uploads/2021/05/IKEA_60s_ENG_MASTER_03_SUB_1.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D' type='video/mp4' />
                        </video>
                        <div className='text-center w-full flex flex-col justify-center items-center'>
                            <h1 className='font-bold text-2xl py-3'>The political 60s</h1>
                            <p className='max-w-[65%]'>The world is rocked by ideological conflict. In Sweden, social reforms improve living standards. A building boom creates a need for home furnishings and an IKEA flagship store opens in Stockholm.</p>
                        </div>
                    </div>
                </section>

                <CardContent>
                    <CardBodyVideo
                        caption='Revolutionary'
                        descShort='The key to IKEA.'
                        src='https://ikeamuseum.com/wp-content/uploads/2021/05/im-story-of-ikea-feed-allen-key.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D' />

                    {ikeaImages.map((item, i) => (
                        <CardBodyImage
                            key={i}
                            caption={item.title}
                            descShort={item.description}
                            src={item.src} />
                    ))}
                </CardContent>

                <section className='w-full h-fit bg-black flex py-20 px-0 lg:px-10 items-center flex-col'>
                    <div className='lg:w-[75%] w-[95%] h-fit flex'>
                        <div className='grid text-white grid-cols-1 md:grid-cols-3 w-full gap-3'>

                            {/* Mobile Device */}
                            <div className='md:hidden grid grid-cols-2 gap-3'>
                                <div className='flex flex-col'>
                                    <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/ikea-life-at-home-living-room-1970s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                                    <h1 className='font-bold text-sm py-2'>Life at home 1950s</h1>
                                </div>
                                <div className='flex flex-col'>
                                    <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2023/06/1972-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                                    <h1 className='font-bold text-sm py-2'>1950s IKEA catalogues</h1>
                                </div>
                            </div>

                            <div className='flex flex-col h-[40vh]'>
                                <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/fd-1970s-productstories-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={2000} height={2000} className='rounded-xl object-cover md:h-[30vh] h-[50vh] w-full flex' />
                                <h1 className='font-bold md:text-base lg:text-sm text-sm  py-2'>Product Stories 1950s</h1>
                            </div>

                            {/* Ukuran Tablet Keatas */}
                            <div className='hidden md:flex flex-col'>
                                <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/ikea-life-at-home-living-room-1970s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                                <h1 className='font-bold md:text-base lg:text-lg py-2'>Life at home 1950s</h1>
                            </div>
                            <div className=' hidden md:flex flex-col'>
                                <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2023/06/1972-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                                <h1 className='font-bold md:text-base lg:text-lg py-2'>1950s IKEA catalogues</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[75%] h-fit flex md:mt-10 mt-20 lg:mt-20'>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 h-fit gap-10 text-neutral-400'>
                            {/* image */}
                            {historyData.map((history, i) => (
                                <div className='flex justify-start px-4 lg:px-0 flex-row gap-5 items-center w-full' key={i}>
                                    <div className='w-full flex justify-center'>
                                        <Image alt='history' src={history.imageUrl} width={1000} height={1000} className='rounded-xl object-cover w-full lg:w-[70%] h-[20vh] flex' />
                                    </div>
                                    <div className='w-full'>
                                        <h1 className='font-bold text-sm md:text-lg text-white'>{history.title}</h1>
                                        <p className='md:text-base text-xs lg:hidden flex'>{history.description.split('').slice(0, 50).join('')}...</p>
                                        <p className='text-base lg:flex hidden'>{history.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </AboutPage>
    )
}

export default Page
