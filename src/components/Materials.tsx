import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

interface Material {
  name: string;
  image: string;
  category: "granite" | "marble";
}

const graniteImages = [
  "baltic_brown.jpg",
  "black_galaxy.jpg",
  "black_zimbabwe.jpg",
  "blue_pearl.jpg",
  "cafe_bahia.jpg",
  "chili_red.jpg",
  "crystal_blue.jpg",
  "marron_cuba.jpg",
  "moon_white.jpg",
  "new_imperial_red.jpg",
  "paradiso.jpg",
  "pink_porrino.jpg",
  "tan_brown.jpg",
  "uthai_pink.jpg",
  "velvet_white.jpg",
  "volga_blue.jpg",
];

const marbleImages = [
  "arabescato.jpg",
  "black_forest.jpg",
  "black_marquina.jpg",
  "cat_eye.jpg",
  "dark_green.jpg",
  "limestone_cloudy.jpg",
  "sunny_creama.jpg",
  "super_white.jpg",
  "titanium_black.jpg",
  "tobacco_brown.jpg",
  "travertino.jpg",
  "white_carrara.jpg",
  "white_venus.jpg",
  "white_volakas.jpg",
];

const formatMaterialName = (filename: string): string => {
  return filename
    .replace(".jpg", "")
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const graniteData: Material[] = graniteImages.map((image) => ({
  name: formatMaterialName(image),
  image: `/src/assets/Materials/Granite/${image}`,
  category: "granite",
}));

const marbleData: Material[] = marbleImages.map((image) => ({
  name: formatMaterialName(image),
  image: `/src/assets/Materials/Marble/${image}`,
  category: "marble",
}));

export default function Materials() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"granite" | "marble">("granite");
  const [visibleCount, setVisibleCount] = useState(8);

  const currentMaterials = activeTab === "granite" ? graniteData : marbleData;
  const visibleMaterials = currentMaterials.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, currentMaterials.length));
  };

  const handleTabChange = (tab: "granite" | "marble") => {
    setActiveTab(tab);
    setVisibleCount(8);
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Materials</h2>
            <h3 className="text-2xl md:text-3xl font-light">
              {t("materials.highlight")}
            </h3>
            {/* <button className="mt-4 text-white hover:text-gray-300 transition-colors duration-200 flex items-center gap-2">
              <span className="text-sm">{t("materials.viewAll")}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button> */}
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-white/10 rounded-lg p-1">
            <button
              onClick={() => handleTabChange("granite")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "granite"
                  ? "bg-secondary text-white shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}>
              {t("materials.granite")}
            </button>
            <button
              onClick={() => handleTabChange("marble")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "marble"
                  ? "bg-secondary text-white shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}>
              {t("materials.marble")}
            </button>
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleMaterials.map((material, index) => (
            <div
              key={`${material.category}-${material.name}-${index}`}
              className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-800">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="mt-3 text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-200">
                {material.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < currentMaterials.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center px-8 py-3 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors duration-200">
              <span>{t("materials.loadMore")}</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
