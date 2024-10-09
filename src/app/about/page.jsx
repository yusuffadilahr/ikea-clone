import React from 'react'
import CaptionAboutUs from '@/features/about/components/captionAboutUs'
import DataHistory from '@/features/about/components/dataHistory'
import DescriptionHistory from '@/features/about/components/descriptionAbout'
import TeamComponents from '@/components/core/teamComponents'

const AboutPage = ({ children, hidden = 'flex flex-col', hiddenContent = 'block', px = 'px-5', year, pxSelect }) => {


    return (
        <>
            <main className={`w-full h-fit flex flex-col ${px} mt-14 bg-white text-black`}>

                <section className='w-full h-fit flex-col justify-center flex'>
                    <CaptionAboutUs year={year} />
                    <div className='w-full justify-center items-center h-fit flex flex-col pt-10'>
                        <DataHistory pxSelect={pxSelect} />
                        {children}
                    </div>
                </section>
                <DescriptionHistory hiddenContent={hiddenContent} />
                <TeamComponents hidden={hidden} />

            </main>
        </>
    )
}

export default AboutPage
