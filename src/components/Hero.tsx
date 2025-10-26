import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useMemo } from "react";
import DotIndicator from "./DotIndicator";
import "../i18n/i18n";

// Import all hero images
import hero1 from "../assets/Hero/hero_1.jpg";
import hero2 from "../assets/Hero/hero_2.jpg";
import hero3 from "../assets/Hero/hero_3.jpg";
import hero4 from "../assets/Hero/hero_4.jpg";
import hero5 from "../assets/Hero/hero_5.jpg";

import queenThai from "../assets/Black_and_White/queen_thai.jpg";
import queenEng from "../assets/Black_and_White/queen_eng.jpg";
import banner_bw from "../assets/Black_and_White/banner.jpg";

const Hero: React.FC = () => {
  const { i18n, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Dynamically select slides based on current language
  const slides = useMemo(() => {
    if (!ready) {
      return [
        { id: 1, image: queenThai, alt: "Hero slide 1" },
        { id: 2, image: banner_bw, alt: "Hero slide 2" },
      ];
    }

    const currentLang = i18n.language || 'th';
    const queenImage = currentLang === 'th' ? queenThai : queenEng;

    return [
      { id: 1, image: queenImage, alt: "Hero slide 1" },
      { id: 2, image: banner_bw, alt: "Hero slide 2" },
    ];
  }, [i18n.language, ready]);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Reset to first slide when language changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [i18n.language]);

  // Show loading state while i18n is initializing to prevent hydration mismatch
  if (!isClient || !ready) {
    return (
      <section className="relative w-full h-[90vh] overflow-hidden bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </section>
    );
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
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
