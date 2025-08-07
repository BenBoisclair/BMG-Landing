import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../i18n/i18n";
import DotIndicator from "./DotIndicator";
import { showcaseData } from "../data/showcaseData";

export default function Showcase() {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !ready) {
    return (
      <section className="w-full bg-gradient-to-r from-primary via-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-white text-3xl md:text-4xl font-bold">
              Loading...
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentCategoryData = showcaseData[activeCategory];
  const currentItem = currentCategoryData.items[activeItem];
  
  const getItemTitle = (categoryKey: string, itemId: string) => {
    return t(`showcaseItems.${categoryKey}.${itemId}.title`, { defaultValue: itemId });
  };
  
  const getItemLocation = (categoryKey: string, itemId: string) => {
    return t(`showcaseItems.${categoryKey}.${itemId}.location`, { defaultValue: '' });
  };
  
  const getItemDescription = (categoryKey: string, itemId: string) => {
    return t(`showcaseItems.${categoryKey}.${itemId}.description`, { defaultValue: '' });
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentItem.thumbnails.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentItem.thumbnails.length - 1 : prev - 1
    );
  };

  const handleCategoryChange = (categoryIndex: number) => {
    setActiveCategory(categoryIndex);
    setActiveItem(0);
    setCurrentImageIndex(0);
  };

  const handleItemChange = (itemIndex: number) => {
    setActiveItem(itemIndex);
    setCurrentImageIndex(0);
  };

  // Get current category label for display
  const categories = [
    { key: "religious", label: t("showcase.categories.religious") },
    { key: "portraits", label: t("showcase.categories.portraits") },
    { key: "architecture", label: t("showcase.categories.architecture") },
    { key: "sculpture", label: t("showcase.categories.sculpture") },
    { key: "furniture", label: t("showcase.categories.furniture") },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-primary via-primary to-secondary py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            {t("showcase.title")}
          </h2>
          <h3 className="text-white text-xl md:text-3xl font-medium">
            {t("showcase.subtitle")}
          </h3>
        </div>

        {/* Main Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
            <div className="flex flex-wrap">
              {categories.map((category, index) => (
                <button
                  key={category.key}
                  onClick={() => handleCategoryChange(index)}
                  className={`px-6 py-3 rounded-full text-sm cursor-pointer font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === index
                      ? "bg-secondary text-white shadow-lg"
                      : "text-white hover:bg-white/20"
                  }`}>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-category Navigation Tabs */}
        {currentCategoryData.items.length > 1 && (
          <div className="flex flex-wrap justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1">
              <div className="flex flex-wrap gap-1">
                {currentCategoryData.items.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleItemChange(index)}
                    className={`px-4 py-2 rounded-md text-xs cursor-pointer font-medium transition-all duration-300 whitespace-nowrap max-w-48 truncate ${
                      activeItem === index
                        ? "bg-white/20 text-white shadow-md"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}>
                    {getItemTitle(currentCategoryData.key, item.id)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6 order-2 lg:order-1">
            <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
              {categories[activeCategory].label}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              {getItemTitle(currentCategoryData.key, currentItem.id)}
            </h3>
            <h4 className="text-lg md:text-xl text-white/80 font-medium">
              {getItemLocation(currentCategoryData.key, currentItem.id)}
            </h4>
            <p className="text-white/90 leading-relaxed text-base">
              {getItemDescription(currentCategoryData.key, currentItem.id)}
            </p>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 mt-8">
              {currentItem.thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                    currentImageIndex === index
                      ? "ring-2 ring-white scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}>
                  <img
                    src={thumb.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Image Display */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentItem.thumbnails[currentImageIndex].src}
                alt={getItemTitle(currentCategoryData.key, currentItem.id)}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 cursor-pointer">
                <FaChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 cursor-pointer">
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4">
              <DotIndicator
                total={currentItem.thumbnails.length}
                currentIndex={currentImageIndex}
                onDotClick={setCurrentImageIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
