import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import storyImg1 from "../assets/Story/story-imgc-01.png";
import storyImg2 from "../assets/Story/story-imgc-02.png";
import storyTxt1 from "../assets/Story/story-txt01.png";
import storyTxt2 from "../assets/Story/story-txt02.png";
import year30Top from "../assets/Story/30year-top.png";
import bgOurStory from "../assets/Story/bg-ourstory-new.jpg";

export default function Story() {
  const { t } = useTranslation();

  return (
    <div className="story-page">
      <section
        className="relative bg-cover bg-center container"
        style={{ backgroundImage: `url(${bgOurStory.src})` }}>
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="py-16 flex-col justify-center">
          {/* 30 Years Badge */}
          <div className="flex justify-end">
            <img
              src={year30Top.src}
              alt="30 Years"
              className="h-24 md:h-60
                "
            />
          </div>

          <div className=" -mt-10">
            <img
              src={storyImg1.src}
              alt="BMG Logo"
              className="mx-auto h-20 md:h-140"
            />
          </div>

          {/* Company Title */}
          <div className="bg-gradient-to-r from-primary to-transparent py-10 rounded-lg px-10 -mt-30">
            <h2 className="text-2xl md:text-5xl font-bold text-white">
              {t("story.companyTitle")}
            </h2>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 mt-12">
            <div className="px-30">
              <div className=" bg-white/80 rounded-md p-8">
                <h5 className="text-lg md:text-xl font-bold text-[#292567] mb-4 leading-relaxed">
                  {t("story.section1Title")}
                </h5>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {t("story.concept")}
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                src={storyTxt1.src}
                alt="Story Text 1"
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <div className="px-30">
              <div className="bg-white/80 rounded-md  p-8">
                <h5 className="text-lg md:text-xl font-bold text-[#292567] mb-4">
                  {t("story.section2Title")}
                </h5>
                <div className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
                  {t("story.section2SubTitle")}
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {t("story.concept")}
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                src={storyTxt2.src}
                alt="Story Text 2"
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <div className="px-30">
              <div className="bg-white/80 rounded-md p-8">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                  {t("story.section3")}
                </p>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {t("story.oemServices")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Vision and Mission Section */}
        <div>
          {/* Bottom Logo */}
          <div className="text-center mb-12">
            <img
              src={storyImg2.src}
              alt="BMG Logo Bottom"
              className="mx-auto h-24 md:h-80"
            />
          </div>
          <div className="py-12 space-y-8 px-30">
            {/* Vision */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#85152d] mb-6">
                {t("story.vision")}
              </h2>
              <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                {t("story.visionText")}
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#85152d] mb-6">
                {t("story.mission")}
              </h2>
              <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                {t("story.missionText")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
