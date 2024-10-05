'use client'
import Image from "next/image";
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { PiArrowBendRightUp } from 'react-icons/pi'
import tester1 from '@/assets/images/tester1.jpg'
import tester2 from '@/assets/images/tester2.webp'
import tester3 from '@/assets/images/tester3.jpg'
import useHomeHooks from "@/features/home/hooks/useHomeHooks";
import photos from "@/assets/images/promoted.webp"


// import Link from "next/link";

export default function Home() {
  const { currentIndex, imagesArray, previousImg, nextImg } = useHomeHooks()

  const produkList = [
    { id: 1, name: 'https://www.ikea.com/global/en/images/PH_198125_c9fe6151f6.jpg?f=sg', caption: 'Workspace solutions' },
    { id: 2, name: 'https://www.ikea.com/global/en/images/Alex_Seb_47362_672add2ea9.jpg?f=g', caption: 'Bedroom Furniture' },
    { id: 3, name: 'https://www.ikea.com/global/en/images/PH_196638_71139bdd52.jpg?f=g', caption: 'Kitchen Solutions' },
    { id: 4, name: 'https://www.ikea.com/global/en/images/PH_198953_7c578823f8.jpg?f=xxxl', caption: 'Bedroom Décor' },
  ]

  const testimonialArray = [
    { id: 1, name: 'Anne', img: tester1, rate: 'This item has truly transformed my office experience. Its ergonomic design is incredibly comfortable and supports my back well, even after hours of sitting. The adjustable height and backrest make it very flexible. Additionally, the fabric quality feels great and is easy to clean. This is a valuable investment for everyday work comfort!' },
    { id: 1, name: 'Anne', img: tester1, rate: 'This item has truly transformed my office experience. Its ergonomic design is incredibly comfortable and supports my back well, even after hours of sitting. The adjustable height and backrest make it very flexible. Additionally, the fabric quality feels great and is easy to clean. This is a valuable investment for everyday work comfort!' },
    { id: 2, name: 'Steve', img: tester2, rate: `This lamp has a simple and modern design, perfect for my workspace. However, I find that the brightness isn’t quite enough for working at night. That said, it is energy-efficient and reasonably priced. It’s ideal for use as an additional light, but I’ll need to look for another lamp for primary lighting.` },
    { id: 2, name: 'Steve', img: tester2, rate: `This lamp has a simple and modern design, perfect for my workspace. However, I find that the brightness isn’t quite enough for working at night. That said, it is energy-efficient and reasonably priced. It’s ideal for use as an additional light, but I’ll need to look for another lamp for primary lighting.` },
    { id: 3, name: 'Mola', img: tester3, rate: `This piece features a classic design that fits perfectly with my office decor. The spacious surface provides ample room for my laptop and documents. Assembly was fairly easy, although I needed help lifting it because it's quite heavy. The only downside is that the drawer is a bit narrow, but overall, I'm satisfied with the quality.` },
    { id: 3, name: 'Mola', img: tester3, rate: `This piece features a classic design that fits perfectly with my office decor. The spacious surface provides ample room for my laptop and documents. Assembly was fairly easy, although I needed help lifting it because it's quite heavy. The only downside is that the drawer is a bit narrow, but overall, I'm satisfied with the quality.` },
  ]

  return (
    <main className='w-full h-fit flex flex-col px-5'>

      {/* Hero Section */}
      <section className="w-full h-full flex justify-center items-center mt-[60px] md:mt-[98px] relative">
        <Image id="slide-image" src={imagesArray[currentIndex].img} alt="banner-brand" className="rounded-xl w-full h-[300px] md:h-[500px] object-cover" />
        <SlArrowLeft onClick={previousImg} className="w-4 md:w-7 h-fit text-black left-2 md:left-3 lg:left-10 absolute cursor-pointer hover:text-white" />
        <SlArrowRight onClick={nextImg} className="w-4 md:w-7 h-fit text-black right-2 md:right-3 lg:right-10 absolute cursor-pointer hover:text-white" />
        <div className="absolute top-[40%]">
          <h1 className="text-sm md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white">{imagesArray[currentIndex].caption}</h1>
          <div className="w-full flex justify-center items-center">
            <button className="flex items-center py-2 px-5 font-bold text-white text-xs md:text-base lg:text-lg xl:text-xl hover:text-neutral-200">Go Shopping
              <BsArrowRightCircleFill className="ml-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Content After Hero Section */}
      <section className='w-full h-fit md:h-[600px] flex flex-col md:flex-row gap-5 pt-5 pb-5'>
        <div className="flex w-full h-full">
          <div className="flex relative w-full h-full">
            <Image src={photos} alt="img-banner" className="w-full h-[60vh] md:h-full object-cover rounded-xl" />
            <button className="absolute flex flex-col bottom-10 left-5 text-white">
              <p className="font-semibold">The BRÄNNBOLL collection</p>
              <h1 className="md:text-3xl lg:text-5xl font-bold">Ready for gaming...</h1>
              <h1 className="md:text-3xl lg:text-5xl font-bold">And everything else!</h1>
            </button>
          </div>
        </div>
        <div className="w-full md:w-6/12 h-full rounded-lg gap-1 flex flex-col">
          <div className="w-full h-full bg-yellow-400 rounded-t-lg flex justify-center items-center">
            <button className='md:text-2xl h-32 text-3xl lg:text-4xl flex items-center font-bold hover:text-neutral-600'>Go Shopping
              <BsArrowRightCircleFill className="ml-5 md:ml-4 lg:ml-10" />
            </button>
          </div>
          <button className="w-full h-16 md:h-32 bg-yellow-400 hover:bg-yellow-200 rounded-b-lg text-lg flex justify-start pl-10 items-center">
            source: <span className='font-bold ml-1'>IKEA.com</span> <PiArrowBendRightUp />
          </button>
        </div>
      </section>

      {/* Product */}
      <section className="flex flex-col w-full justify-center h-fit pt-5">
        {/* List Product */}
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-5 h-fit mb-10">
          {produkList.map((item, i) => (
            <div className="w-full relative" key={i}>
              <Image src={item.name} width={500} height={500} alt="Produk list" className="h-[40vh] md:h-[60vh] w-full object-cover rounded-xl" />
              <h1 className="font-semibold text-sm">{item.caption}</h1>
              <button className="font-bold text-base md:text-2xl hover:text-neutral-600">Learn More...</button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          <div className="h-[80vh] w-full relative flex">
            <Image width={500} height={500} src='https://www.ikea.com/global/en/images/PH_199178_7298adbed8.jpg?f=xxxl' alt="produk-img" className="w-full h-full object-cover rounded-xl" />
            <p className="absolute flex bottom-20 pl-5 text-white font-semibold text-base md:text-lg">
              New reasons to love rattan
            </p>
            <h1 className="font-bold text-2xl md:text-3xl bottom-10 pl-5 text-white absolute flex">
              Woven beauties
            </h1>
          </div>
          <div className="h-[80vh] w-full relative flex">
            <Image width={500} height={500} src='https://www.ikea.com/global/en/images/Bedroom_1971_1b40a9c63c.jpg?f=xxxl' alt="produk-img" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute flex pl-5 bottom-10 flex-col">
              <p className="text-white font-semibold text-base md:text-lg">
                New reasons to love rattan
              </p>
              <h1 className="font-bold text-2xl md:text-2xl max-w-[450px] text-white">
                IKEA bedrooms through the years
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="w-full h-fit pt-2">
        <div className="pt-10 border-t px-2 lg:px-10">
          <h1 className="text-xl md:text-4xl mb-10 font-bold border-neutral-500">About Us & History</h1>
          <p className="w-full lg:max-w-[68vw] mb-10">What started as a tiny mail order company in rural Sweden has now become a global home furnishing brand that brings affordability, design and comfort to people all over the world. We may have come a long way since our humble beginnings, but our vision remains the same: to create a better everyday life for the many people. Here you can explore the IKEA story and learn more about our heritage and the events that shaped us.</p>

        </div>
        <div className="w-full h-fit md:h-fit flex flex-col gap-5 lg:gap-0 md:flex md:flex-row">
          <div className="w-full md:w-1/2 lg:w-6/12 h-full flex flex-col pt-2 md:pt-10 px-2 lg:px-12">
            <h1 className="text-lg md:text-2xl font-bold mb-5">From humble origins to global brand – a brief history of IKEA</h1>
            <p className="w-full md:max-w-[850%] text-sm md:text-base">The IKEA story began in the Swedish town of Älmhult in the 1940s, with an enterprising boy who hoped to improve the lives of people everywhere. Here you follow the development of IKEA, decade for decade.</p>
            <button className="border text-xs rounded-full mb-5 md:mb-0 px-1 py-2 mt-5 md:mt-10 border-black hover:border">Learn more about the history of IKEA</button>
          </div>
          <div className="w-full md:w-1/2 lg:w-full h-full">
            <Image width={500} height={500} src='https://www.ikea.com/ext/ingkadam/m/558f842846a6fa1b/original/PX000263-crop002.jpg?f=m' alt="about-section" className="w-full md:w-fit lg:w-full h-[70vh] object-left object-cover" />
          </div>
        </div>
        <div className="w-full flex mt-10 px-2 lg:px-10">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Image width={500} height={500} src='https://www.ikea.com/ext/ingkadam/m/c391306500d28d8/original/PE117762-crop001.jpg?f=m' alt="about-section" className="w-full h-[80vh] object-cover" />
            </div>
            <div className="flex flex-col lg:pl-6 justify-center w-full">
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-5">The flatpack revolution begins</h1>
              <p>High costs and damage rates when transporting furniture via mail order were constant thorns in Ingvar’s side. Although flatpack furniture already existed, it hadn’t really taken off in Sweden yet. In 1953, IKEA adopted the flatpack. Self-assembly products proved popular and to be the solution to those costly transportation problems.</p>
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-base md:text-xl lg:text-xl font-bold pt-10">
                  &quot; Most things still remain to be done. A glorious future! &quot;
                </h1>
                <p className="flex flex-col justify-start w-full lg:px-7 pt-6 font-bold">- Ingvar Kamprad
                  <span className="font-normal">IKEA founder</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className='w-full h-fit p-5 bg-slate-300 rounded-xl mt-10 flex justify-center items-center'>
        <div className="w-full h-full flex flex-col lg:flex-row lg:flex">
          <div className="w-full lg:w-7/12 flex flex-col items-center justify-center pb-5 md:pb-10 lg:pb-0">
            <h1 className="font-bold text-lg md:text-xl lg:text-4xl xl:text-5xl ">Testimonial</h1>
            <h1 className="font-semibold xl:pl-2 md:text-base lg:text-lg xl:text-xl">Share experience with us</h1>
          </div>
          <div className="w-full h-[400px] p-5 flex gap-5 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 w-full">
              {testimonialArray.map((item, i) => (
                <div className="w-full bg-white h-fit px-5 pb-5" key={i}>
                  <div className="w-full pt-3 flex items-center flex-row gap-5 mb-3">
                    <Image width={500} height={500} src={item.img} alt="" className="w-10 h-10 rounded-full object-cover" />
                    <h1 className="font-bold">{item.name}</h1>
                  </div>
                  <div className="w-full h-fit md:h-52 flex justify-center items-center">
                    <h1 className="text-sm text-justify">{item.rate}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
