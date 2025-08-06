import { useState } from 'react';
import DotIndicator from './DotIndicator';

interface ShowcaseItem {
  id: string;
  mainImage: string;
  thumbnails: string[];
  title: string;
  description: string;
}

interface ShowcaseCategory {
  key: string;
  items: ShowcaseItem[];
}

const showcaseData: ShowcaseCategory[] = [
  {
    key: 'religious',
    items: [
      {
        id: 'buddhist-statue-1',
        mainImage: '/src/assets/Portfolio/1/1/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/1/1/1.jpg',
          '/src/assets/Portfolio/1/1/2.jpg',
          '/src/assets/Portfolio/1/1/3.jpg',
          '/src/assets/Portfolio/1/1/4.jpg'
        ],
        title: 'วัดเวฬุวนนกรราชูกิส',
        description: 'รวบแล้วเชยเตชส์ สะเริงอเบรก พระพุทธ คนช่วย เนกและใก ข่าวสมาชิก เทีองจำลิ่ม แครฮั้น (White Thassos) ในการแกะสลัก ชั้นสำคัญมิดังนี้ความแม่งประมาณเคล้าอบเนื่อดคำ นามสั่งนากิ ชั้น 2 ห่วงปีดสมนกรรมฐาน (Meditation Center) ณ วัดเวฬุวนนกรราชูกิส รัฐเสยเชยเตชส์ สะเริงอเบรก'
      },
      {
        id: 'buddhist-statue-2',
        mainImage: '/src/assets/Portfolio/1/2/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/1/2/1.jpg',
          '/src/assets/Portfolio/1/2/2.jpg',
          '/src/assets/Portfolio/1/2/3.jpg',
          '/src/assets/Portfolio/1/2/4.jpg'
        ],
        title: 'พระพุทธรูปศิลปกรรม',
        description: 'งานแกะสลักพระพุทธรูปจากหินอ่อนคุณภาพสูง ด้วยฝีมือช่างที่มีประสบการณ์กว่า 30 ปี สร้างสรรค์ผลงานที่งดงามและศักดิ์สิทธิ์'
      },
      {
        id: 'buddhist-statue-3',
        mainImage: '/src/assets/Portfolio/1/3/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/1/3/1.jpg',
          '/src/assets/Portfolio/1/3/2.jpg',
          '/src/assets/Portfolio/1/3/3.jpg'
        ],
        title: 'พระพุทธรูปปางประทับสมาธิ',
        description: 'พระพุทธรูปปางประทับสมาธิ แกะสลักจากหินแกรนิต ด้วยความประณีตและใส่ใจในทุกรายละเอียด เพื่อสร้างความสงบและความเคารพ'
      }
    ]
  },
  {
    key: 'architecture', 
    items: [
      {
        id: 'architecture-1',
        mainImage: '/src/assets/Portfolio/2/1/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/2/1/1.jpg',
          '/src/assets/Portfolio/2/1/2.jpg',
          '/src/assets/Portfolio/2/1/3.jpg'
        ],
        title: 'อาคารสำนักงานโมเดิร์น',
        description: 'ผลงานสถาปัตยกรรมสมัยใหม่ ใช้หินอ่อนและแกรนิตคุณภาพเยี่ยม สร้างความประทับใจให้กับผู้มาเยือน'
      },
      {
        id: 'architecture-2',
        mainImage: '/src/assets/Portfolio/2/2/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/2/2/1.jpg',
          '/src/assets/Portfolio/2/2/2.jpg',
          '/src/assets/Portfolio/2/2/3.jpg'
        ],
        title: 'โรงแรมหรู 5 ดาว',
        description: 'การออกแบบภายในโรงแรมระดับ 5 ดาว ด้วยหินธรรมชาติพรีเมียม สร้างบรรยากาศหรูหราและอบอุ่น'
      },
      {
        id: 'architecture-3',
        mainImage: '/src/assets/Portfolio/2/3/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/2/3/1.jpg',
          '/src/assets/Portfolio/2/3/2.jpg'
        ],
        title: 'ศูนย์การค้าระดับพรีเมียม',
        description: 'ศูนย์การค้าที่ใช้หินธรรมชาติในการตกแต่ง สร้างความโดดเด่นและความเป็นเอกลักษณ์'
      },
      {
        id: 'architecture-4',
        mainImage: '/src/assets/Portfolio/2/4/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/2/4/1.jpg',
          '/src/assets/Portfolio/2/4/2.jpg',
          '/src/assets/Portfolio/2/4/3.jpg'
        ],
        title: 'บ้านพักอาศัยหรู',
        description: 'บ้านพักอาศัยที่ผสมผสานความทันสมัยกับความคลาสสิก โดยใช้หินธรรมชาติเป็นจุดเด่น'
      },
      {
        id: 'architecture-5',
        mainImage: '/src/assets/Portfolio/2/5/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/2/5/1.jpg',
          '/src/assets/Portfolio/2/5/2.jpg',
          '/src/assets/Portfolio/2/5/3.jpg',
          '/src/assets/Portfolio/2/5/4.jpg'
        ],
        title: 'คอนโดมิเนียมหรู',
        description: 'โครงการคอนโดมิเนียมระดับไハคลาส ด้วยการออกแบบที่ใช้หินธรรมชาติสร้างความประทับใจ'
      },
      {
        id: 'architecture-6',
        mainImage: '/src/assets/Portfolio/2/6/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/2/6/1.jpg',
          '/src/assets/Portfolio/2/6/2.jpg',
          '/src/assets/Portfolio/2/6/3.jpg',
          '/src/assets/Portfolio/2/6/4.jpg',
          '/src/assets/Portfolio/2/6/5.jpg'
        ],
        title: 'สำนักงานบริษัท',
        description: 'การออกแบบสำนักงานองค์กรขนาดใหญ่ ที่เน้นความเป็นมืออาชีพและความหรูหรา'
      }
    ]
  },
  {
    key: 'interior',
    items: [
      {
        id: 'interior-1',
        mainImage: '/src/assets/Portfolio/3/1/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/3/1/1.jpg',
          '/src/assets/Portfolio/3/1/2.jpg',
          '/src/assets/Portfolio/3/1/3.jpg',
          '/src/assets/Portfolio/3/1/4.jpg'
        ],
        title: 'ห้องครัวสไตล์มินิมอล',
        description: 'ห้องครัวที่ออกแบบในสไตล์มินิมอล ใช้หินธรรมชาติสร้างความเรียบง่ายแต่หรูหรา'
      },
      {
        id: 'interior-2',
        mainImage: '/src/assets/Portfolio/3/2/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/3/2/1.jpg',
          '/src/assets/Portfolio/3/2/2.jpg',
          '/src/assets/Portfolio/3/2/3.jpg',
          '/src/assets/Portfolio/3/2/4.jpg'
        ],
        title: 'ห้องน้ำสปาหรู',
        description: 'ห้องน้ำสไตล์สปาที่ใช้หินอ่อนธรรมชาติ สร้างความรู้สึกผ่อนคลายและหรูหรา'
      },
      {
        id: 'interior-3',
        mainImage: '/src/assets/Portfolio/3/3/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/3/3/1.jpg',
          '/src/assets/Portfolio/3/3/2.jpg',
          '/src/assets/Portfolio/3/3/3.jpg',
          '/src/assets/Portfolio/3/3/4.jpg',
          '/src/assets/Portfolio/3/3/5.jpg'
        ],
        title: 'ห้องรับแขกแบบคลาสสิก',
        description: 'ห้องรับแขกที่ตกแต่งด้วยหินธรรมชาติ สร้างบรรยากาศอบอุ่นและเป็นกันเอง'
      }
    ]
  },
  {
    key: 'monuments',
    items: [
      {
        id: 'monument-1', 
        mainImage: '/src/assets/Portfolio/4/1.jpg',
        thumbnails: [
          '/src/assets/Portfolio/4/1.jpg',
          '/src/assets/Portfolio/4/2.jpg',
          '/src/assets/Portfolio/4/3.jpg',
          '/src/assets/Portfolio/4/4.jpg',
          '/src/assets/Portfolio/4/5.jpg'
        ],
        title: 'อนุสาวรีย์ทรงคุณค่า',
        description: 'อนุสาวรีย์หินธรรมชาติที่สร้างขึ้นเพื่อเป็นเกียรติและระลึกถึงบุคคลสำคัญ ด้วยงานฝีมือที่ประณีต'
      }
    ]
  },
  {
    key: 'landscape',
    items: [
      {
        id: 'landscape-1',
        mainImage: '/src/assets/Portfolio/5/1.jpg', 
        thumbnails: [
          '/src/assets/Portfolio/5/1.jpg',
          '/src/assets/Portfolio/5/2.jpg',
          '/src/assets/Portfolio/5/3.jpg'
        ],
        title: 'สวนหินจัดสวน',
        description: 'การจัดสวนที่ใช้หินธรรมชาติในการตกแต่ง สร้างความสวยงามและความเป็นธรรมชาติ'
      }
    ]
  }
];

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentCategoryData = showcaseData[activeCategory];
  const currentItem = currentCategoryData.items[activeItem];

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

  return (
    <section className="w-full bg-gradient-to-r from-primary via-primary to-secondary py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            ผลงาน
          </h2>
          <h3 className="text-white text-xl md:text-2xl font-medium">
            แห่งความภาคภูมิใจ
          </h3>
        </div>

        {/* Main Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
            <div className="flex flex-wrap">
              {[
                { key: 'religious', label: 'งานพระ-พุทธรูป' },
                { key: 'architecture', label: 'รูปหล่อน' },
                { key: 'interior', label: 'สถาปัตยกรรม' },
                { key: 'monuments', label: 'ประตินกรรม' },
                { key: 'landscape', label: 'เฟอร์นิเจอร์ - ของตกแต่งน้ำหนักใจ' }
              ].map((category, index) => (
                <button
                  key={category.key}
                  onClick={() => handleCategoryChange(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === index
                      ? 'bg-secondary text-white shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
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
                    className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                      activeItem === index
                        ? 'bg-white/20 text-white shadow-md'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.title}
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
              งานพระ-พุทธรูป
            </div>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              {currentItem.title}
            </h3>
            <p className="text-white/90 leading-relaxed text-base">
              {currentItem.description}
            </p>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-3 mt-8">
              {currentItem.thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index
                      ? 'ring-2 ring-white scale-105'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb}
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
                src={currentItem.thumbnails[currentImageIndex]}
                alt={currentItem.title}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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