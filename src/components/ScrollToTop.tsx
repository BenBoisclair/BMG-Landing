import { useState, useEffect } from "react";
import { IoChevronUp } from "react-icons/io5";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="cursor-pointer fixed bottom-10 right-10 z-50 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-secondary hover:scale-110 transition-all duration-300 flex items-center justify-center"
      aria-label="Scroll to top">
      <IoChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
