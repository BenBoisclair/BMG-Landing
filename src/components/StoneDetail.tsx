import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../i18n/i18n";
import { getStonesByCategory } from "../data/stoneData";
import type { Stone } from "../data/stoneData";

interface StoneDetailProps {
  stone: Stone;
}

// Color mapping from color names to CSS gradients (supports both Thai and English)
const getColorGradient = (colorName: string): string => {
  const colorMap: { [key: string]: string } = {
    // Thai Browns
    น้ำตาล: "linear-gradient(135deg, #8B4513, #D2691E)",
    น้ำตาลอ่อน: "linear-gradient(135deg, #D2691E, #F4A460)",
    น้ำตาลยาสูบ: "linear-gradient(135deg, #A0522D, #CD853F)",
    แทน: "linear-gradient(135deg, #D2B48C, #DEB887)",

    // English Browns
    Brown: "linear-gradient(135deg, #8B4513, #D2691E)",
    "Light Brown": "linear-gradient(135deg, #D2691E, #F4A460)",
    "Tobacco Brown": "linear-gradient(135deg, #A0522D, #CD853F)",
    Tan: "linear-gradient(135deg, #D2B48C, #DEB887)",

    // Thai Blacks and Grays
    ดำ: "linear-gradient(135deg, #1a1a1a, #4a4a4a)",
    เทา: "linear-gradient(135deg, #708090, #A9A9A9)",
    เทาเข้ม: "linear-gradient(135deg, #2F4F4F, #696969)",
    เทาอ่อน: "linear-gradient(135deg, #D3D3D3, #E5E5E5)",

    // English Blacks and Grays
    Black: "linear-gradient(135deg, #1a1a1a, #4a4a4a)",
    Gray: "linear-gradient(135deg, #708090, #A9A9A9)",
    Grey: "linear-gradient(135deg, #708090, #A9A9A9)",
    "Dark Gray": "linear-gradient(135deg, #2F4F4F, #696969)",
    "Light Gray": "linear-gradient(135deg, #D3D3D3, #E5E5E5)",

    // Thai Whites and Creams
    ขาว: "linear-gradient(135deg, #F8F8FF, #FFFFFF)",
    ครีม: "linear-gradient(135deg, #FFF8DC, #FFFFF0)",
    เบจ: "linear-gradient(135deg, #F5F5DC, #FAEBD7)",

    // English Whites and Creams
    White: "linear-gradient(135deg, #F8F8FF, #FFFFFF)",
    Cream: "linear-gradient(135deg, #FFF8DC, #FFFFF0)",
    Beige: "linear-gradient(135deg, #F5F5DC, #FAEBD7)",

    // Thai Golds and Yellows
    ทอง: "linear-gradient(135deg, #FFD700, #FFA500)",

    // English Golds and Yellows
    Gold: "linear-gradient(135deg, #FFD700, #FFA500)",
    Yellow: "linear-gradient(135deg, #FFD700, #FFA500)",

    // Thai Reds
    แดง: "linear-gradient(135deg, #B22222, #DC143C)",

    // English Reds
    Red: "linear-gradient(135deg, #B22222, #DC143C)",

    // Thai Blues
    น้ำเงิน: "linear-gradient(135deg, #1E90FF, #4169E1)",

    // English Blues
    Blue: "linear-gradient(135deg, #1E90FF, #4169E1)",

    // Thai Greens
    เขียว: "linear-gradient(135deg, #228B22, #32CD32)",
    เขียวเข้ม: "linear-gradient(135deg, #006400, #228B22)",

    // English Greens
    Green: "linear-gradient(135deg, #228B22, #32CD32)",
    "Dark Green": "linear-gradient(135deg, #006400, #228B22)",

    // Thai Pinks
    ชมพู: "linear-gradient(135deg, #FFB6C1, #FF69B4)",

    // English Pinks
    Pink: "linear-gradient(135deg, #FFB6C1, #FF69B4)",

    // Thai Silvers
    เงิน: "linear-gradient(135deg, #C0C0C0, #E0E0E0)",

    // English Silvers
    Silver: "linear-gradient(135deg, #C0C0C0, #E0E0E0)",

    // Multi-color (for special cases)
    หลากสี: "linear-gradient(135deg, #FFD700, #FF6347, #8B4513, #4169E1)",
    "Multi-color":
      "linear-gradient(135deg, #FFD700, #FF6347, #8B4513, #4169E1)",
  };

  return colorMap[colorName] || "linear-gradient(135deg, #9CA3AF, #D1D5DB)"; // Default gray gradient
};

export default function StoneDetail({ stone }: StoneDetailProps) {
  const { t, i18n, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedStones, setRelatedStones] = useState<Stone[]>([]);

  // Language detection - use English for all languages except Thai
  const currentLang = i18n.language || "th";
  const isThaiLanguage = currentLang === "th";

  // Dynamic content based on language
  const stoneContent = {
    name: `${stone.thaiName} (${stone.englishName})`, // Always show both names
    category: isThaiLanguage
      ? stone.categoryThai
      : stone.category === "granite"
        ? "Granite"
        : "Marble",
    colors: isThaiLanguage ? stone.colorsThai : stone.colors,
    applications: isThaiLanguage ? stone.applicationsThai : stone.applications,
    advantages: isThaiLanguage ? stone.advantagesThai : stone.advantages,
    customCutting: isThaiLanguage
      ? stone.customCuttingThai
      : stone.customCutting,
    note: isThaiLanguage ? stone.noteThai : stone.note,
  };

  useEffect(() => {
    setIsClient(true);
    // Get related stones from the same category
    const stones = getStonesByCategory(stone.category);
    const filtered = stones.filter((s) => s.id !== stone.id).slice(0, 4);
    setRelatedStones(filtered);
  }, [stone]);

  useEffect(() => {
    // Fallback timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      if (!isClient) {
        setIsClient(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500 text-xl">Loading stone details...</div>
      </div>
    );
  }

  // Show content even if translations aren't ready - better than infinite loading

  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === stone.images.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? stone.images.length - 1 : prev - 1
    );
  };

  const handleRelatedStoneClick = (relatedStone: Stone) => {
    const detailPath = `/products/${relatedStone.category}/${relatedStone.slug}`;
    window.location.href = detailPath;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-20">
        <a
          href="/products"
          className="inline-flex items-center text-primary hover:underline mb-6">
          ← {isThaiLanguage ? "กลับไปหน้าผลิตภัณฑ์" : "Back to Products"}
        </a>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-200">
              <img
                src={stone.images[currentImageIndex].src}
                alt={stone.name}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows - Only show if multiple images */}
              {stone.images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-all duration-300">
                    <FaChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={goToNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-all duration-300">
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image counter */}
              {stone.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {stone.images.length}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {stone.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {stone.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      currentImageIndex === index
                        ? "ring-2 ring-primary scale-105"
                        : "opacity-70 hover:opacity-100"
                    }`}>
                    <img
                      src={image.src}
                      alt={`${stone.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Stone Information */}
          <div className="space-y-6">
            {/* Basic Info - Thai Name and Product Code */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    stone.category === "granite"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-purple-100 text-purple-800"
                  }`}>
                  {stoneContent.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {stoneContent.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {isThaiLanguage ? "รหัสสินค้า" : "Product Code"}:{" "}
                {stone.productCode}
              </p>
            </div>

            {/* Colors */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("products.stoneDetail.colors") ||
                  (isThaiLanguage ? "สี :" : "Colors:")}
              </h3>
              <div className="space-y-3">
                {stoneContent.colors.map((color, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="group relative">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-help"
                        style={{ background: getColorGradient(color) }}
                        title={color}
                      />
                      {/* Tooltip for desktop */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        {color}
                      </div>
                    </div>
                    <span className="text-gray-700 text-sm">{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("products.stoneDetail.applications") ||
                  (isThaiLanguage ? "การใช้งาน:" : "Applications:")}
              </h3>
              <ul className="space-y-2">
                {stoneContent.applications.map((app, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("products.stoneDetail.advantages") ||
                  (isThaiLanguage ? "ข้อดี :" : "Advantages:")}
              </h3>
              <ul className="space-y-2">
                {stoneContent.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>

            {/* Standard Sizes */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("products.stoneDetail.standardSizes") ||
                  (isThaiLanguage ? "ขนาดมาตรฐาน" : "Standard Sizes")}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {stone.standardSizes.map((size, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gray-50 text-gray-700 rounded-md text-sm text-center">
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Custom Cutting */}
            {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {isThaiLanguage ? "สั่งตัดได้ตามต้องการ :" : "Custom Cutting:"}
              </h3>
              <p className="text-blue-700 text-sm">
                {stoneContent.customCutting}
              </p>
            </div> */}

            {/* Technical Specifications */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("products.stoneDetail.technicalSpecs") ||
                  (isThaiLanguage
                    ? "รายละเอียดทางเทคนิค"
                    : "Technical Specifications")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">
                    {t("products.stoneDetail.weightPerSqm") ||
                      (isThaiLanguage
                        ? "น้ำหนักต่อ 1 ตารางเมตร :"
                        : "Weight per sqm:")}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {stone.weightPerSqm}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">
                    {t("products.stoneDetail.thickness") ||
                      (isThaiLanguage ? "ความหนา :" : "Thickness:")}
                  </span>
                  <span className="text-gray-600 ml-2">{stone.thickness}</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="p-6">
              <h3 className="text-lg font-semibold  mb-2">
                {t("products.stoneDetail.note") ||
                  (isThaiLanguage ? "หมายเหตุ :" : "Note:")}
              </h3>
              <p className="text-sm">{stoneContent.note}</p>
            </div>
          </div>
        </div>

        {/* Related Stones */}
        {relatedStones.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("products.stoneDetail.relatedStones") || "Related Stones"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {relatedStones.map((relatedStone) => (
                <div
                  key={relatedStone.id}
                  className="group cursor-pointer"
                  onClick={() => handleRelatedStoneClick(relatedStone)}>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                      src={relatedStone.image.src}
                      alt={relatedStone.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
