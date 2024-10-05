import React from 'react'

const CardBodyVideo = ({ descShort, caption, src = 'https://ikeamuseum.com/wp-content/uploads/2021/05/im-story-of-ikea-feed-allen-key.mp4?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D' }) => {
    return (
        <div className='h-[38vh] md:h-[50vh] flex flex-col relative'>
            <video autoPlay muted playsInline loop className='w-full md:h-[50vh] h-[38vh] object-cover rounded-xl'>
                <source src={src} />
            </video>
            <div className='absolute bottom-5 left-5'>
                <h1 className='font-bold text-xl md:text-3xl text-white'>{caption}</h1>
                <p className='text-white text-sm md:text-base'>{descShort}</p>
            </div>
        </div>
    )
}

export default CardBodyVideo
