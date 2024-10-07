'use client'
import { useEffect } from "react";
import HeroSection from "@/features/home/components/heroSection";
import CampaignSection from "@/features/home/components/campaignSection";
import ProductList from "@/features/home/components/productList";
import AboutUs from "@/features/home/components/aboutUs";
import Testimonial from "@/features/home/components/testimonials";
import VideoContent from "@/components/core/videoContent";
import { useDispatch, useSelector } from "react-redux";
import CardContent from "@/components/core/cardContent";
import CardBodyImage from "@/components/core/cardContent/cardBodyImage";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { setUserData } from "@/redux/slice/usersSlice";


// import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch()
  const dataUser = useSelector((state) => state.user.users)
  console.log(dataUser)

  const { mutate: userDataFetch } = useMutation({
    mutationFn: async () => {
      const res = await axios.get('https://randomuser.me/api/?results=6')
      const response = res.data.results
      // localStorage.setItem('team', response)
      dispatch(setUserData(response))
      return response
    }
  })

  useEffect(() => {
    userDataFetch()
  }, [])

  return (
    <main className='w-full h-fit flex flex-col px-5 bg-white dark:bg-white'>

      {/* Hero Section */}
      <HeroSection />

      {/* Content After Hero Section */}
      <CampaignSection />

      {/* Product */}
      <ProductList />

      {/* Video Content */}
      <VideoContent
        title='The Tyg collection'
        height="h-[70vh] object-cover"
        bgColor="bg-blue-600 text-white rounded-xl"
        descShort='IKEA pre-cut fabrics are back!'
        video='https://www.ikea.com/global/en/images/Tyg_Starpage_40366c09a3.mp4'
      />

      {/* About Us */}
      <AboutUs />


      {/* Testimonial */}
      <Testimonial />

      {/* Team Area */}
      <section className='w-full h-fit flex flex-col justify-center py-5 pb-14 bg-black mt-5 md:mt-10 lg:mt-14 rounded-xl md:px-5 lg:px-32'>
        <div className='w-full md:px-10 px-3 lg:px-14 py-5'>
          <h1 className='text-base md:text-3xl lg:text-4xl font-bold text-white'>Our Team - <span>IKEA Group management team</span></h1>
          <p className='text-white font-bold lg:text-base md:text-sm text-xs'>The members of the Inter IKEA Group management team are:</p>
        </div>
        <CardContent mt="mt-0" lg="w-full" grid='grid-cols-3 md:px-5' mb='2'>
          {dataUser.map((item, i) => (
            <CardBodyImage rounded='rounded-none' src={item.picture.large} caption={`${item.name.title} ${item.name.first}`} height='h-[70vh]' heightContainer='h-[70vh]' key={i} />
          ))}
        </CardContent>
      </section>

    </main>
  )
}
