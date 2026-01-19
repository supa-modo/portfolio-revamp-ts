import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface ImageCarouselProps {
  images: string[];
  projectName: string;
  autoplayInterval?: number; // in milliseconds
}

export const ImageCarousel = ({
  images,
  projectName,
  autoplayInterval = 5000,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  // Navigate to next image
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Navigate to previous image
  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Go to specific image
  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle autoplay
  useEffect(() => {
    if (images.length <= 1 || isPaused) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, autoplayInterval);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentIndex, isPaused, images.length, autoplayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevImage();
        setIsPaused(true);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextImage();
        setIsPaused(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevImage, nextImage]);

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }

    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-secondary-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main Image with Enhanced Animations */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${projectName} - Image ${currentIndex + 1}`}
          className="w-full h-full object-contain"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ 
            duration: 1, 
            ease: [0.25, 0.46, 0.45, 0.94], // Smooth ease-out curve
            opacity: { duration: 0.7 },
            scale: { duration: 1 }
          }}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={() => {
              prevImage();
              setIsPaused(true);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-900/80 backdrop-blur-sm border border-secondary-700/30 flex items-center justify-center text-white hover:bg-primary-500/20 hover:border-primary-400/30 transition-all duration-300 z-10"
            aria-label="Previous image"
          >
            <HiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => {
              nextImage();
              setIsPaused(true);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-900/80 backdrop-blur-sm border border-secondary-700/30 flex items-center justify-center text-white hover:bg-primary-500/20 hover:border-primary-400/30 transition-all duration-300 z-10"
            aria-label="Next image"
          >
            <HiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-secondary-900/80 backdrop-blur-sm text-xs md:text-sm text-white px-3 py-1.5 rounded-full border border-secondary-700/30 z-10">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Dot Indicators - Positioned higher to avoid overlap with project name */}
          <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToImage(index);
                  setIsPaused(true);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-primary-500"
                    : "w-2 h-2 bg-secondary-600 hover:bg-secondary-500"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
