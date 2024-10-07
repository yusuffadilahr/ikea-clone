import Image from 'next/image'
import React from 'react'

const ImageContent = ({ src, title, descShort, bgColor='bg-red-900' }) => {
    return (
        <div className={`mt-8 w-full h-fit pb-20 pt-32 flex justify-center items-center ${bgColor} px-0`}>
            <div className='w-full h-full max-w-[70%] flex flex-col justify-center items-center'>
                <Image loading="lazy" src={src} alt='founder' width={500} height={500} className='w-full border h-fit rounded-xl' />
                <div className='w-full flex flex-col justify-start'>
                    <h1 className='font-bold text-2xl py-3'>{title}</h1>
                    <p className=''>{descShort}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageContent
