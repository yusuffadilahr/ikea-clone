'use client'
import React from 'react'
import AboutPage from '../page'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import CardArticle from '@/components/core/articleCard'
import CardGridResponsive from '@/components/core/cardContent/cardGridResponsive/index'

const Page = () => {
    let pathName = usePathname()
    pathName = pathName.slice(-3)

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


    return (
        <AboutPage hidden='hidden' pxSelect='px-5' hiddenContent='hidden' px='0' year={pathName}>
            <main className='w-full md:mt-10 h-fit flex flex-col justify-center items-center'>

                <CardGridResponsive>
                    {/* Mobile Device */}
                    <div className='md:hidden grid grid-cols-2 gap-3'>
                        <div className='flex flex-col'>
                            <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/ikea-life-at-home-living-room-1970s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                            <h1 className='font-bold text-sm py-2'>Life at home 1970s</h1>
                        </div>
                        <div className='flex flex-col'>
                            <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2023/06/1972-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                            <h1 className='font-bold md:text-lg text-sm py-2'>1970s IKEA catalogues</h1>
                        </div>
                    </div>

                    <div className='flex flex-col h-[40vh]'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/fd-1970s-productstories-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={2000} height={2000} className='rounded-xl object-cover md:h-[30vh] h-[50vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg text-sm  py-2'>Product Stories 1970s</h1>
                    </div>

                    {/* Ukuran Tablet Keatas */}
                    <div className='hidden md:flex flex-col'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2021/05/ikea-life-at-home-living-room-1970s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg py-2'>Life at home 1970s</h1>
                    </div>
                    <div className=' hidden md:flex flex-col'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/wp-content/uploads/2023/06/1972-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg py-2'>1970s IKEA catalogues</h1>
                    </div>
                </CardGridResponsive>

                <section className='mt-8 w-full h-fit md:pb-20 md:pt-20 lg:pt-32 pt-10 pb-10 flex justify-center items-center bg-yellow-100 px-0'>
                    <div className='w-full h-full max-w-[96%] md:max-w-[96%] lg:max-w-[70%] flex flex-col justify-center items-center'>
                        <video autoPlay muted loop playsInline className='w-full border h-fit rounded-xl'>
                            <source src='https://ikeamuseum.com/wp-content/uploads/2021/05/IKEA_70s_ENG_MASTER_03_SUB_1.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D' type='video/mp4' />
                        </video>
                        <div className='text-center w-full flex flex-col justify-center items-center'>
                            <h1 className='font-bold text-base md:text-xl lg:text-2xl md:py-3'>The radical 70s</h1>
                            <p className='md:max-w-[65%] text-sm md:text-lg lg:text-xl'>A decade defined by political activism and discussion around consumerism. A good fit for the unpretentious style of IKEA. Despite the looming oil crisis, the great expansion begins.</p>
                        </div>
                    </div>
                </section>
                
                <CardArticle>
                    {ikeaHistory.map((item,i) => (
                        <div className='flex flex-col' key={i}>
                            {item.image ? (
                                <>
                                    <Image loading="lazy"alt='history' src={item.image} width={1000} height={1000} className='rounded-xl h-96 object-cover w-full flex' />
                                    <h1 className='font-bold text-lg py-2'>{item.event}</h1>
                                    <p className='h-12 scroll-smooth overflow-x-auto text-neutral-500'>{item.description}</p>
                                </>
                            ) : (
                                <>
                                    <video autoPlay muted loop playsInline className='rounded-xl h-96 object-cover w-full flex'>
                                        <source src={item.video} type='video/mp4' />
                                    </video>
                                    <h1 className='font-bold text-lg py-2'>{item.event}</h1>
                                    <p className='h-12 scroll-smooth overflow-x-auto text-neutral-500'>{item.description}</p>
                                </>
                            )}
                        </div>
                    ))}
                </CardArticle>
            </main>
        </AboutPage>
    )
}

export default Page
