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

    const ikeaHistory = [
        {
            decade: "1970s",
            event: "Expansion into Japan",
            description: "IKEA decided to take on the Japanese market, seeing similarities between Scandinavian design and Japan's simplicity and wooden furniture.",
            image: "https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2023/12/im-1970-too-big-in-japan-01-ft-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            event: "Corporate Culture",
            detail: "Greeting",
            description: "Customers are greeted with a huge 'Hej!', which reflects IKEA's simple and friendly corporate culture.",
            video: "https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/05/im-story-of-ikea-feed-hej.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            event: "Mistakes",
            detail: "Heaviest Disaster",
            description: "IKEA has made many mistakes, but the heaviest one involved pianos.",
            image: "https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2023/12/im-1970-heaviest-disaster-01-ft-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            event: "Material Focus",
            detail: "Wooden Materials",
            description: "The story of IKEA is closely tied to wooden materials, highlighting the importance of gaining advantages through material choice.",
            image: "https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/05/fd-wood-featured.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        }
    ]

    const stockholmCollection = [
        {
            title: "STOCKHOLM Collection",
            src: "https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/05/ikea-stockholm-collection-bedroom-1990-1-768x489.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            title: "STOCKHOLM 1985 Brochure",
            src: "https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2023/12/im-1985-stockholm-brochure_01-feed-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        }
    ];

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
            name: "IKEA PS Collection",
            year: "1990s",
            description: "In the early 1990s, IKEA began a process to strengthen its identity as a design company. IKEA wanted to get back to its roots."
        , brochureLink: 'https://ikeamuseum.com/wp-content/uploads/2021/05/fd-ikeaps-featured.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
        },
        {
            name: "IKEA PS 1995",
            year: "1995",
            description: "Browse the catalogue for the very first IKEA PS collection, launched in Milan, under the theme of Democratic Design.",
            brochureLink: "https://ikeamuseum.com/wp-content/uploads/2023/12/im-1995-ikea-ps-brochure_01-feed-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            name: "STOCKHOLM 1990",
            year: "1990",
            description: "Five years after the first IKEA STOCKHOLM collection, a broader, updated collection came along: 'More beautiful everyday'.",
            brochureLink: "https://ikeamuseum.com/wp-content/uploads/2023/12/im-1990-stockholm-brochure_01-feed-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        },
        {
            name: "STOCKHOLM 1996",
            year: "1996",
            description: "Browse the folder for the IKEA STOCKHOLM collection 1996, 'Lasting beauty'. More designers had now become involved, taking inspiration from Scandinavian ideals.",
            brochureLink: "https://ikeamuseum.com/wp-content/uploads/2023/12/im-1996-stockholm-brochure_01-feed-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D"
        }
    ];


    return (
        <AboutPage hiddenContent='hidden' px='0' year={pathName}>
            <main className='w-full mt-10 h-fit flex flex-col justify-center items-center'>

                <CardGridResponsive>
                    {/* Mobile Device */}
                    <div className='md:hidden grid grid-cols-2 gap-3'>
                        <div className='flex flex-col'>
                            <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/06/im-1990-interiors-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                            <h1 className='font-bold text-sm py-2'>Life at home 1950s</h1>
                        </div>
                        <div className='flex flex-col'>
                            <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2023/06/1990-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                            <h1 className='font-bold md:text-lg text-sm py-2'>1950s IKEA catalogues</h1>
                        </div>
                    </div>

                    <div className='flex flex-col h-[40vh]'>
                        <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/fd-1990s-productstories-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={2000} height={2000} className='rounded-xl object-cover md:h-[30vh] h-[50vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg text-sm  py-2'>Product Stories 1950s</h1>
                    </div>

                    {/* Ukuran Tablet Keatas */}
                    <div className='hidden md:flex flex-col'>
                        <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/06/im-1990-interiors-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg py-2'>Life at home 1950s</h1>
                    </div>
                    <div className=' hidden md:flex flex-col'>
                        <Image alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2023/06/1990-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg py-2'>1950s IKEA catalogues</h1>
                    </div>
                </CardGridResponsive>

                <VideoContent
                    video='https://ikeamuseum.com/wp-content/uploads/2021/05/IKEA_90s_ENG_MASTER_03_SUB_1.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
                    bgColor='bg-blue-700 text-white'
                    title='The soul searching ’90s'
                    descShort='The yuppie fades away and IKEA struggles with an identity crisis. It’s time to go back to the Scandinavian roots. While becoming a truly global brand, IKEA reclaims its soul.' />

                <CardArticle>
                    {ikeaData.map(item => (
                        <div className='flex flex-col'>
                            <Image alt='history' src={item.imageUrl} width={1000} height={1000} className='rounded-xl h-96 object-cover w-full flex' />
                            <h1 className='font-bold text-lg py-2'>{item.title}</h1>
                            <p className='h-12 scroll-smooth overflow-x-auto text-neutral-500'>{item.description}</p>
                        </div>
                    ))}
                </CardArticle>

                <CardArticle bgColor='bg-black text-white py-20'>
                    {ikeaCollections.map(item => (
                        <div className='flex flex-col'>
                            <Image alt='history' src={item.brochureLink} width={1000} height={1000} className='rounded-xl h-96 object-cover w-full flex' />
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
