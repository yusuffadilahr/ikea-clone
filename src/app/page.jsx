'use client'
import HeroSection from "@/features/home/components/heroSection";
import CampaignSection from "@/features/home/components/campaignSection";
import ProductList from "@/features/home/components/productList";
import AboutUs from "@/features/home/components/aboutUs";
import Testimonial from "@/features/home/components/testimonials";
import VideoContent from "@/components/core/videoContent";


// import Link from "next/link";

export default function Home() {
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

    </main>
  )
}
