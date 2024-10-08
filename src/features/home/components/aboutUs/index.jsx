import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
    return (
        <section className="w-full h-fit pt-2 text-black">
            <div className="pt-10 px-2 lg:px-10">
                <h1 className="text-xl md:text-4xl mb-10 font-bold border-neutral-500">About Us & History</h1>
                <p className="w-full lg:max-w-[68vw] mb-10">What started as a tiny mail order company in rural Sweden has now become a global home furnishing brand that brings affordability, design and comfort to people all over the world. We may have come a long way since our humble beginnings, but our vision remains the same: to create a better everyday life for the many people. Here you can explore the IKEA story and learn more about our heritage and the events that shaped us.</p>

            </div>
            <div className="w-full h-fit md:h-fit flex flex-col gap-5 lg:gap-0 md:flex md:flex-row">
                <div className="w-full md:w-1/2 lg:w-6/12 h-full flex flex-col pt-2 md:pt-10 px-2 lg:px-12">
                    <h1 className="text-lg md:text-2xl font-bold mb-5">From humble origins to global brand – a brief history of IKEA</h1>
                    <p className="w-full md:max-w-[850%] text-sm md:text-base">The IKEA story began in the Swedish town of Älmhult in the 1940s, with an enterprising boy who hoped to improve the lives of people everywhere. Here you follow the development of IKEA, decade for decade.</p>
                    <Link href='/about' className="border text-xs text-center rounded-full mb-5 md:mb-0 px-1 py-2 mt-5 md:mt-10 border-black hover:border">Learn more about the history of IKEA</Link>
                </div>
                <div className="w-full md:w-1/2 lg:w-full h-full">
                    <Image loading="lazy"width={500} height={500} src='https://www.ikea.com/ext/ingkadam/m/558f842846a6fa1b/original/PX000263-crop002.jpg?f=m' alt="about-section" className="w-full md:w-fit lg:pr-10 lg:w-full h-[70vh] object-left object-cover" />
                </div>
            </div>
            <div className="w-full flex mt-10 lg:mt-20 px-2 lg:px-10">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <Image loading="lazy"width={500} height={500} src='https://www.ikea.com/ext/ingkadam/m/c391306500d28d8/original/PE117762-crop001.jpg?f=m' alt="about-section" className="w-full h-[80vh] object-cover" />
                    </div>
                    <div className="flex flex-col lg:px-6 justify-center w-full">
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
    )
}

export default AboutUs
