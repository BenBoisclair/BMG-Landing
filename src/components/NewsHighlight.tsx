import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import { newsData } from "../data/newsData";

const NewsHighlight: React.FC = () => {
  const { t, i18n, ready } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ready) {
      setIsLoading(false);
    }
  }, [ready]);

  const currentLang = (i18n.language ||
    "th") as keyof (typeof newsData)[0]["title"];

  if (isLoading || !ready) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "Kanit" }}
          >
            {t("news.title", "ข่าวสาร")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.slice(0, 3).map((news) => (
            <a
              key={news.id}
              href={news.link}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:bg-secondary transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title[currentLang]}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2 group-hover:text-white/80 transition-colors duration-300">
                  {news.date}
                </p>
                <h3
                  className="text-xl font-semibold mb-3 line-clamp-2 text-gray-900 group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "Kanit" }}>
                  {news.title[currentLang]}
                </h3>
                <p className="text-gray-600 line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                  {news.excerpt[currentLang]}
                </p>
                <div className="mt-4">
                  <span className="text-primary font-medium group-hover:text-white group-hover:underline transition-colors duration-300">
                    {t("news.readMore", "อ่านเพิ่มเติม")} →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a
            href="/news"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors duration-300"
            style={{ fontFamily: "Kanit" }}
          >
            {t("news.viewAll", "ดูข่าวทั้งหมด")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsHighlight;