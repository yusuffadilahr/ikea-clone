'use client'

import Image from 'next/image'
import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import useHomeHooks from '../../hooks/useHomeHooks'
import Link from 'next/link'

const HeroSection = () => {
  const { currentIndex, imagesArray, previousImg, nextImg } = useHomeHooks()

    return (
        <section className="w-full h-full flex justify-center bg-white dark:bg-white items-center mt-[60px] md:mt-[98px] relative">
            <Image loading="lazy"id="slide-image" src={imagesArray[currentIndex].img} alt="banner-brand" className="rounded-xl w-full h-[300px] md:h-[500px] object-cover" />
            <SlArrowLeft onClick={previousImg} className="w-4 md:w-7 h-fit text-black left-2 md:left-3 lg:left-10 absolute cursor-pointer hover:text-white" />
            <SlArrowRight onClick={nextImg} className="w-4 md:w-7 h-fit text-black right-2 md:right-3 lg:right-10 absolute cursor-pointer hover:text-white" />
            <div className="absolute top-[40%]">
                <h1 className="text-sm md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white">{imagesArray[currentIndex].caption}</h1>
                <div className="w-full flex justify-center items-center">
                    <Link href='/products' className="flex items-center py-2 px-5 font-bold text-white text-xs md:text-base lg:text-lg xl:text-xl hover:text-neutral-200">Go Shopping
                        <BsArrowRightCircleFill className="ml-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
