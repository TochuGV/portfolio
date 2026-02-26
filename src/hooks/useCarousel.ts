import { useState } from "react"

interface Props {
  length: number;
  initialIndex?: number;
}

const useCarousel = ({ length, initialIndex = 0 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    setCurrentIndex
  }
}

export default useCarousel