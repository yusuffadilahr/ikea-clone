import Image from 'next/image'
import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import photos from '@/assets/images/promoted.webp'
import { PiArrowBendRightUp } from 'react-icons/pi'
import Link from 'next/link'

const CampaignSection = () => {
  return (
    <section className='w-full h-fit md:h-[600px] flex flex-col md:flex-row gap-5 pt-5 pb-5'>
      <div className="flex w-full h-full">
        <div className="flex relative w-full h-full">
          <Image loading="lazy" src={photos} width={1000} height={1000} alt="img-banner" className="w-full h-[60vh] md:h-full object-cover rounded-xl" />
          <button className="absolute flex flex-col bottom-10 left-5 dark:text-white text-white">
            <p className="font-semibold">The BRÄNNBOLL collection</p>
            <h1 className="md:text-3xl lg:text-5xl font-bold">Ready for gaming...</h1>
            <h1 className="md:text-3xl lg:text-5xl font-bold">And everything else!</h1>
          </button>
        </div>
      </div>
      <div className="w-full md:w-6/12 h-full rounded-lg gap-1 flex flex-col">
        <div className="w-full h-full bg-yellow-400 rounded-t-lg flex justify-center items-center">
          <Link href='/products' className='md:text-2xl h-32 text-3xl lg:text-4xl flex items-center font-bold text-black hover:text-neutral-600'>Go Shopping
            <BsArrowRightCircleFill className="ml-5 md:ml-4 lg:ml-10" />
          </Link>
        </div>
        <Link href='https://ikea.com' className="w-full h-16 md:h-32 text-black hover:text-neutral-600 bg-yellow-400 hover:bg-yellow-200 rounded-b-lg text-lg flex justify-start pl-10 items-center">
          source: <span className='font-bold ml-1'>IKEA.com</span> <PiArrowBendRightUp />
        </Link>
      </div>
    </section>
  )
}

export default CampaignSection
