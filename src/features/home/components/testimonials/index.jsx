import Image from 'next/image'
import React from 'react'
import tester1 from '@/assets/images/tester1.jpg'
import tester2 from '@/assets/images/tester2.webp'
import tester3 from '@/assets/images/tester3.jpg'

const Testimonial = () => {
    const testimonialArray = [
        { id: 1, name: 'Anne', img: tester1, rate: 'This item has truly transformed my office experience. Its ergonomic design is incredibly comfortable and supports my back well, even after hours of sitting. The adjustable height and backrest make it very flexible. Additionally, the fabric quality feels great and is easy to clean. This is a valuable investment for everyday work comfort!' },
        { id: 1, name: 'Anne', img: tester1, rate: 'This item has truly transformed my office experience. Its ergonomic design is incredibly comfortable and supports my back well, even after hours of sitting. The adjustable height and backrest make it very flexible. Additionally, the fabric quality feels great and is easy to clean. This is a valuable investment for everyday work comfort!' },
        { id: 2, name: 'Steve', img: tester2, rate: `This lamp has a simple and modern design, perfect for my workspace. However, I find that the brightness isn’t quite enough for working at night. That said, it is energy-efficient and reasonably priced. It’s ideal for use as an additional light, but I’ll need to look for another lamp for primary lighting.` },
        { id: 2, name: 'Steve', img: tester2, rate: `This lamp has a simple and modern design, perfect for my workspace. However, I find that the brightness isn’t quite enough for working at night. That said, it is energy-efficient and reasonably priced. It’s ideal for use as an additional light, but I’ll need to look for another lamp for primary lighting.` },
        { id: 3, name: 'Mola', img: tester3, rate: `This piece features a classic design that fits perfectly with my office decor. The spacious surface provides ample room for my laptop and documents. Assembly was fairly easy, although I needed help lifting it because it's quite heavy. The only downside is that the drawer is a bit narrow, but overall, I'm satisfied with the quality.` },
        { id: 3, name: 'Mola', img: tester3, rate: `This piece features a classic design that fits perfectly with my office decor. The spacious surface provides ample room for my laptop and documents. Assembly was fairly easy, although I needed help lifting it because it's quite heavy. The only downside is that the drawer is a bit narrow, but overall, I'm satisfied with the quality.` },
    ]
    return (
        <section className='w-full h-fit p-5 bg-slate-300 text-black rounded-xl mt-10 flex justify-center items-center'>
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
    )
}

export default Testimonial
