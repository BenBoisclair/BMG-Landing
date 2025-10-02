// Import all granite images
import balticBrownImg from "@/assets/Materials/Granite/baltic_brown.jpg";
import blackGalaxyImg from "@/assets/Materials/Granite/black_galaxy.jpg";
import blackZimbabweImg from "@/assets/Materials/Granite/black_zimbabwe.jpg";
import bluePearlImg from "@/assets/Materials/Granite/blue_pearl.jpg";
import cafeBahiaImg from "@/assets/Materials/Granite/cafe_bahia.jpg";
import chiliRedImg from "@/assets/Materials/Granite/chili_red.jpg";
import crystalBlueImg from "@/assets/Materials/Granite/crystal_blue.jpg";
import marronCubaImg from "@/assets/Materials/Granite/marron_cuba.jpg";
import moonWhiteImg from "@/assets/Materials/Granite/moon_white.jpg";
import newImperialRedImg from "@/assets/Materials/Granite/new_imperial_red.jpg";
import paradisoImg from "@/assets/Materials/Granite/paradiso.jpg";
import pinkPorrinoImg from "@/assets/Materials/Granite/pink_porrino.jpg";
import tanBrownImg from "@/assets/Materials/Granite/tan_brown.jpg";
import uthaiPinkImg from "@/assets/Materials/Granite/uthai_pink.jpg";
import velvetWhiteImg from "@/assets/Materials/Granite/velvet_white.jpg";
import volgaBlueImg from "@/assets/Materials/Granite/volga_blue.jpg";

// Import all marble images
import arabescatoImg from "@/assets/Materials/Marble/arabescato.jpg";
import blackForestImg from "@/assets/Materials/Marble/black_forest.jpg";
import blackMarquinaImg from "@/assets/Materials/Marble/black_marquina.jpg";
import catEyeImg from "@/assets/Materials/Marble/cat_eye.jpg";
import darkGreenImg from "@/assets/Materials/Marble/dark_green.jpg";
import limestoneCloudyImg from "@/assets/Materials/Marble/limestone_cloudy.jpg";
import sunnyCremaImg from "@/assets/Materials/Marble/sunny_creama.jpg";
import superWhiteImg from "@/assets/Materials/Marble/super_white.jpg";
import titaniumBlackImg from "@/assets/Materials/Marble/titanium_black.jpg";
import tobaccoBrownImg from "@/assets/Materials/Marble/tobacco_brown.jpg";
import travertinoImg from "@/assets/Materials/Marble/travertino.jpg";
import whiteCarraraImg from "@/assets/Materials/Marble/white_carrara.jpg";
import whiteVenusImg from "@/assets/Materials/Marble/white_venus.jpg";
import whiteVolakasImg from "@/assets/Materials/Marble/white_volakas.jpg";

export interface Stone {
  id: string;
  name: string;
  thaiName: string;
  englishName: string;
  productCode: string;
  slug: string;
  category: "granite" | "marble";
  categoryThai: string;
  image: ImageMetadata;
  images: ImageMetadata[];
  colors: string[];
  colorsThai: string[];
  description: string;
  applications: string[];
  applicationsThai: string[];
  advantages: string[];
  advantagesThai: string[];
  standardSizes: string[];
  customCutting: string;
  customCuttingThai: string;
  weightPerSqm: string;
  thickness: string;
  note: string;
  noteThai: string;
}

const graniteStones: Stone[] = [
  {
    id: "baltic-brown",
    name: "Baltic Brown",
    thaiName: "หินแกรนิตบอลติกบราวน์",
    englishName: "BALTIC BROWN",
    productCode: "BB001",
    slug: "baltic-brown",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: balticBrownImg,
    images: [balticBrownImg],
    colors: ["Brown", "Black", "Gold"],
    colorsThai: ["น้ำตาล", "ดำ", "ทอง"],
    description: "A beautiful brown granite with distinctive patterns and excellent durability.",
    applications: [
      "Kitchen countertops and islands",
      "Bathroom vanities",
      "Flooring applications"
    ],
    applicationsThai: [
      "เคาน์เตอร์ครัวและเกาะครัว",
      "ท็อปห้องน้ำ",
      "งานปูพื้น"
    ],
    advantages: [
      "Excellent durability and strength",
      "Distinctive natural patterns",
      "Suitable for both interior and exterior use"
    ],
    advantagesThai: [
      "ทนทานและแข็งแรงเยี่ยม",
      "ลวดลายธรรมชาติที่โดดเด่น",
      "เหมาะสำหรับใช้งานทั้งภายในและภายนอก"
    ],
    standardSizes: ["60x60cm", "30x60cm", "120x60cm"],
    customCutting: "Custom cutting available",
    customCuttingThai: "รับสั่งตัดตามต้องการ",
    weightPerSqm: "26 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Natural granite may vary in patterns and colors.",
    noteThai: "หินแกรนิตธรรมชาติอาจมีลวดลายและสีที่แตกต่างกัน"
  },
  {
    id: "black-galaxy",
    name: "Black Galaxy",
    thaiName: "หินแกรนิตแบล็คกาแล็กซี่",
    englishName: "BLACK GALAXY",
    productCode: "BG001",
    slug: "black-galaxy",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: blackGalaxyImg,
    images: [blackGalaxyImg],
    colors: ["Black", "Gold"],
    colorsThai: ["ดำ", "ทอง"],
    description: "Elegant black granite with golden specks that sparkle like stars in the night sky.",
    applications: [
      "Kitchen countertops",
      "Bathroom vanities",
      "Wall cladding"
    ],
    applicationsThai: [
      "เคาน์เตอร์ครัว",
      "ท็อปห้องน้ำ",
      "ผนังตกแต่ง"
    ],
    advantages: [
      "Highly durable and scratch resistant",
      "Unique starry night appearance",
      "Low maintenance requirements"
    ],
    advantagesThai: [
      "ทนทานและต้านทานการขีดข่วน",
      "รูปลักษณ์เหมือนท้องฟ้าเต็มดาว",
      "ดูแลรักษาง่าย"
    ],
    standardSizes: ["60x60cm", "30x60cm", "120x60cm"],
    customCutting: "Professional cutting service available",
    customCuttingThai: "บริการตัดแบบมืออาชีพ",
    weightPerSqm: "28 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Natural granite patterns may vary from samples.",
    noteThai: "ลวดลายแกรนิตธรรมชาติอาจแตกต่างจากตัวอย่าง"
  },
  {
    id: "black-zimbabwe",
    name: "Black Zimbabwe",
    thaiName: "หินแกรนิตแบล็คซิมบับเว",
    englishName: "BLACK ZIMBABWE",
    productCode: "BZ001",
    slug: "black-zimbabwe",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: blackZimbabweImg,
    images: [blackZimbabweImg],
    colors: ["Black"],
    colorsThai: ["ดำ"],
    description: "Pure black granite with fine grain structure, perfect for sophisticated designs.",
    applications: [
      "Premium countertops",
      "Monument construction",
      "Luxury interior design"
    ],
    applicationsThai: [
      "เคาน์เตอร์พรีเมี่ยม",
      "งานก่อสร้างอนุสาวรีย์",
      "การออกแบบภายในหรูหรา"
    ],
    advantages: [
      "Consistent pure black color",
      "Fine grain structure",
      "Exceptional quality and uniformity"
    ],
    advantagesThai: [
      "สีดำบริสุทธิ์ที่สม่ำเสมอ",
      "โครงสร้างเม็ดละเอียด",
      "คุณภาพยอดเยี่ยมและสม่ำเสมอ"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Precision cutting available",
    customCuttingThai: "บริการตัดแม่นยำ",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Premium grade granite with consistent quality.",
    noteThai: "หินแกรนิตเกรดพรีเมี่ยมคุณภาพสม่ำเสมอ"
  },
  {
    id: "blue-pearl",
    name: "Blue Pearl",
    thaiName: "หินแกรนิตบลูเพิร์ล",
    englishName: "BLUE PEARL",
    productCode: "BP001",
    slug: "blue-pearl",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: bluePearlImg,
    images: [bluePearlImg],
    colors: ["Blue", "Silver", "Gray"],
    colorsThai: ["น้ำเงิน", "เงิน", "เทา"],
    description: "Stunning blue granite with silver and metallic flecks creating a pearl-like shimmer.",
    applications: [
      "Feature walls and accents",
      "Luxury countertops",
      "Fireplace surrounds"
    ],
    applicationsThai: [
      "ผนังโชว์และส่วนเน้น",
      "เคาน์เตอร์หรูหรา",
      "โครงเตาผิง"
    ],
    advantages: [
      "Unique pearl-like shimmer effect",
      "Distinctive blue coloring",
      "Perfect for modern designs"
    ],
    advantagesThai: [
      "เอฟเฟกต์ประกายเหมือนไข่มุก",
      "สีน้ำเงินที่โดดเด่น",
      "เหมาะสำหรับการออกแบบสมัยใหม่"
    ],
    standardSizes: ["60x60cm", "30x60cm", "120x60cm"],
    customCutting: "Available with professional installation",
    customCuttingThai: "พร้อมบริการติดตั้งมืออาชีพ",
    weightPerSqm: "26 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Rare granite with unique color characteristics.",
    noteThai: "หินแกรนิตหายากที่มีลักษณะสีเฉพาะตัว"
  },
  {
    id: "cafe-bahia",
    name: "Cafe Bahia",
    thaiName: "หินแกรนิตคาเฟ่บาเฮีย",
    englishName: "CAFE BAHIA",
    productCode: "CB001",
    slug: "cafe-bahia",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: cafeBahiaImg,
    images: [cafeBahiaImg],
    colors: ["Brown", "Cream", "Beige"],
    colorsThai: ["น้ำตาล", "ครีม", "เบจ"],
    description: "Warm brown granite with cream and beige tones, perfect for cozy interiors.",
    applications: [
      "Kitchen countertops",
      "Bathroom vanities",
      "Warm interior designs"
    ],
    applicationsThai: [
      "เคาน์เตอร์ครัว",
      "ท็อปห้องน้ำ",
      "การออกแบบภายในโทนอบอุ่น"
    ],
    advantages: [
      "Warm inviting color tones",
      "Natural patterns create cozy atmosphere",
      "Excellent for traditional designs"
    ],
    advantagesThai: [
      "โทนสีอบอุ่นน่าดึงดูด",
      "ลวดลายธรรมชาติสร้างบรรยากาศอบอุ่น",
      "เยี่ยมสำหรับการออกแบบแบบดั้งเดิม"
    ],
    standardSizes: ["60x60cm", "30x60cm", "120x60cm"],
    customCutting: "Custom cutting available",
    customCuttingThai: "รับสั่งตัดตามต้องการ",
    weightPerSqm: "26 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Natural granite patterns create unique warm atmosphere.",
    noteThai: "ลวดลายแกรนิตธรรมชาติสร้างบรรยากาศอบอุ่นเฉพาะตัว"
  },
  {
    id: "chili-red",
    name: "Chili Red",
    thaiName: "หินแกรนิตชิลิเรด",
    englishName: "CHILI RED",
    productCode: "CR001",
    slug: "chili-red",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: chiliRedImg,
    images: [chiliRedImg],
    colors: ["Red", "Black", "Gray"],
    colorsThai: ["แดง", "ดำ", "เทา"],
    description: "Vibrant red granite with black and gray minerals creating striking contrast.",
    applications: [
      "Feature walls and accent areas",
      "Kitchen countertops",
      "Outdoor applications"
    ],
    applicationsThai: [
      "ผนังโชว์และจุดเน้น",
      "เคาน์เตอร์ครัว",
      "งานภายนอก"
    ],
    advantages: [
      "Bold vibrant red coloring",
      "Striking visual contrast",
      "Perfect for statement pieces"
    ],
    advantagesThai: [
      "สีแดงสดใสโดดเด่น",
      "ความแตกต่างทางสายตาที่โดดเด่น",
      "เหมาะสำหรับชิ้นงานที่ต้องการสร้างจุดสนใจ"
    ],
    standardSizes: ["60x60cm", "30x60cm", "120x60cm"],
    customCutting: "Professional cutting available",
    customCuttingThai: "บริการตัดแบบมืออาชีพ",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Bold red granite makes powerful design statements.",
    noteThai: "หินแกรนิตสีแดงโดดเด่นสร้างจุดสนใจที่ทรงพลัง"
  },
  {
    id: "crystal-blue",
    name: "Crystal Blue",
    thaiName: "หินแกรนิตคริสตัลบลู",
    englishName: "CRYSTAL BLUE",
    productCode: "CBL001",
    slug: "crystal-blue",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: crystalBlueImg,
    images: [crystalBlueImg],
    colors: ["Blue", "White", "Gray"],
    colorsThai: ["น้ำเงิน", "ขาว", "เทา"],
    description: "Distinctive blue granite with crystalline formations and unique patterns.",
    applications: [
      "Luxury countertops",
      "Accent features",
      "High-end interior design"
    ],
    applicationsThai: [
      "เคาน์เตอร์หรูหรา",
      "จุดเน้นพิเศษ",
      "การออกแบบภายในระดับไฮเอนด์"
    ],
    advantages: [
      "Unique crystalline formations",
      "Rare blue granite variety",
      "One-of-a-kind appearance"
    ],
    advantagesThai: [
      "การก่อตัวของคริสตัลที่เฉพาะตัว",
      "หินแกรนิตสีน้ำเงินหายาก",
      "รูปลักษณ์เฉพาะตัวไม่มีใครเหมือน"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Specialized cutting required",
    customCuttingThai: "ต้องใช้การตัดเฉพาะทาง",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Rare granite requiring professional handling and installation.",
    noteThai: "หินแกรนิตหายากต้องการการจัดการและติดตั้งโดยผู้เชี่ยวชาญ"
  },
  {
    id: "marron-cuba",
    name: "Marron Cuba",
    thaiName: "หินแกรนิตมาร์รอนคิวบา",
    englishName: "MARRON CUBA",
    productCode: "MC001",
    slug: "marron-cuba",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: marronCubaImg,
    images: [marronCubaImg],
    colors: ["Brown", "Tan", "Cream"],
    colorsThai: ["น้ำตาล", "แทน", "ครีม"],
    description: "Rich brown granite with varied patterns and excellent workability.",
    applications: [
      "Kitchen and bathroom countertops",
      "Commercial applications",
      "Flooring"
    ],
    applicationsThai: [
      "เคาน์เตอร์ครัวและห้องน้ำ",
      "งานเชิงพาณิชย์",
      "งานปูพื้น"
    ],
    advantages: [
      "Rich brown tones with natural variation",
      "Excellent workability",
      "Consistent quality"
    ],
    advantagesThai: [
      "โทนสีน้ำตาลเข้มที่หลากหลายธรรมชาติ",
      "ง่ายต่อการขึ้นรูป",
      "คุณภาพที่สม่ำเสมอ"
    ],
    standardSizes: ["60x60cm", "30x60cm", "120x60cm"],
    customCutting: "Standard cutting service",
    customCuttingThai: "บริการตัดมาตรฐาน",
    weightPerSqm: "26 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Reliable granite choice for various applications.",
    noteThai: "ตัวเลือกหินแกรนิตที่เชื่อถือได้สำหรับงานหลากหลาย"
  },
  {
    id: "moon-white",
    name: "Moon White",
    thaiName: "หินแกรนิตมูนไวท์",
    englishName: "MOON WHITE",
    productCode: "MW001",
    slug: "moon-white",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: moonWhiteImg,
    images: [moonWhiteImg],
    colors: ["White", "Gray", "Beige"],
    colorsThai: ["ขาว", "เทา", "เบจ"],
    description: "Light-colored granite with subtle patterns perfect for bright, airy spaces.",
    applications: [
      "Modern kitchen countertops",
      "Bathroom applications",
      "Light commercial use"
    ],
    applicationsThai: [
      "เคาน์เตอร์ครัวสมัยใหม่",
      "งานห้องน้ำ",
      "งานเชิงพาณิชย์เบา"
    ],
    advantages: [
      "Light colors create bright spaces",
      "Subtle natural patterns",
      "Perfect for modern designs"
    ],
    advantagesThai: [
      "สีอ่อนสร้างพื้นที่สว่าง",
      "ลวดลายธรรมชาติแบบละเอียดอ่อน",
      "เหมาะสำหรับการออกแบบสมัยใหม่"
    ],
    standardSizes: ["60x60cm", "30x60cm", "120x60cm"],
    customCutting: "Available with careful handling",
    customCuttingThai: "พร้อมบริการด้วยการจัดการที่ระมัดระวัง",
    weightPerSqm: "26 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Light granite requires regular maintenance for best appearance.",
    noteThai: "หินแกรนิตสีอ่อนต้องการการดูแลเป็นประจำเพื่อความสวยงาม"
  },
  {
    id: "new-imperial-red",
    name: "New Imperial Red",
    thaiName: "หินแกรนิตนิวอิมพีเรียลเรด",
    englishName: "NEW IMPERIAL RED",
    productCode: "NIR001",
    slug: "new-imperial-red",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: newImperialRedImg,
    images: [newImperialRedImg],
    colors: ["Red", "Black", "Gray"],
    colorsThai: ["แดง", "ดำ", "เทา"],
    description: "Deep red granite with black details creating a regal appearance.",
    applications: [
      "Luxury interior decoration",
      "Premium countertops",
      "Accent walls"
    ],
    applicationsThai: [
      "ตกแต่งภายในหรูหรา",
      "เคาน์เตอร์พรีเมี่ยม",
      "ผนังเน้นจุด"
    ],
    advantages: [
      "Deep red color with regal appearance",
      "Black mineral details add sophistication",
      "Perfect for luxury applications"
    ],
    advantagesThai: [
      "สีแดงเข้มที่ดูราชาศักดิ์สิทธิ์",
      "รายละเอียดแร่ธาตุสีดำเพิ่มความหรูหรา",
      "เหมาะสำหรับงานหรูหรา"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Professional installation recommended",
    customCuttingThai: "แนะนำการติดตั้งโดยผู้เชี่ยวชาญ",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Premium granite requiring expert handling.",
    noteThai: "หินแกรนิตพรีเมี่ยมต้องการการจัดการโดยผู้เชี่ยวชาญ"
  },
  {
    id: "paradiso",
    name: "Paradiso",
    thaiName: "หินแกรนิตพาราไดโซ",
    englishName: "PARADISO",
    productCode: "PD001",
    slug: "paradiso",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: paradisoImg,
    images: [paradisoImg],
    colors: ["Multi-colored", "Brown", "Gold", "Red"],
    colorsThai: ["หลากสี", "น้ำตาล", "ทอง", "แดง"],
    description: "Multi-colored granite with paradise-like beauty and unique patterns.",
    applications: [
      "Feature walls",
      "Artistic applications",
      "Unique countertops"
    ],
    applicationsThai: [
      "ผนังโชว์",
      "งานศิลปะ",
      "เคาน์เตอร์เฉพาะตัว"
    ],
    advantages: [
      "Multi-colored paradise-like beauty",
      "Unique patterns in every piece",
      "Creates stunning focal points"
    ],
    advantagesThai: [
      "ความงามหลากสีเหมือนสวนสวรรค์",
      "ลวดลายที่เฉพาะตัวในทุกชิ้น",
      "สร้างจุดสนใจที่สวยงาม"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Complex patterns require expert cutting",
    customCuttingThai: "ลวดลายซับซ้อนต้องการการตัดโดยผู้เชี่ยวชาญ",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Complex patterns require careful selection and matching.",
    noteThai: "ลวดลายซับซ้อนต้องการการคัดเลือกและจับคู่อย่างระมัดระวัง"
  },
  {
    id: "pink-porrino",
    name: "Pink Porrino",
    thaiName: "หินแกรนิตพิงค์ปอร์ริโน",
    englishName: "PINK PORRINO",
    productCode: "PP001",
    slug: "pink-porrino",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: pinkPorrinoImg,
    images: [pinkPorrinoImg],
    colors: ["Pink", "Gray", "White"],
    colorsThai: ["ชมพู", "เทา", "ขาว"],
    description: "Elegant pink granite with gray details perfect for sophisticated designs.",
    applications: [
      "Luxury interior decoration",
      "Bathroom vanities",
      "Decorative elements"
    ],
    applicationsThai: [
      "ตกแต่งภายในหรูหรา",
      "ท็อปห้องน้ำ",
      "องค์ประกอบตกแต่ง"
    ],
    advantages: [
      "Elegant pink tones with sophistication",
      "Gray mineral details add refinement",
      "Perfect for luxury feminine touches"
    ],
    advantagesThai: [
      "โทนสีชมพูหรูหราที่ซับซ้อน",
      "รายละเอียดแร่ธาตุสีเทาเพิ่มความละเอียดอ่อน",
      "เหมาะสำหรับสัมผัสหญิงสาวหรูหรา"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Proper sealing required for color vibrancy",
    customCuttingThai: "ต้องการการผนึกที่เหมาะสมเพื่อรักษาสีสัน",
    weightPerSqm: "26 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Spanish granite requiring careful maintenance to preserve color.",
    noteThai: "หินแกรนิตสเปนต้องการการดูแลอย่างระมัดระวังเพื่อรักษาสี"
  },
  {
    id: "tan-brown",
    name: "Tan Brown",
    thaiName: "หินแกรนิตแทนบราวน์",
    englishName: "TAN BROWN",
    productCode: "TB001",
    slug: "tan-brown",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: tanBrownImg,
    images: [tanBrownImg],
    colors: ["Tan", "Brown", "Black"],
    colorsThai: ["แทน", "น้ำตาล", "ดำ"],
    description: "Warm tan and brown granite perfect for traditional and modern designs.",
    applications: [
      "Kitchen and bathroom countertops",
      "Flooring applications",
      "Commercial installations"
    ],
    applicationsThai: [
      "เคาน์เตอร์ครัวและห้องน้ำ",
      "งานปูพื้น",
      "งานติดตั้งเชิงพาณิชย์"
    ],
    advantages: [
      "Versatile color combination",
      "Suitable for various design themes",
      "Consistent pattern and quality"
    ],
    advantagesThai: [
      "สีสันที่หลากหลาย",
      "เหมาะกับธีมการออกแบบต่างๆ",
      "ลวดลายและคุณภาพสม่ำเสมอ"
    ],
    standardSizes: ["60x60cm", "30x60cm", "120x60cm"],
    customCutting: "Standard cutting service",
    customCuttingThai: "บริการตัดมาตรฐาน",
    weightPerSqm: "26 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Popular choice for both residential and commercial use.",
    noteThai: "ตัวเลือกยอดนิยมสำหรับใช้ในบ้านและเชิงพาณิชย์"
  },
  {
    id: "uthai-pink",
    name: "Uthai Pink",
    thaiName: "หินแกรนิตอุทัยพิงค์",
    englishName: "UTHAI PINK",
    productCode: "UP001",
    slug: "uthai-pink",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: uthaiPinkImg,
    images: [uthaiPinkImg],
    colors: ["Pink", "Gray", "White"],
    colorsThai: ["ชมพู", "เทา", "ขาว"],
    description: "Local Thai pink granite with unique characteristics and cultural significance.",
    applications: [
      "Local architectural projects",
      "Cultural and traditional buildings",
      "Kitchen and bathroom countertops"
    ],
    applicationsThai: [
      "โปรเจคสถาปัตยกรรมท้องถิ่น",
      "อาคารทางวัฒนธรรมและดั้งเดิม",
      "เคาน์เตอร์ครัวและห้องน้ำ"
    ],
    advantages: [
      "Local Thai granite with cultural value",
      "Unique pink characteristics",
      "Supports local industry"
    ],
    advantagesThai: [
      "หินแกรนิตไทยท้องถิ่นที่มีคุณค่าทางวัฒนธรรม",
      "ลักษณะสีชมพูเฉพาะตัว",
      "สนับสนุนอุตสาหกรรมท้องถิ่น"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Local expertise recommended",
    customCuttingThai: "แนะนำความเชี่ยวชาญท้องถิ่น",
    weightPerSqm: "26 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Thai granite representing local craftsmanship and heritage.",
    noteThai: "หินแกรนิตไทยที่เป็นตัวแทนของงานฝีมือและมรดกท้องถิ่น"
  },
  {
    id: "velvet-white",
    name: "Velvet White",
    thaiName: "หินแกรนิตเวลเวทไวท์",
    englishName: "VELVET WHITE",
    productCode: "VW001",
    slug: "velvet-white",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: velvetWhiteImg,
    images: [velvetWhiteImg],
    colors: ["White", "Light Gray", "Cream"],
    colorsThai: ["ขาว", "เทาอ่อน", "ครีม"],
    description: "Soft white granite with velvet-like texture and elegant appearance.",
    applications: [
      "Modern interior design",
      "Kitchen and bathroom countertops",
      "Light commercial applications"
    ],
    applicationsThai: [
      "การออกแบบภายในสมัยใหม่",
      "เคาน์เตอร์ครัวและห้องน้ำ",
      "งานเชิงพาณิชย์เบา"
    ],
    advantages: [
      "Soft white color with velvet-like texture",
      "Creates bright clean spaces",
      "Elegant sophisticated appearance"
    ],
    advantagesThai: [
      "สีขาวนุ่มที่มีเนื้อสัมผัสเหมือนกำมะหยี่",
      "สร้างพื้นที่สะอาดสว่าง",
      "รูปลักษณ์หรูหราที่ซับซ้อน"
    ],
    standardSizes: ["60x60cm", "30x60cm", "120x60cm"],
    customCutting: "Regular sealing recommended for white granite",
    customCuttingThai: "แนะนำการผนึกเป็นประจำสำหรับแกรนิตสีขาว",
    weightPerSqm: "26 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "White granite requires careful maintenance to preserve appearance.",
    noteThai: "หินแกรนิตสีขาวต้องการการดูแลอย่างระมัดระวังเพื่อรักษารูปลักษณ์"
  },
  {
    id: "volga-blue",
    name: "Volga Blue",
    thaiName: "หินแกรนิตโวลก้าบลู",
    englishName: "VOLGA BLUE",
    productCode: "VB001",
    slug: "volga-blue",
    category: "granite",
    categoryThai: "หินแกรนิต",
    image: volgaBlueImg,
    images: [volgaBlueImg],
    colors: ["Blue", "White", "Gray"],
    colorsThai: ["น้ำเงิน", "ขาว", "เทา"],
    description: "Distinctive blue granite with unique patterns inspired by the Volga River.",
    applications: [
      "Feature applications",
      "Luxury interior design",
      "Premium countertops"
    ],
    applicationsThai: [
      "งานจุดเน้น",
      "การออกแบบภายในหรูหรา",
      "เคาน์เตอร์พรีเมี่ยม"
    ],
    advantages: [
      "Unique blue coloring with flowing patterns",
      "Reminiscent of flowing water",
      "Perfect for creating focal points"
    ],
    advantagesThai: [
      "สีน้ำเงินเฉพาะตัวที่มีลวดลายเหมือนการไหล",
      "ให้ความรู้สึกเหมือนน้ำที่ไหล",
      "เหมาะสำหรับสร้างจุดสนใจ"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Specialized care for unique patterns recommended",
    customCuttingThai: "แนะนำการดูแลเฉพาะสำหรับลวดลายเฉพาะตัว",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Unique patterns require expert installation and matching.",
    noteThai: "ลวดลายเฉพาะตัวต้องการการติดตั้งและจับคู่โดยผู้เชี่ยวชาญ"
  }
];

const marbleStones: Stone[] = [
  {
    id: "arabescato",
    name: "Arabescato",
    thaiName: "หินอ่อนอาราเบสกาโต้",
    englishName: "ARABESCATO",
    productCode: "AR001",
    slug: "arabescato",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: arabescatoImg,
    images: [arabescatoImg],
    colors: ["White", "Gray"],
    colorsThai: ["ขาว", "เทา"],
    description: "Classic Italian marble with elegant veining patterns and timeless beauty.",
    applications: [
      "Luxury bathroom vanities",
      "Wall cladding and decorative elements",
      "Artistic and sculpture applications"
    ],
    applicationsThai: [
      "ท็อปห้องน้ำหรูหรา",
      "ผนังและองค์ประกอบตกแต่ง",
      "งานศิลปะและแกะสลัก"
    ],
    advantages: [
      "Classic Italian marble with timeless beauty",
      "Elegant flowing veining patterns",
      "Perfect for luxury applications"
    ],
    advantagesThai: [
      "หินอ่อนอิตาลีคลาสสิกที่มีความงามเหนือกาลเวลา",
      "ลายเส้นที่ไหลเวียนอย่างหรูหรา",
      "เหมาะสำหรับงานหรูหรา"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Requires professional care and installation",
    customCuttingThai: "ต้องการการดูแลและติดตั้งโดยผู้เชี่ยวชาญ",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Premium Italian marble requiring specialized handling.",
    noteThai: "หินอ่อนอิตาลีพรีเมี่ยมต้องการการจัดการเฉพาะ"
  },
  {
    id: "black-forest",
    name: "Black Forest",
    thaiName: "หินอ่อนแบล็คฟอเรสต์",
    englishName: "BLACK FOREST",
    productCode: "BF001",
    slug: "black-forest",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: blackForestImg,
    images: [blackForestImg],
    colors: ["Black", "White"],
    colorsThai: ["ดำ", "ขาว"],
    description: "Dramatic black marble with white veining creating forest-like patterns.",
    applications: [
      "Accent walls and feature elements",
      "Bathroom vanities",
      "Luxury interior design"
    ],
    applicationsThai: [
      "ผนังเน้นและองค์ประกอบโชว์",
      "ท็อปห้องน้ำ",
      "การออกแบบภายในหรูหรา"
    ],
    advantages: [
      "Dramatic black color with white veining",
      "Forest-like patterns create unique appearance",
      "Perfect for creating bold statements"
    ],
    advantagesThai: [
      "สีดำโดดเด่นที่มีลายเส้นสีขาว",
      "ลวดลายเหมือนป่าไผ่สร้างรูปลักษณ์เฉพาะ",
      "เหมาะสำหรับสร้างการแสดงออกที่โดดเด่น"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Professional sealing essential for maintenance",
    customCuttingThai: "การผนึกโดยผู้เชี่ยวชาญจำเป็นสำหรับการดูแล",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Dramatic patterns require careful selection and matching.",
    noteThai: "ลวดลายที่โดดเด่นต้องการการคัดเลือกและจับคู่อย่างระมัดระวัง"
  },
  {
    id: "black-marquina",
    name: "Black Marquina",
    thaiName: "หินอ่อนแบล็คมาร์กิน่า",
    englishName: "BLACK MARQUINA",
    productCode: "BM001",
    slug: "black-marquina",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: blackMarquinaImg,
    images: [blackMarquinaImg],
    colors: ["Black", "White"],
    colorsThai: ["ดำ", "ขาว"],
    description: "Premium Spanish black marble with distinctive white veining.",
    applications: [
      "Luxury bathroom vanities",
      "Premium wall cladding",
      "High-end flooring applications"
    ],
    applicationsThai: [
      "ท็อปห้องน้ำหรูหรา",
      "ผนังตกแต่งพรีเมี่ยม",
      "งานปูพื้นระดับไฮเอนด์"
    ],
    advantages: [
      "Premium Spanish marble quality",
      "Distinctive white veining on black background",
      "Perfect for luxury applications"
    ],
    advantagesThai: [
      "คุณภาพหินอ่อนสเปนพรีเมี่ยม",
      "เส้นลายขาวโดดเด่นบนพื้นดำ",
      "เหมาะสำหรับงานหรูหรา"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Professional cutting and installation service",
    customCuttingThai: "บริการตัดและติดตั้งมืออาชีพ",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Premium grade marble requiring professional installation.",
    noteThai: "หินอ่อนเกรดพรีเมี่ยมต้องติดตั้งโดยช่างมืออาชีพ"
  },
  {
    id: "cat-eye",
    name: "Cat Eye",
    thaiName: "หินอ่อนแคทอาย",
    englishName: "CAT EYE",
    productCode: "CE001",
    slug: "cat-eye",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: catEyeImg,
    images: [catEyeImg],
    colors: ["Gray", "White", "Brown"],
    colorsThai: ["เทา", "ขาว", "น้ำตาล"],
    description: "Unique marble with cat eye-like patterns and mesmerizing appearance.",
    applications: [
      "Decorative elements and artistic features",
      "Accent walls",
      "Unique interior design projects"
    ],
    applicationsThai: [
      "องค์ประกอบตกแต่งและจุดเด่นทางศิลปะ",
      "ผนังเน้น",
      "โปรเจคการออกแบบภายในเฉพาะตัว"
    ],
    advantages: [
      "Unique cat eye-like concentric patterns",
      "Mesmerizing visual effects",
      "Perfect for creating conversation pieces"
    ],
    advantagesThai: [
      "ลวดลายเป็นวงกลมเหมือนตาแมวเฉพาะตัว",
      "เอฟเฟกต์ทางสายตาที่น่าหลงใหล",
      "เหมาะสำหรับสร้างชิ้นงานที่น่าพูดถึง"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Specialized care required for unique patterns",
    customCuttingThai: "ต้องการการดูแลเฉพาะสำหรับลวดลายเฉพาะตัว",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Unique patterns make each piece one-of-a-kind.",
    noteThai: "ลวดลายเฉพาะตัวทำให้แต่ละชิ้นไม่มีใครเหมือน"
  },
  {
    id: "dark-green",
    name: "Dark Green",
    thaiName: "หินอ่อนดาร์คกรีน",
    englishName: "DARK GREEN",
    productCode: "DG001",
    slug: "dark-green",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: darkGreenImg,
    images: [darkGreenImg],
    colors: ["Green", "Dark Green", "Black"],
    colorsThai: ["เขียว", "เขียวเข้ม", "ดำ"],
    description: "Rich green marble perfect for creating natural and calming environments.",
    applications: [
      "Spa and wellness environments",
      "Bathroom applications",
      "Natural themed interiors"
    ],
    applicationsThai: [
      "สภาพแวดล้อมสปาและเพื่อสุขภาพ",
      "งานห้องน้ำ",
      "การตกแต่งภายในธีมธรรมชาติ"
    ],
    advantages: [
      "Rich green color creates calming atmosphere",
      "Perfect for spa-like environments",
      "Natural connection to nature"
    ],
    advantagesThai: [
      "สีเขียวเข้มสร้างบรรยากาศที่สงบ",
      "เหมาะสำหรับสภาพแวดล้อมแบบสปา",
      "เชื่อมโยงกับธรรมชาติ"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Regular sealing recommended to maintain color",
    customCuttingThai: "แนะนำการผนึกเป็นประจำเพื่อรักษาสี",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Natural green variations may occur in each piece.",
    noteThai: "การแปรผันของสีเขียวธรรมชาติอาจเกิดขึ้นในแต่ละชิ้น"
  },
  {
    id: "limestone-cloudy",
    name: "Limestone Cloudy",
    thaiName: "หินอ่อนคราวน์ดี้",
    englishName: "LIMESTONE CLOUDY",
    productCode: "-",
    slug: "limestone-cloudy",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: limestoneCloudyImg,
    images: [limestoneCloudyImg],
    colors: ["Cream"],
    colorsThai: ["ครีม"],
    description: "Soft limestone with cloudy patterns perfect for traditional applications.",
    applications: [
      "Suitable for carving and wall decoration as showcase work",
      "Can be used for both indoor and outdoor decoration as desired"
    ],
    applicationsThai: [
      "เหมาะสำหรับใช้งานแกะสลัก และทำผนังห้อง เป็นงานโชว์",
      "สามารถใช้ตกแต่งได้ทั้งภายในตามที่คุณต้องการ"
    ],
    advantages: [
      "Marble can help retain coolness, making rooms cool and comfortable, helping save electricity costs",
      "Once installed, the stone becomes very strong",
      "Gives the feeling of being in the middle of nature"
    ],
    advantagesThai: [
      "หินอ่อนสามารถช่วยเก็บความเย็นได้ ทำให้ห้องเย็นสบาย ช่วยประหยัดค่าไฟได้อีกด้วย",
      "เมื่อติดตั้งแล้วตัวหินจะมีความแข็งแรงมาก",
      "ให้ความรู้สึกเหมือนอยู่ท่ามกลางธรรมชาติ"
    ],
    standardSizes: ["60x60cm", "30x60cm", "40x80cm"],
    customCutting: "Customers can order custom cutting according to desired size",
    customCuttingThai: "ลูกค้าสามารถสั่งตัดได้ตามขนาดที่ต้องการ",
    weightPerSqm: "-",
    thickness: "-",
    note: "Marble and granite are naturally occurring stones. Colors may not match samples exactly and patterns are unique to each piece. Surface may not be perfectly uniform.",
    noteThai: "หินอ่อน หินแกรนิตเป็นหินเกิดจากธรรมชาติ สีสันอาจไม่เหมือนตัวอย่าง และลวดลายเป็นเอกลักษณ์เฉพาะตัว พื้นผิวอาจไม่เรียบสม่ำเสมอ"
  },
  {
    id: "sunny-creama",
    name: "Sunny Creama",
    thaiName: "หินอ่อนซันนี่ครีม",
    englishName: "SUNNY CREAMA",
    productCode: "SC001",
    slug: "sunny-creama",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: sunnyCremaImg,
    images: [sunnyCremaImg],
    colors: ["Cream", "Beige", "Light Brown"],
    colorsThai: ["ครีม", "เบจ", "น้ำตาลอ่อน"],
    description: "Warm cream-colored marble bringing sunshine and warmth to any space.",
    applications: [
      "Warm interior design schemes",
      "Bathroom vanities",
      "Traditional and rustic applications"
    ],
    applicationsThai: [
      "โครงการออกแบบภายในโทนอบอุ่น",
      "ท็อปห้องน้ำ",
      "งานแบบดั้งเดิมและชนบท"
    ],
    advantages: [
      "Warm cream colors bring sunshine to spaces",
      "Creates inviting comfortable environments",
      "Perfect for traditional warm designs"
    ],
    advantagesThai: [
      "สีครีมอบอุ่นนำแสงแดดมาสู่พื้นที่",
      "สร้างสภาพแวดล้อมที่เชื้อเชิญและสบาย",
      "เหมาะสำหรับการออกแบบโทนอบอุ่นแบบดั้งเดิม"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Regular care and sealing recommended for cream colors",
    customCuttingThai: "แนะนำการดูแลและผนึกเป็นประจำสำหรับสีครีม",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Cream colored marble requires careful maintenance.",
    noteThai: "หินอ่อนสีครีมต้องการการดูแลอย่างระมัดระวัง"
  },
  {
    id: "super-white",
    name: "Super White",
    thaiName: "หินอ่อนซุปเปอร์ไวท์",
    englishName: "SUPER WHITE",
    productCode: "SW001",
    slug: "super-white",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: superWhiteImg,
    images: [superWhiteImg],
    colors: ["White"],
    colorsThai: ["ขาว"],
    description: "Pure white marble with minimal veining for modern, clean aesthetics.",
    applications: [
      "Modern interior design",
      "Kitchen and bathroom applications",
      "Contemporary architectural projects"
    ],
    applicationsThai: [
      "การออกแบบภายในสมัยใหม่",
      "งานครัวและห้องน้ำ",
      "โปรเจคสถาปัตยกรรมร่วมสมัย"
    ],
    advantages: [
      "Pure white color for modern aesthetics",
      "Minimal veining for clean appearance",
      "Perfect for contemporary designs"
    ],
    advantagesThai: [
      "สีขาวบริสุทธิ์สำหรับความงามสมัยใหม่",
      "ลายเส้นน้อยให้ความสะอาดตา",
      "เหมาะสำหรับการออกแบบร่วมสมัย"
    ],
    standardSizes: ["60x60cm", "30x60cm", "120x60cm"],
    customCutting: "Precision cutting for modern applications",
    customCuttingThai: "บริการตัดแม่นยำสำหรับงานสมัยใหม่",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "White marble requires careful maintenance and regular sealing.",
    noteThai: "หินอ่อนสีขาวต้องดูแลอย่างระมัดระวังและผนึกเป็นประจำ"
  },
  {
    id: "titanium-black",
    name: "Titanium Black",
    thaiName: "หินอ่อนไทเทเนียมแบล็ค",
    englishName: "TITANIUM BLACK",
    productCode: "TB001",
    slug: "titanium-black",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: titaniumBlackImg,
    images: [titaniumBlackImg],
    colors: ["Black", "Dark Gray"],
    colorsThai: ["ดำ", "เทาเข้ม"],
    description: "Modern black marble with titanium-like strength and contemporary appeal.",
    applications: [
      "Modern interior design",
      "Luxury bathroom applications",
      "Contemporary commercial spaces"
    ],
    applicationsThai: [
      "การออกแบบภายในสมัยใหม่",
      "งานห้องน้ำหรูหรา",
      "พื้นที่เชิงพาณิชย์ร่วมสมัย"
    ],
    advantages: [
      "Modern black color with contemporary appeal",
      "Strong and durable like titanium",
      "Perfect for sophisticated modern spaces"
    ],
    advantagesThai: [
      "สีดำสมัยใหม่ที่ดูร่วมสมัย",
      "แข็งแรงและทนทานเหมือนไทเทเนียม",
      "เหมาะสำหรับพื้นที่สมัยใหม่ที่ซับซ้อน"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Modern marble care and professional installation recommended",
    customCuttingThai: "แนะนำการดูแลหินอ่อนสมัยใหม่และการติดตั้งโดยผู้เชี่ยวชาญ",
    weightPerSqm: "28 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Contemporary marble requiring modern installation techniques.",
    noteThai: "หินอ่อนร่วมสมัยต้องการเทคนิคการติดตั้งสมัยใหม่"
  },
  {
    id: "tobacco-brown",
    name: "Tobacco Brown",
    thaiName: "หินอ่อนโทแบคโคบราวน์",
    englishName: "TOBACCO BROWN",
    productCode: "TBR001",
    slug: "tobacco-brown",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: tobaccoBrownImg,
    images: [tobaccoBrownImg],
    colors: ["Brown", "Tobacco Brown", "Cream"],
    colorsThai: ["น้ำตาล", "น้ำตาลยาสูบ", "ครีม"],
    description: "Rich brown marble with tobacco-like coloring for warm, inviting spaces.",
    applications: [
      "Traditional interior designs",
      "Rustic and warm applications",
      "Feature elements for cozy spaces"
    ],
    applicationsThai: [
      "การออกแบบภายในแบบดั้งเดิม",
      "งานแบบชนบทและอบอุ่น",
      "องค์ประกอบเด่นสำหรับพื้นที่อบอุ่น"
    ],
    advantages: [
      "Rich brown tobacco-like coloring",
      "Creates warm inviting atmospheres",
      "Perfect for traditional and rustic designs"
    ],
    advantagesThai: [
      "สีน้ำตาลเข้มเหมือนใบยาสูบ",
      "สร้างบรรยากาศอบอุ่นและเชื้อเชิญ",
      "เหมาะสำหรับการออกแบบแบบดั้งเดิมและชนบท"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Regular sealing and care required for brown marble",
    customCuttingThai: "ต้องการการผนึกและดูแลเป็นประจำสำหรับหินอ่อนสีน้ำตาล",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Rich brown colors may vary naturally in each piece.",
    noteThai: "สีน้ำตาลเข้มอาจแปรผันตามธรรมชาติในแต่ละชิ้น"
  },
  {
    id: "travertino",
    name: "Travertino",
    thaiName: "หินอ่อนทราเวอร์ติโน",
    englishName: "TRAVERTINO",
    productCode: "TR001",
    slug: "travertino",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: travertinoImg,
    images: [travertinoImg],
    colors: ["Cream", "Beige"],
    colorsThai: ["ครีม", "เบจ"],
    description: "Classic travertine with natural pores and ancient Roman heritage.",
    applications: [
      "Traditional and historical architecture",
      "Exterior wall cladding",
      "Flooring for classic designs"
    ],
    applicationsThai: [
      "สถาปัตยกรรมแบบดั้งเดิมและประวัติศาสตร์",
      "ผนังภายนอก",
      "งานปูพื้นสำหรับการออกแบบคลาสสิก"
    ],
    advantages: [
      "Natural porous texture",
      "Historical significance and beauty",
      "Excellent for traditional designs"
    ],
    advantagesThai: [
      "เนื้อรูพรุนธรรมชาติ",
      "ความสำคัญทางประวัติศาสตร์และความงาม",
      "เยี่ยมสำหรับการออกแบบแบบดั้งเดิม"
    ],
    standardSizes: ["60x60cm", "40x40cm", "80x40cm"],
    customCutting: "Traditional cutting methods available",
    customCuttingThai: "บริการตัดแบบดั้งเดิม",
    weightPerSqm: "25 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Highly porous stone requiring specialized sealing and care.",
    noteThai: "หินรูพรุนสูงต้องใช้การผนึกและดูแลเฉพาะ"
  },
  {
    id: "white-carrara",
    name: "White Carrara",
    thaiName: "หินอ่อนไวท์คาราร่า",
    englishName: "WHITE CARRARA",
    productCode: "WC001",
    slug: "white-carrara",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: whiteCarraraImg,
    images: [whiteCarraraImg],
    colors: ["White", "Gray"],
    colorsThai: ["ขาว", "เทา"],
    description: "World-famous Italian marble used by Michelangelo and other masters.",
    applications: [
      "Luxury interior decoration",
      "Sculpture and artistic projects",
      "Premium countertops and vanities"
    ],
    applicationsThai: [
      "ตกแต่งภายในหรูหรา",
      "งานแกะสลักและงานศิลปะ",
      "เคาน์เตอร์และท็อประดับพรีเมี่ยม"
    ],
    advantages: [
      "Premium quality marble with timeless beauty",
      "Highly durable and long-lasting",
      "Classic elegant appearance"
    ],
    advantagesThai: [
      "หินอ่อนคุณภาพพรีเมี่ยมที่มีความงามเหนือกาลเวลา",
      "ทนทานและคงทนยาวนาน",
      "รูปลักษณ์คลาสสิกที่หรูหรา"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Custom cutting available according to specifications",
    customCuttingThai: "รับสั่งตัดตามขนาดที่ต้องการ",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Natural marble may vary in color and veining patterns from samples shown.",
    noteThai: "หินอ่อนธรรมชาติอาจมีสีและลวดลายที่แตกต่างจากตัวอย่างที่แสดง"
  },
  {
    id: "white-venus",
    name: "White Venus",
    thaiName: "หินอ่อนไวท์วีนัส",
    englishName: "WHITE VENUS",
    productCode: "WV001",
    slug: "white-venus",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: whiteVenusImg,
    images: [whiteVenusImg],
    colors: ["White", "Light Gray"],
    colorsThai: ["ขาว", "เทาอ่อน"],
    description: "Elegant white marble with goddess-like beauty and timeless appeal.",
    applications: [
      "Luxury bathroom applications",
      "Elegant interior design",
      "Classical and premium projects"
    ],
    applicationsThai: [
      "งานห้องน้ำหรูหรา",
      "การออกแบบภายในที่หรูหรา",
      "โปรเจคคลาสสิกและพรีเมี่ยม"
    ],
    advantages: [
      "Goddess-like beauty with elegant white coloring",
      "Timeless appeal and sophistication",
      "Perfect for classical luxury designs"
    ],
    advantagesThai: [
      "ความงามเหมือนเทพธิดาด้วยสีขาวหรูหรา",
      "ความนิยมเหนือกาลเวลาและความซับซ้อน",
      "เหมาะสำหรับการออกแบบหรูหราแบบคลาสสิก"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Elegant marble requires careful maintenance and protection",
    customCuttingThai: "หินอ่อนหรูหราต้องการการดูแลและป้องกันอย่างระมัดระวัง",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Premium white marble requiring specialized care.",
    noteThai: "หินอ่อนสีขาวพรีเมี่ยมต้องการการดูแลเฉพาะ"
  },
  {
    id: "white-volakas",
    name: "White Volakas",
    thaiName: "หินอ่อนไวท์โวลากาส",
    englishName: "WHITE VOLAKAS",
    productCode: "WVL001",
    slug: "white-volakas",
    category: "marble",
    categoryThai: "หินอ่อน",
    image: whiteVolakasImg,
    images: [whiteVolakasImg],
    colors: ["White", "Gray"],
    colorsThai: ["ขาว", "เทา"],
    description: "Greek white marble with distinctive veining patterns and ancient heritage.",
    applications: [
      "Classical architecture",
      "Luxury interior design",
      "Traditional and high-end projects"
    ],
    applicationsThai: [
      "สถาปัตยกรรมคลาสสิก",
      "การออกแบบภายในหรูหรา",
      "โปรเจคแบบดั้งเดิมและไฮเอนด์"
    ],
    advantages: [
      "Greek marble with ancient heritage",
      "Distinctive veining patterns",
      "Exceptional quality and beauty"
    ],
    advantagesThai: [
      "หินอ่อนกรีกที่มีมรดกโบราณ",
      "ลวดลายเส้นลายที่โดดเด่น",
      "คุณภาพและความงามพิเศษ"
    ],
    standardSizes: ["60x60cm", "30x60cm", "80x40cm"],
    customCutting: "Classical marble care and professional expertise recommended",
    customCuttingThai: "แนะนำการดูแลหินอ่อนแบบคลาสสิกและความเชี่ยวชาญของผู้เชี่ยวชาญ",
    weightPerSqm: "27 kg/ตร.ม.",
    thickness: "2cm, 3cm",
    note: "Ancient Greek marble with historical significance.",
    noteThai: "หินอ่อนกรีกโบราณที่มีความสำคัญทางประวัติศาสตร์"
  }
];

export const stoneData: Stone[] = [...graniteStones, ...marbleStones];

export const getStoneBySlug = (slug: string): Stone | undefined => {
  return stoneData.find(stone => stone.slug === slug);
};

export const getStonesByCategory = (category: "granite" | "marble"): Stone[] => {
  return stoneData.filter(stone => stone.category === category);
};