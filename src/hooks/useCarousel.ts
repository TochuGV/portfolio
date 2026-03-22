import { useEffect, useRef, useState } from "react"

interface Props {
  length: number;
  initialIndex?: number;
  autoPlay?: boolean;
  interval?: number;
}

const useCarousel = ({ length, initialIndex = 0, autoPlay = false, interval = 3000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex)
  const lastInteractionTime = useRef<number>(0)

  const registerInteraction = () => lastInteractionTime.current = Date.now()

  const nextSlide = () => {
    registerInteraction()
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    registerInteraction()
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    registerInteraction()
    setCurrentIndex(index)
  }
  
  useEffect(() => {
    if (!autoPlay || length <= 1) return;

    const timer = setInterval(() => {
      const now = Date.now();
      
      if (now - lastInteractionTime.current < interval) return;
      
      setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, length])

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    setCurrentIndex
  }
}

export default useCarousel