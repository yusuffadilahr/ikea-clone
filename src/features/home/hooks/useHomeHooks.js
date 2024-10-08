import { useEffect, useState } from "react";
import slide1 from '@/assets/images/slide1.png'
import slide2 from '@/assets/images/kasur.webp'

const useHomeHooks = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const imagesArray = [
      { id: 1, caption: 'A world of inspiration for your home.', img: slide1 },
      { id: 2, caption: 'Inspiration for every room.', img: slide2 }
    ]
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(currentIndex === imagesArray.length - 1 ? 0 : currentIndex + 1)
      }, 3000)
  
      return () => clearInterval(interval)
    }, [imagesArray])
  
    const previousImg = () => {
      const previous = currentIndex === 0 ? imagesArray.length - 1 : currentIndex - 1
      setCurrentIndex(previous)
    }
  
    const nextImg = () => {
      const next = currentIndex === imagesArray.length - 1 ? 0 : currentIndex + 1
      setCurrentIndex(next)
    }
  return {
    currentIndex, setCurrentIndex,
    imagesArray, previousImg, nextImg
  }
}

export default useHomeHooks
