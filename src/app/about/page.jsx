import React from 'react'
import CaptionAboutUs from '@/features/about/components/captionAboutUs'
import DataHistory from '@/features/about/components/dataHistory'
import DescriptionHistory from '@/features/about/components/descriptionAbout'
import TeamComponents from '@/components/core/teamComponents'

const AboutPage = ({ children, hiddenContent = 'block', px = 'px-5', year, pxSelect }) => {
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
            <main className={`w-full h-fit flex flex-col ${px} mt-14 bg-white text-black`}>

                <section className='w-full h-fit flex-col justify-center flex'>
                    <CaptionAboutUs year={year} />
                    <div className='w-full justify-center items-center h-fit flex flex-col pt-10'>
                        <DataHistory pxSelect={pxSelect} arrayHistory={arrayHistory} />
                        {children}
                    </div>
                </section>

                <DescriptionHistory hiddenContent={hiddenContent} />

                <TeamComponents />

            </main>
        </>
    )
}

export default AboutPage
