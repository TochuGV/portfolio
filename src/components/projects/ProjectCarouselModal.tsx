import useCarousel from "../../hooks/useCarousel"
import { Button, Carousel } from "../ui"

interface Props {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex: number;
}

const ProjectCarouselModal = ({ isOpen, onClose, images, initialIndex }: Props) => {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel({
    length: images.length,
    initialIndex
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-md">
      <Button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-slate-400 hover:text-white transition-colors text-5xl font-light z-50"
      >
        &times;
      </Button>

      <div className="w-full max-w-5xl h-[50vh] md:h-[80vh] relative group">
        <Carousel 
          media={images}
          currentIndex={currentIndex}
          onNext={nextSlide}
          onPrev={prevSlide}
          onGoTo={goToSlide}
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default ProjectCarouselModal