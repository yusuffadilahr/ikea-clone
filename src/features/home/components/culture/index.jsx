import Image from 'next/image'
import React from 'react'

const CultureComponent = () => {
    return (
        <section className="w-full h-fit pt-2 text-black">
            <div className="pt-10 px-2 lg:px-10">
                <h1 className="text-xl md:text-4xl mb-10 font-bold border-neutral-500">Culture & Values</h1>
                <p className="w-full lg:max-w-[68vw] mb-10">IKEA culture reflects Swedish roots coming from Småland in southern Sweden. In Sweden, from picturesque fishing villages to endless forests, nature plays an important role in everyday life. People living here are hard-working, down-to-earth, help each other and live in a close contact with nature around. These aspects are translated into IKEA values which form the basics of IKEA culture.</p>

            </div>
            <div className="w-full h-fit md:h-fit flex flex-col gap-5 lg:gap-0 md:flex md:flex-row">
                <div className="w-full md:w-1/2 lg:w-6/12 h-full text-justify flex flex-col pt-2 md:pt-10 px-2 lg:px-12">
                    <h1 className="text-lg md:text-2xl font-bold mb-5">Every individual has something valuable to offer</h1>
                    <p className="w-full md:max-w-[850%] text-sm md:text-base">Were a diverse group of down-to-earth, straightforward people with a passion for home furnishing. We come from all over the world, but we share an inspiring vision: “to create a better everyday life for the many people”. How we realize this vision is based on our shared humanistic values. These values guide our work and build our inclusive, open and honest culture.</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-full h-full">
                    <Image loading="lazy" width={500} height={500} src='https://www.ikea.com/images/f7/9b/f79be0aa0790f82d1bf0b49b2d9debc6.jpg?f=l' alt="about-section" className="w-full md:w-fit lg:pr-10 lg:w-full h-[70vh] object-left object-cover" />
                </div>
            </div>
            <div className="w-full flex mt-10 px-2 lg:px-10">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <Image loading="lazy" width={500} height={500} src='https://www.ikea.com/images/18/5e/185e4979432a01cb831962fba1f7cf80.jpg?f=l' alt="about-section" className="w-full h-[80vh] object-cover" />
                    </div>
                    <div className="flex flex-col lg:px-6 justify-center w-full">
                        <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-5">Equality Works Better</h1>
                        <p>We believe gender equality is a human right. Our ambition is to reach gender equality at IKEA Group, which goes beyond a 50/50 gender balance in all levels and positions. Gender equality is also about creating an inclusive culture where all genders are valued for their unique contributions.
                            That is why we have been working with the gender agenda for over a decade. We are proud to be part of the first UN high-level panel on Women Economic Empowerment to help unlock potential for women to fully participate in the economy and achieve financial independence.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CultureComponent
