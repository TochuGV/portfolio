import { useEffect, useState } from "react"

interface Props {
  length: number;
  initialIndex?: number;
  autoPlay?: boolean;
  interval?: number;
}

const useCarousel = ({ length, initialIndex = 0, autoPlay = false, interval }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const nextSlide = () => setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1))
  const goToSlide = (index: number) => setCurrentIndex(index)
  
  useEffect(() => {
    if (!autoPlay || length <= 1) return;

    const timer = setInterval(() => {
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