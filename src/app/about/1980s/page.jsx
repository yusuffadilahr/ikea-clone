'use client'
import React from 'react'
import AboutPage from '../page'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import CardGridResponsive from '@/components/core/cardContent/cardGridResponsive/index'
import VideoContent from '@/components/core/videoContent'
import CardContent from '@/components/core/cardContent'
import CardBodyImage from '@/components/core/cardContent/cardBodyImage'
import ImageContent from '@/components/core/ImageContent'

const Page = () => {
    let pathName = usePathname()
    pathName = pathName.slice(-3)

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


    return (
        <AboutPage hiddenContent='hidden' px='0' year={pathName}>
            <main className='w-full mt-10 h-fit flex flex-col justify-center items-center'>

                <CardGridResponsive>
                    {/* Mobile Device */}
                    <div className='md:hidden grid grid-cols-2 gap-3'>
                        <div className='flex flex-col'>
                            <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/06/im-1980-interiors-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                            <h1 className='font-bold text-sm py-2'>Life at home 1980s</h1>
                        </div>
                        <div className='flex flex-col'>
                            <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2023/06/1980-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                            <h1 className='font-bold md:text-lg text-sm py-2'>1980s IKEA catalogues</h1>
                        </div>
                    </div>

                    <div className='flex flex-col h-[40vh]'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/05/fd-1980s-productstories-featured-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={2000} height={2000} className='rounded-xl object-cover md:h-[30vh] h-[50vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg text-sm  py-2'>Product Stories 1980s</h1>
                    </div>

                    {/* Ukuran Tablet Keatas */}
                    <div className='hidden md:flex flex-col'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/06/im-1980-interiors-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg py-2'>Life at home 1980s</h1>
                    </div>
                    <div className=' hidden md:flex flex-col'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2023/06/1980-1-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg py-2'>1980s IKEA catalogues</h1>
                    </div>
                </CardGridResponsive>

                <VideoContent
                    video='https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/05/IKEA_80s_ENG_MASTER_03_SUB_1.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
                    bgColor='bg-cyan-50'
                    title='The individualistic 80s'
                    descShort='A decade defined by political activism and discussion around consumerism. A good fit for the unpretentious style of IKEA. Despite the looming oil crisis, the great expansion begins.'
                />

                <CardContent>
                    {stockholmCollection.map((item, i) => (
                        <CardBodyImage key={i} src={item.src} caption={item.title} />
                    ))}
                </CardContent>

                <CardGridResponsive>
                    {/* Mobile Device */}
                    <div className='md:hidden grid grid-cols-2 gap-3'>
                        <div className='flex flex-col'>
                            <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/04/group-photo-ikea-gothenburg-staff-strength-80-1980s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                            <h1 className='font-bold text-sm py-2'>Life at home 1980s</h1>
                        </div>
                        <div className='flex flex-col'>
                            <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2023/12/im-1980-cushion-filling-in-a-tube-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[20vh] w-full flex' />
                            <h1 className='font-bold md:text-lg text-sm py-2'>1980s IKEA catalogues</h1>
                        </div>
                    </div>

                    <div className='flex flex-col h-[40vh]'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/05/ikea-sofa-klippan-red-768x489.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={2000} height={2000} className='rounded-xl object-cover md:h-[30vh] h-[50vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg text-sm  py-2'>Product Stories 1980s</h1>
                    </div>

                    {/* Ukuran Tablet Keatas */}
                    <div className='hidden md:flex flex-col'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/04/group-photo-ikea-gothenburg-staff-strength-80-1980s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg py-2'>Life at home 1980s</h1>
                    </div>
                    <div className=' hidden md:flex flex-col'>
                        <Image loading="lazy"alt='history' src={'https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2023/12/im-1980-cushion-filling-in-a-tube-01-ft-768x576.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'} width={1000} height={1000} className='rounded-xl object-cover h-[30vh] w-full flex' />
                        <h1 className='font-bold md:text-base lg:text-lg py-2'>1980s IKEA catalogues</h1>
                    </div>
                </CardGridResponsive>

                <ImageContent
                    bgColor='bg-yellow-400'
                    src='https://ikeamuseum.com/blobiicsikeamu4941109594/wp-content/uploads/2021/05/80s_ikeaandadvertising.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D'
                    title='IKEA and advertising'
                    descShort='Ever since Ingvar Kamprads first black and white ads for IKEA, the company has had the ability to attract shoppers and talk about its vision, to contribute to a better everyday life for the many people. Ingvar and IKEA were ahead of their time in marketing, both tactically and strategically – just the combination that many experts consider the basic recipe for effective advertising...'
                />


            </main>
        </AboutPage>
    )
}

export default Page
