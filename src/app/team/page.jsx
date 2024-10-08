import CardContent from '@/components/core/cardContent'
import CardBodyImage from '@/components/core/cardContent/cardBodyImage'
import Image from 'next/image'
import React from 'react'


const onFetchData = async () => {
    try {
        let res = await fetch('https://randomuser.me/api/?results=6', {
            cache: 'force-cache'
        })

        res = await res.json()

        const response = res.results
        return response
    } catch (error) {
        console.log(error)
    }
}

const Page = async () => {
    const dataUser = await onFetchData()

    const titleWork = [
        {
            title: "Software Engineer",
            company: "Tech Solutions",
            year: 2022,
            description: "Developed and maintained web applications using JavaScript and React."
        },
        {
            title: "Data Analyst",
            company: "Data Insights",
            year: 2021,
            description: "Analyzed data trends and provided actionable insights using Python and SQL."
        },
        {
            title: "Project Manager",
            company: "Business Innovations",
            year: 2020,
            description: "Led cross-functional teams to deliver projects on time and within budget."
        },
        {
            title: "UI/UX Designer",
            company: "Creative Minds",
            year: 2019,
            description: "Designed user interfaces and experiences for mobile and web applications."
        },
        {
            title: "DevOps Engineer",
            company: "Cloud Solutions",
            year: 2023,
            description: "Implemented CI/CD pipelines and managed cloud infrastructure."
        },
        {
            title: "Marketing Specialist",
            company: "Brand Boosters",
            year: 2021,
            description: "Developed marketing strategies and executed campaigns to enhance brand awareness."
        }
    ];

    return (
        <main className='w-full h-fit md:pt-20 pt-0 lg:pt-28 flex flex-col justify-center bg-white text-black'>
            <section className='w-full h-fit'>
                <Image loading="lazy" alt='team' className='w-full h-[60vh] object-cover' src={'https://www.inter.ikea.com/-/media/interikea/managementstructure_jan_interikeacom_banner_ph180523-0033bbab/managementstructure_jan_interikeacom_banner_ph180523-0033bbab-desktop-banner-image?rev=bdb2eb41e1bc4090b0804e3329b89478'} width={5000} height={5000} />
            </section>
            <section className='w-full pt-10 flex h-fit justify-center lg:px-44'>
                <div className='w-full h-full flex justify-center flex-col items-center text-justify'>
                    <h1 className='lg:max-w-[70%] max-w-[95%] text-base md:text-2xl lg:text-4xl font-bold pb-5'>Meet the Inter IKEA Group management team</h1>
                    <p className='max-w-[95%] lg:max-w-[70%] text-sm md:text-base lg:text-xl py-5'>The <span className='font-bold'>Inter IKEA Group Management Team</span> takes holistic decisions affecting all Inter IKEA Group entities. They take specific responsibility for transforming IKEA and delivering to the ambitions described in the IKEA Direction as well as making sure the franchise offer comes to life.</p>
                    <p className='max-w-[95%] lg:max-w-[70%] text-sm md:text-base lg:text-xl'>This responsibility secures that the critical business development and innovation portfolios including digital project portfolios for IKEA are planned and executed in line with the IKEA Direction and connected strategies.</p>
                    <div className='flex justify-start w-full max-w-[95%] lg:max-w-[70%] text-xl pt-10'>
                        <p className='font-bold text-sm md:text-base lg:text-xl'>The members of the Inter IKEA Group management team are:</p>
                    </div>
                </div>
            </section>
            <section className='w-full h-fit flex justify-center'>
                <CardContent grid='grid-cols-3 md:px-5 lg:px-24' mb='2'>
                    {dataUser.map((item, i) => (
                        <CardBodyImage descShort={titleWork[i].title} rounded='rounded-none' src={item.picture.large} caption={`${item.name.title} ${item.name.first}`} height='h-[70vh]' heightContainer='h-[70vh]' key={i} />
                    ))}
                </CardContent>
            </section>
        </main>
    )
}

export default Page
