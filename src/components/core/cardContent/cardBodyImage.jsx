import Image from 'next/image'
import React from 'react'

const CardBodyImage = ({ descShort, height = 'h-[50vh]', heightContainer='h-[50vh]', rounded='rounded-xl', caption, src = 'https://ikeamuseum.com/wp-content/uploads/2021/04/aerial-photo-ikea-kungens-kurva-stockholm-sweden-1960s-768x432.jpg?sv=2022-11-02&ss=bf&srt=o&sp=rwact&se=2032-07-19T20:53:53Z&st=2023-07-19T00:53:53Z&spr=https,http&sig=CbW5rmYp6FrCBT77fuGZVaQIyQ6kOS0Coe6AbA3prrw%3D' }) => {
    return (
        <div className={`flex flex-col relative md:${heightContainer} h-[38vh]`}>
            <Image loading="lazy" alt='history' src={src} width={1000} height={1000} className={`${rounded} h-[38vh] md:${height} object-cover w-full flex`} />
            <div className='absolute bottom-5 text-white left-5 '>
                <h1 className='font-bold text-xl md:text-3xl text-white'>{caption}</h1>
                <p className='text-white text-sm md:text-base'>{descShort}</p>
            </div>
        </div>
    )
}

export default CardBodyImage
