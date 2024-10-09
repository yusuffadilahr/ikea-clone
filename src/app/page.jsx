import HeroSection from "@/features/home/components/heroSection";
import CampaignSection from "@/features/home/components/campaignSection";
import ProductList from "@/features/home/components/productList";
import AboutUs from "@/features/home/components/aboutUs";
import Testimonial from "@/components/core/testimonials";
import VideoContent from "@/components/core/videoContent";
import CultureComponent from "@/components/core/culture";
import ImageContent from "@/components/core/ImageContent";
import TeamComponent from "@/features/home/components/team";


// import Link from "next/link";

export default function Home() {

  return (
    <main className='w-full h-fit flex flex-col px-5 bg-white dark:bg-white'>
      <HeroSection />
      <CampaignSection />
      <ProductList />
      
      {/* <VideoContent
        title='The Tyg collection'
        height="h-[70vh] object-cover"
        bgColor="bg-blue-600 text-white rounded-xl"
        descShort='IKEA pre-cut fabrics are back!'
        video='https://www.ikea.com/global/en/images/Tyg_Starpage_40366c09a3.mp4'
      /> */}

      <AboutUs />
      <ImageContent
        src='https://www.ikea.com/images/culture-and-values-2f0b8e99a3ebdac02764fd6c947ca3d8.jpg?f=xxxl'
        bgColor="bg-yellow-400 rounded-xl"
      />
      <CultureComponent />
      <Testimonial />
      
      <TeamComponent />
      {/* Team Area */}

    </main>
  )
}
