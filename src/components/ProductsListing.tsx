import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import "../i18n/i18n";
import { getStonesByCategory } from "../data/stoneData";
import type { Stone } from "../data/stoneData";

export default function ProductsListing() {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState<"granite" | "marble">("granite");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !ready) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-gray-500 text-2xl">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  const currentStones = getStonesByCategory(activeTab);
  const visibleStones = currentStones.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, currentStones.length));
  };

  const handleTabChange = (tab: "granite" | "marble") => {
    setActiveTab(tab);
    setVisibleCount(8);
  };

  const handleStoneClick = (stone: Stone) => {
    // Navigate to the stone detail page
    const detailPath = `/products/${stone.category}/${stone.slug}`;
    console.log("Navigating to stone:", stone.name, "path:", detailPath);
    window.location.href = detailPath;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("products.title")}
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-gray-600">
            {t("products.subtitle")}
          </h3>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            {t("products.description")}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleTabChange("granite");
              }}
              className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === "granite"
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:text-primary"
              }`}>
              {t("materials.granite")}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleTabChange("marble");
              }}
              className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === "marble"
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:text-primary"
              }`}>
              {t("materials.marble")}
            </button>
          </div>
        </div>

        {/* Stones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleStones.map((stone, index) => (
            <div
              key={`${stone.category}-${stone.slug}-${index}`}
              className="group cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleStoneClick(stone)}>
              <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={stone.image.src}
                  alt={stone.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Overlay with Info */}
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <h4 className="font-semibold text-lg mb-1">{stone.name}</h4>
                    <p className="text-sm text-white/90">
                      {stone.categoryThai}
                    </p>
                    <div className="flex mt-2 space-x-2">
                      {stone.colors.slice(0, 3).map((color, colorIndex) => (
                        <span
                          key={colorIndex}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stone Info */}
              {/* <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-200">
                  {stone.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {stone.categoryThai}
                </p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  {stone.description}
                </p>
              </div> */}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < currentStones.length && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleLoadMore();
              }}
              className="inline-flex items-center px-8 py-3 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
              <span>{t("materials.loadMore")}</span>
              <FaChevronDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}

        {/* Category Summary */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {activeTab === "granite" ? t("products.graniteInfo.title") : t("products.marbleInfo.title")}
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              {activeTab === "granite" ? t("products.graniteInfo.description") : t("products.marbleInfo.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{currentStones.length}</div>
                <div className="text-gray-600">{t("products.totalVarieties")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-gray-600">{t("products.yearsExperience")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-gray-600">{t("products.naturalStone")}</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
