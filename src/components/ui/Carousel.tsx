import useCarousel from "../../hooks/useCarousel";

interface Props {
  media: string[];
}

export const Carousel = ({ media }: Props) => {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(media.length);
  if (!media || media.length === 0) return null;

  return (
    <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-t-xl group">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {media.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain shrink-0"
          />
        ))}
      </div>

      {media.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            &#8592;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            &#8594;
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-500 w-4" : "bg-white/50 w-2"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}