import React, { useState, useEffect } from "react";
import DotIndicator from './DotIndicator';

// Import all hero images
import hero1 from "../assets/Hero/hero_1.jpg";
import hero2 from "../assets/Hero/hero_2.jpg";
import hero3 from "../assets/Hero/hero_3.jpg";
import hero4 from "../assets/Hero/hero_4.jpg";
import hero5 from "../assets/Hero/hero_5.jpg";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: hero1, alt: "Hero slide 1" },
    { id: 2, image: hero2, alt: "Hero slide 2" },
    { id: 3, image: hero3, alt: "Hero slide 3" },
    { id: 4, image: hero4, alt: "Hero slide 4" },
    { id: 5, image: hero5, alt: "Hero slide 5" },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
            <img
              src={slide.image.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <DotIndicator
          total={slides.length}
          currentIndex={currentSlide}
          onDotClick={goToSlide}
        />
      </div>
    </section>
  );
};

export default Hero;
