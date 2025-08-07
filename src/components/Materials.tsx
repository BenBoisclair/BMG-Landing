import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import "../i18n/i18n";

import { getStonesByCategory } from "../data/stoneData";
import type { Stone } from "../data/stoneData";

export default function Materials() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"granite" | "marble">("granite");
  const [visibleCount, setVisibleCount] = useState(8);

  const currentMaterials = getStonesByCategory(activeTab);
  const visibleMaterials = currentMaterials.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, currentMaterials.length));
  };

  const handleTabChange = (tab: "granite" | "marble") => {
    setActiveTab(tab);
    setVisibleCount(8);
  };

  const handleMaterialClick = (stone: Stone) => {
    const detailPath = `/products/${stone.category}/${stone.slug}`;
    window.location.href = detailPath;
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
              <FaChevronRight className="w-4 h-4" />
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
          {visibleMaterials.map((stone, index) => (
            <div
              key={`${stone.category}-${stone.id}-${index}`}
              className="group cursor-pointer"
              onClick={() => handleMaterialClick(stone)}>
              <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-800">
                <img
                  src={stone.image}
                  alt={stone.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="mt-3 text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-200">
                {stone.name}
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
              <FaChevronDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
