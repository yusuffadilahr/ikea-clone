import React from 'react'

const VideoContent = ({
    video,
    height = 'h-fit',
    bgColor = 'bg-yellow-100',
    title,
    descShort,
    flexRow = ' flex-col'
}) => {
    return (
        <section className={`mt-8 w-full h-fit md:pb-20 md:pt-20 lg:pt-32 pt-10 pb-10 flex justify-center items-center ${bgColor} px-0`}>
            <div className={`w-full h-full max-w-[96%] md:max-w-[96%] lg:max-w-[70%] flex ${flexRow} justify-center items-center`}>
                <video autoPlay muted loop playsInline className={`w-full border ${height} rounded-xl`}>
                    <source src={video} type='video/mp4' />
                </video>
                <div className='text-center w-full flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-base md:text-xl lg:text-2xl md:py-3'>{title}</h1>
                    <p className='md:max-w-[65%] text-sm md:text-lg lg:text-xl'>{descShort}</p>
                </div>
            </div>
        </section>
    )
}

export default VideoContent
