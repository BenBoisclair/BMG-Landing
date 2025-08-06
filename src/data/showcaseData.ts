export interface ShowcaseItem {
  id: string;
  mainImage: string;
  thumbnails: string[];
  title: string;
  location: string;
  description: string;
}

export interface ShowcaseCategory {
  key: string;
  items: ShowcaseItem[];
}

export const showcaseData: ShowcaseCategory[] = [
  {
    key: "religious",
    items: [
      {
        id: "wat-navamintararachuthit",
        mainImage: "/src/assets/Portfolio/1/1/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/1/1/1.jpg",
          "/src/assets/Portfolio/1/1/2.jpg",
          "/src/assets/Portfolio/1/1/3.jpg",
          "/src/assets/Portfolio/1/1/4.jpg",
        ],
        title: "วัดนวมินทรราชูทิศ",
        location: "รัฐแมสซาชูเซตส์ สหรัฐอเมริกา",
        description:
          "พระพุทธรูป หินอ่อน แกะสลัก ปางสมาธิ ใช้ หินอ่อนไวท์ทาร์ซอส (White Thassos) ในการแกะสลัก ซึ่งหินชนิดนี้จะมีความเปล่งประกายคล้ายกับหยกสีขาว ประดิษฐานที่ ชั้น 2 ห้องวิปัสสนากรรมฐาน (Meditation Center) ณ วัดนวมินทรราชูทิศ รัฐแมสซาชูเซตส์ สหรัฐอเมริกา",
      },
      {
        id: "wat-pa-klang-non-phu",
        mainImage: "/src/assets/Portfolio/1/2/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/1/2/1.jpg",
          "/src/assets/Portfolio/1/2/2.jpg",
          "/src/assets/Portfolio/1/2/3.jpg",
          "/src/assets/Portfolio/1/2/4.jpg",
        ],
        title: "วัดป่ากลางโนนภู่",
        location: "จังหวัดสกลนคร",
        description:
          "พระพุทธรูป หินอ่อน แกะสลัก ปางสมาธิ ใช้ หินอ่อนคราวน์ดี้ (Cloudy) ในการแกะสลัก ซึ่งหินชนิดนี้จะไม่ขึ้นเงา สีออกครีมอ่อน ๆ และมีเนื้อสัมผัสคล้ายกับหินปูน ประดิษฐาน ณ วัดป่ากลางโนนภู่ จังหวัดสกลนคร",
      },
      {
        id: "wat-cholprathan-rangsrit",
        mainImage: "/src/assets/Portfolio/1/3/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/1/3/1.jpg",
          "/src/assets/Portfolio/1/3/2.jpg",
          "/src/assets/Portfolio/1/3/3.jpg",
        ],
        title: "วัดชลประทานรังสฤษดิ์",
        location: "จังหวัดนนทบุรี",
        description:
          "พระพุทธรูป หินอ่อน แกะสลัก ศิลปะแบบคันธารราฐ ปางประทานพร ใช้ หินอ่อนไวท์ทาร์ซอส (White Thassos) ในการแกะสลัก โดยองค์นี้มีการขัดผิวแบบเรียบ มีความเปล่งประกายคล้ายกับหยกสีขาว ประดิษฐานที่ ชั้น 3 อาคารปั�ญานันทานุสรณ์ ณ วัดชลประทานรังสฤษดิ์ จังหวัดนนทบุรี",
      },
    ],
  },
  {
    key: "portraits",
    items: [
      {
        id: "luang-pu-man",
        mainImage: "/src/assets/Portfolio/2/1/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/2/1/1.jpg",
          "/src/assets/Portfolio/2/1/2.jpg",
          "/src/assets/Portfolio/2/1/3.jpg",
        ],
        title: "หลวงปู่มั่น ภูริทัตโต",
        location: "วัดป่าสุทธาวาส จังหวัดสกลนคร",
        description:
          "รูปเหมือน หินอ่อน แกะสลัก หลวงปู่มั่น ภูริทัตโต วัดป่าสุทธาวาส จังหวัดอุบลราชธานี แกะสลักจาก หินอ่อน ไวท์คาราร่า (White Carrara) โดยมีผิวสัมผัสแบบ ขัดเรียบ ไม่เงา ขนาดเท่าองค์จริง",
      },
      {
        id: "luang-ta-maha-bua",
        mainImage: "/src/assets/Portfolio/2/2/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/2/2/1.jpg",
          "/src/assets/Portfolio/2/2/2.jpg",
          "/src/assets/Portfolio/2/2/3.jpg",
        ],
        title: "หลวงตามหาบัว ญาณสมฺปนฺโน",
        location: "วัดเกสรศีลคุณ จังหวัดอุดรธานี",
        description:
          "รูปเหมือน หินอ่อน แกะสลัก หลวงตามหาบัว ญาณสมฺปนฺโน วัดเกสรศีลคุณ จังหวัดอุดรธานี แกะสลักจาก หินอ่อน ไวท์คาราร่า (White Carrara) โดยมีผิวสัมผัสแบบ ขัดเรียบ ไม่เงา ขนาดเท่าองค์จริง",
      },
      {
        id: "luang-pu-kruba-wong",
        mainImage: "/src/assets/Portfolio/2/3/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/2/3/1.jpg",
          "/src/assets/Portfolio/2/3/2.jpg",
        ],
        title: "หลวงปู่ครูบาวงศ์",
        location: "วัดพระพุทธบาทห้วยต้ม จังหวัดลำพูน",
        description:
          "รูปเหมือน หินอ่อน แกะสลัก หลวงปู่ครูบาวงศ์ วัดพระพุทธบาทห้วยต้ม จังหวัดลำพูน แกะสลักจาก หินอ่อน ไวท์คาราร่า (White Carrara) โดยมีผิวสัมผัสแบบ ขัดเรียบ ไม่เงา ขนาดเท่าองค์จริง",
      },
      {
        id: "luang-pho-sod",
        mainImage: "/src/assets/Portfolio/2/4/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/2/4/1.jpg",
          "/src/assets/Portfolio/2/4/2.jpg",
          "/src/assets/Portfolio/2/4/3.jpg",
        ],
        title: "หลวงพ่อสด จนฺทสโร",
        location: "วัดปากน้ำ ภาษีเจริญ กรุงเทพมหานคร",
        description:
          "รูปเหมือน หินอ่อน แกะสลัก หลวงพ่อสด จนฺทสโร วัดปากน้ำ ภาษีเจริญ จังหวัดกรุงเทพมหานคร แกะสลักจาก หินอ่อน ไวท์คาราร่า (White Carrara) โดยมีผิวสัมผัสแบบ ขัดเรียบ ไม่เงา ขนาดเท่าองค์จริง",
      },
      {
        id: "mae-chi-tossaporn",
        mainImage: "/src/assets/Portfolio/2/5/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/2/5/1.jpg",
          "/src/assets/Portfolio/2/5/2.jpg",
          "/src/assets/Portfolio/2/5/3.jpg",
          "/src/assets/Portfolio/2/5/4.jpg",
        ],
        title: "แม่ชีทศพร",
        location: "บ้านเพชรบำเพ็ญ จังหวัดเพชรบุรี",
        description:
          "รูปเหมือน หินอ่อน แกะสลัก แม่ชีทศพร ตั้งอยู่ที่บ้านเพชรบำเพ็ญ จังหวัดเพชรบุรี แกะสลักจาก หินอ่อน ไวท์ทาร์ซอส (White Thassos) ซึ่งหินชนิดนี้จะมีความเปล่งประกาย คล้ายกับหยกสีขาว ขนาดเท่าตัวจริง",
      },
      {
        id: "president-chusak",
        mainImage: "/src/assets/Portfolio/2/6/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/2/6/1.jpg",
          "/src/assets/Portfolio/2/6/2.jpg",
          "/src/assets/Portfolio/2/6/3.jpg",
          "/src/assets/Portfolio/2/6/4.jpg",
          "/src/assets/Portfolio/2/6/5.jpg",
        ],
        title: "ท่านประธาน ชูศักดิ์ ศรีเจริญล่ำซำ",
        location: "BMG บางกอกโมเดอร์นแกรนิต",
        description:
          "รูปเหมือน หินอ่อน แกะสลัก ท่านประธาน ชูศักดิ์ ศรีเจริญล่ำซำ ตั้งอยู่ที่ BMG บางกอกโมเดอร์นแกรนิต แกะสลักจาก หินอ่อน ไวท์คาราร่า (White Carrara) โดยมีผิวสัมผัสแบบ ขัดเรียบ ไม่เงา รูปเหมือนเท่าตัวจริง",
      },
    ],
  },
  {
    key: "architecture",
    items: [
      {
        id: "wat-sothorn",
        mainImage: "/src/assets/Portfolio/3/1/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/3/1/1.jpg",
          "/src/assets/Portfolio/3/1/2.jpg",
          "/src/assets/Portfolio/3/1/3.jpg",
          "/src/assets/Portfolio/3/1/4.jpg",
        ],
        title: "วัดโสธรวรารามวรวิหาร",
        location: "จังหวัดฉะเชิงเทรา",
        description:
          "พระอุโบสถหลังใหม่ที่สร้างขึ้นตามแบบรัตนโกสินทร์ประยุกต์ ณวัดโสธรวรารามวรวิหาร จังหวัดฉะเชิงเทรา การตกแต่งผนังภายนอกใช้หินอ่อนไวท์คาราร่า (White Carrara) จากประเทศอิตาลี",
      },
      {
        id: "dharma-museum",
        mainImage: "/src/assets/Portfolio/3/2/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/3/2/1.jpg",
          "/src/assets/Portfolio/3/2/2.jpg",
          "/src/assets/Portfolio/3/2/3.jpg",
          "/src/assets/Portfolio/3/2/4.jpg",
        ],
        title: "พิพิธภัณฑ์ธรรมเจดีย์ พระธรรมวิสุทธิมงคล",
        location: "",
        description:
          "หลวงตาพระมหาบัว ญาณสัมปันโน จังหวัดอุดรธานี พิพิธภัณฑ์ธรรมเจดีย์ พระธรรมวิสุทธิมงคล",
      },
      {
        id: "wat-pa-amparo",
        mainImage: "/src/assets/Portfolio/3/3/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/3/3/1.jpg",
          "/src/assets/Portfolio/3/3/2.jpg",
          "/src/assets/Portfolio/3/3/3.jpg",
          "/src/assets/Portfolio/3/3/4.jpg",
          "/src/assets/Portfolio/3/3/5.jpg",
        ],
        title: "พิพิธภัณฑ์ฉันทกรานุสรณ์",
        location: "วัดป่าอัมพโรปัญญาวนาราม จังหวัดชลบุรี",
        description: "",
      },
    ],
  },
  {
    key: "sculpture",
    items: [
      {
        id: "phra-that-buddha-ratana",
        mainImage: "/src/assets/Portfolio/4/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/4/1.jpg",
          "/src/assets/Portfolio/4/2.jpg",
          "/src/assets/Portfolio/4/3.jpg",
          "/src/assets/Portfolio/4/4.jpg",
          "/src/assets/Portfolio/4/5.jpg",
        ],
        title: "ประติมากรรมพระธาตุพุทธรัตนมหามงคล",
        location: "วัดป่าดานวิเวก จังหวัดบึงกาฬ",
        description:
          "แกะสลักจาก หินแกรนิต เขาโทน (Kaothone) มีทั้งหมด 5 ชั้น โดยแต่ละชั้น จะมีคำสั่งสอนของพระพุทธเจ้าจาลึกไว้ ส่วนด้านบนเป็นดอกบัวตูม",
      },
    ],
  },
  {
    key: "furniture",
    items: [
      {
        id: "circle-plate",
        mainImage: "/src/assets/Portfolio/5/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/5/1.jpg",
          "/src/assets/Portfolio/5/2.jpg",
          "/src/assets/Portfolio/5/3.jpg",
        ],
        title: "Modern Style Table โต๊ะทรงสี่เหลี่ยมผืนผ้า",
        location: "ผลิตจากหินอ่อนแท้ 100%",
        description: "",
      },
    ],
  },
];