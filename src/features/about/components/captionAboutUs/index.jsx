import React from 'react'

const CaptionAboutUs = ({ year }) => {
    return (
        <div className='flex justify-center h-fit pt-5 md:pt-20 w-full flex-col items-center'>
            <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold'>The Story of IKEA {year}</h1>
            <p className='text-center max-w-[500px] mt-5 text-sm md:text-lg'>Follow the timeline to discover stories on innovation and insights, big mistakes and great ideas.</p>
        </div>
    )
}

export default CaptionAboutUs
