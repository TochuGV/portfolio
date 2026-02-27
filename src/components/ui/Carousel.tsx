interface Props {
  media: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
  objectFit?: 'cover' | 'contain';
}

export const Carousel = ({ media, currentIndex, onNext, onPrev, onGoTo, objectFit = "cover" }: Props) => {
  if (!media || media.length === 0) return null;

  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onPrev();
  };

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onNext();
  };

  const handleDotClick = (index: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (onGoTo) onGoTo(index);
    };
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {media.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Slide ${index + 1}`}
            className={`shrink-0 min-w-full h-full object-center ${
              objectFit === 'contain' ? 'object-contain' : 'object-cover'
            }`}
          />
        ))}
      </div>

      {media.length > 1 && (
        <>
          <button
            onClick={handlePrevClick}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            &#8592;
          </button>

          <button
            onClick={handleNextClick}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            &#8594;
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={handleDotClick(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-500 w-6" : "bg-white/70 w-3 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};