import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import "../i18n/i18n";
import storyImg1 from "../assets/Story/story-imgc-01.png";
import storyImg2 from "../assets/Story/story-imgc-02.png";
import storyTxt1 from "../assets/Story/story-txt01.png";
import storyTxt2 from "../assets/Story/story-txt02.png";
import year30Top from "../assets/Story/30year-top.png";
import bgOurStory from "../assets/Story/bg-ourstory-new.jpg";
import logoTransparent from "../assets/logo-transparent.svg";

export default function Story() {
  const { t } = useTranslation();
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  const elementsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.getAttribute("data-parallax-id");
          if (elementId) {
            setVisibleElements((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(elementId);
              } else {
                // Only remove if scrolling up past the element
                const rect = entry.target.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                // If element is above viewport (scrolled past it going down), keep it visible
                // Only hide if element is below viewport (scrolling back up)
                if (rect.top > viewportHeight) {
                  newSet.delete(elementId);
                }
              }
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "100px 0px -100px 0px",
      }
    );

    // Observe all parallax elements with a slight delay to ensure elements are rendered
    const timeoutId = setTimeout(() => {
      Object.values(elementsRef.current).forEach((element) => {
        if (element) observer.observe(element);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const setElementRef = (id: string) => (el: HTMLDivElement | null) => {
    elementsRef.current[id] = el;
  };

  const getParallaxStyle = (elementId: string, offset: number) => {
    const isVisible = visibleElements.has(elementId);

    return {
      transform: `translateY(${isVisible ? "0px" : `-${offset}px`})`,
      opacity: isVisible ? 1 : 0,
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    };
  };

  return (
    <div className="story-page">
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgOurStory.src})` }}>
        <div className="pt-8 sm:pt-12 lg:pt-16 flex-col justify-center">
          <div className="px-10">
            {/* 30 Years Badge */}
            <div className="flex justify-end mb-4 sm:mb-6">
              <img
                src={year30Top.src}
                alt="30 Years"
                className="h-30 md:h-40 lg:h-60"
              />
            </div>

            <div className="mb-6 lg:-mt-40 -mt-10 md:-mt-30">
              <img
                src={storyImg1.src}
                className="mx-auto h-40 md:h-100 lg:h-140"
              />
            </div>

            {/* Company Logo */}
            <div className="bg-gradient-to-r from-primary to-transparent py-6 sm:py-8 lg:py-10 rounded-lg px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12 lg:-mt-30 flex md:-mt-20 -mt-10 ">
              <img
                src={logoTransparent.src}
                alt="BMG Logo"
                className="h-20 md:h-20 lg:h-35"
              />
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 sm:space-y-12">
            <div
              ref={setElementRef("section1")}
              data-parallax-id="section1"
              className="bg-white/70 p-6 md:p-10 lg:p-30"
              style={getParallaxStyle("section1", 80)}>
              <h5 className="text-base sm:text-lg md:text-xl font-bold text-[#292567] mb-3 sm:mb-4 leading-relaxed">
                {t("story.section1Title")}
              </h5>
              <p className="text-gray-900 leading-relaxed text-sm sm:text-base md:text-lg">
                {t("story.concept")}
              </p>
            </div>

            <div
              ref={setElementRef("storyImg1")}
              data-parallax-id="storyImg1"
              className="text-center px-4"
              style={getParallaxStyle("storyImg1", 60)}>
              <img
                src={storyTxt1.src}
                alt="Story Text 1"
                className="mx-auto max-w-full h-auto"
              />
            </div>

            <div
              ref={setElementRef("section2")}
              data-parallax-id="section2"
              className="bg-white/70 p-6 md:p-10 lg:p-30"
              style={getParallaxStyle("section2", 100)}>
              <h5 className="text-base sm:text-lg md:text-xl font-bold text-[#292567] mb-3 sm:mb-4">
                {t("story.section2Title")}
              </h5>
              <div className="text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                {t("story.section2SubTitle")}
              </div>
              <p className="text-gray-900 leading-relaxed text-sm sm:text-base md:text-lg">
                {t("story.concept")}
              </p>
            </div>

            <div
              ref={setElementRef("storyImg2")}
              data-parallax-id="storyImg2"
              className="text-center px-4"
              style={getParallaxStyle("storyImg2", 70)}>
              <img
                src={storyTxt2.src}
                alt="Story Text 2"
                className="mx-auto max-w-full h-auto"
              />
            </div>

            <div
              ref={setElementRef("section3")}
              data-parallax-id="section3"
              className="bg-white/70 p-6 md:p-10 lg:p-30"
              style={getParallaxStyle("section3", 90)}>
              <p className="text-gray-900 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                {t("story.section3")}
              </p>
              <p className="text-gray-900 leading-relaxed text-sm sm:text-base md:text-lg">
                {t("story.oemServices")}
              </p>
            </div>
          </div>
        </div>
        {/* Vision and Mission Section */}
        <div>
          <div
            ref={setElementRef("bottomLogo")}
            data-parallax-id="bottomLogo"
            className="text-center py-6"
            style={getParallaxStyle("bottomLogo", 50)}>
            <img
              src={storyImg2.src}
              alt="BMG Logo Bottom"
              className="mx-auto h-25 md:h-50 lg:h-80"
            />
          </div>
          <div className="bg-white/70 p-6 md:p-10 lg:p-30 space-y-12">
            {/* Vision */}
            <div
              ref={setElementRef("vision")}
              data-parallax-id="vision"
              style={getParallaxStyle("vision", 120)}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#85152d] mb-4 sm:mb-6">
                {t("story.vision")}
              </h2>
              <p className=" leading-relaxed text-sm sm:text-base md:text-lg">
                {t("story.visionText")}
              </p>
            </div>

            {/* Mission */}
            <div
              ref={setElementRef("mission")}
              data-parallax-id="mission"
              style={getParallaxStyle("mission", 140)}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#85152d] mb-4 sm:mb-6">
                {t("story.mission")}
              </h2>
              <p className=" leading-relaxed text-sm sm:text-base md:text-lg">
                {t("story.missionText")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
