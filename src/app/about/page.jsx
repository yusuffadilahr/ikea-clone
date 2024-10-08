'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import CultureComponent from '@/features/home/components/culture'
import CaptionAboutUs from '@/features/about/components/captionAboutUs'
import DataHistory from '@/features/about/components/dataHistory'
import DescriptionHistory from '@/features/about/components/descriptionAbout'

const AboutPage = ({ children, hiddenContent = 'block', px = 'px-5', year, pxSelect }) => {
    const router = useRouter()

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

    const setDataRoute = (values) => {
        console.log(values)
        router.push(`/about/${values}`)
        router.refresh()
    }

    return (
        <>
            <main className={`w-full h-fit flex flex-col ${px} mt-14 bg-white text-black`}>

                <section className='w-full h-fit flex-col justify-center flex'>
                    <CaptionAboutUs year={year} />
                    <div className='w-full justify-center items-center h-fit flex flex-col pt-10'>
                        <DataHistory pxSelect={pxSelect} arrayHistory={arrayHistory} onChange={(e) => setDataRoute(e.target.value)} />
                        {children}
                    </div>
                </section>

                <DescriptionHistory hiddenContent={hiddenContent} />

            </main>
        </>
    )
}

export default AboutPage
