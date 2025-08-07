import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';
import { newsData } from '../data/newsData';

interface NewsArticleProps {
  newsId: string;
}


const NewsArticle: React.FC<NewsArticleProps> = ({ newsId }) => {
  const { i18n, ready } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (ready) {
      setIsLoading(false);
    }
  }, [ready]);

  const currentLang = (i18n.language || 'th') as keyof typeof newsData[0]['title'];
  const news = newsData.find(item => item.id === newsId);
  const images = news?.images || [news?.image || ''];

  if (isLoading || !ready) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!news) {
    return <div className="min-h-screen bg-white flex items-center justify-center">News not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <a href="/news" className="inline-flex items-center text-primary hover:underline mb-6">
          ← กลับไปหน้าข่าวสาร
        </a>
        
        <article className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 mb-2">{news.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Kanit' }}>
            {news.title[currentLang]}
          </h1>
          
          <div className="mb-8">
            <img
              src={images[0]}
              alt={news.title[currentLang]}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed break-words">
              {((news.content && news.content[currentLang]) || news.excerpt[currentLang] || '')
                .split('\n')
                .map((paragraph, index) => {
                  // Check if paragraph contains a URL
                  const urlRegex = /(https?:\/\/[^\s]+)/g;
                  const parts = paragraph.split(urlRegex);
                  
                  return (
                    <p key={index} className="mb-4">
                      {parts.map((part, partIndex) => {
                        if (urlRegex.test(part)) {
                          return (
                            <a
                              key={partIndex}
                              href={part}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-secondary underline break-all"
                            >
                              {part}
                            </a>
                          );
                        }
                        return <span key={partIndex}>{part}</span>;
                      })}
                    </p>
                  );
                })
              }
            </div>
          </div>
          
          {images.length > 1 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Kanit' }}>
                รูปภาพเพิ่มเติม
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${news.title[currentLang]} - Image ${index + 2}`}
                    className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default NewsArticle;