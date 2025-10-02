// Import all portfolio images
// Religious category (1)
import religious1_1_1 from "@/assets/Portfolio/1/1/1.jpg";
import religious1_1_2 from "@/assets/Portfolio/1/1/2.jpg";
import religious1_1_3 from "@/assets/Portfolio/1/1/3.jpg";
import religious1_1_4 from "@/assets/Portfolio/1/1/4.jpg";
import religious1_2_1 from "@/assets/Portfolio/1/2/1.jpg";
import religious1_2_2 from "@/assets/Portfolio/1/2/2.jpg";
import religious1_2_3 from "@/assets/Portfolio/1/2/3.jpg";
import religious1_2_4 from "@/assets/Portfolio/1/2/4.jpg";
import religious1_3_1 from "@/assets/Portfolio/1/3/1.jpg";
import religious1_3_2 from "@/assets/Portfolio/1/3/2.jpg";
import religious1_3_3 from "@/assets/Portfolio/1/3/3.jpg";

// Portraits category (2)
import portraits2_1_1 from "@/assets/Portfolio/2/1/1.jpg";
import portraits2_1_2 from "@/assets/Portfolio/2/1/2.jpg";
import portraits2_1_3 from "@/assets/Portfolio/2/1/3.jpg";
import portraits2_2_1 from "@/assets/Portfolio/2/2/1.jpg";
import portraits2_2_2 from "@/assets/Portfolio/2/2/2.jpg";
import portraits2_2_3 from "@/assets/Portfolio/2/2/3.jpg";
import portraits2_3_1 from "@/assets/Portfolio/2/3/1.jpg";
import portraits2_3_2 from "@/assets/Portfolio/2/3/2.jpg";
import portraits2_4_1 from "@/assets/Portfolio/2/4/1.jpg";
import portraits2_4_2 from "@/assets/Portfolio/2/4/2.jpg";
import portraits2_4_3 from "@/assets/Portfolio/2/4/3.jpg";
import portraits2_5_1 from "@/assets/Portfolio/2/5/1.jpg";
import portraits2_5_2 from "@/assets/Portfolio/2/5/2.jpg";
import portraits2_5_3 from "@/assets/Portfolio/2/5/3.jpg";
import portraits2_5_4 from "@/assets/Portfolio/2/5/4.jpg";
import portraits2_6_1 from "@/assets/Portfolio/2/6/1.jpg";
import portraits2_6_2 from "@/assets/Portfolio/2/6/2.jpg";
import portraits2_6_3 from "@/assets/Portfolio/2/6/3.jpg";
import portraits2_6_4 from "@/assets/Portfolio/2/6/4.jpg";
import portraits2_6_5 from "@/assets/Portfolio/2/6/5.jpg";

// Architecture category (3)
import architecture3_1_1 from "@/assets/Portfolio/3/1/1.jpg";
import architecture3_1_2 from "@/assets/Portfolio/3/1/2.jpg";
import architecture3_1_3 from "@/assets/Portfolio/3/1/3.jpg";
import architecture3_1_4 from "@/assets/Portfolio/3/1/4.jpg";
import architecture3_2_1 from "@/assets/Portfolio/3/2/1.jpg";
import architecture3_2_2 from "@/assets/Portfolio/3/2/2.jpg";
import architecture3_2_3 from "@/assets/Portfolio/3/2/3.jpg";
import architecture3_2_4 from "@/assets/Portfolio/3/2/4.jpg";
import architecture3_3_1 from "@/assets/Portfolio/3/3/1.jpg";
import architecture3_3_2 from "@/assets/Portfolio/3/3/2.jpg";
import architecture3_3_3 from "@/assets/Portfolio/3/3/3.jpg";
import architecture3_3_4 from "@/assets/Portfolio/3/3/4.jpg";
import architecture3_3_5 from "@/assets/Portfolio/3/3/5.jpg";

// Sculpture category (4)
import sculpture4_1 from "@/assets/Portfolio/4/1.jpg";
import sculpture4_2 from "@/assets/Portfolio/4/2.jpg";
import sculpture4_3 from "@/assets/Portfolio/4/3.jpg";
import sculpture4_4 from "@/assets/Portfolio/4/4.jpg";
import sculpture4_5 from "@/assets/Portfolio/4/5.jpg";

// Furniture category (5)
import furniture5_1 from "@/assets/Portfolio/5/1.jpg";
import furniture5_2 from "@/assets/Portfolio/5/2.jpg";
import furniture5_3 from "@/assets/Portfolio/5/3.jpg";

export interface ShowcaseItem {
  id: string;
  mainImage: ImageMetadata;
  thumbnails: ImageMetadata[];
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
        mainImage: religious1_1_1,
        thumbnails: [
          religious1_1_1,
          religious1_1_2,
          religious1_1_3,
          religious1_1_4,
        ],
      },
      {
        id: "wat-pa-klang-non-phu",
        mainImage: religious1_2_1,
        thumbnails: [
          religious1_2_1,
          religious1_2_2,
          religious1_2_3,
          religious1_2_4,
        ],
      },
      {
        id: "wat-cholprathan-rangsrit",
        mainImage: religious1_3_1,
        thumbnails: [
          religious1_3_1,
          religious1_3_2,
          religious1_3_3,
        ],
      },
    ],
  },
  {
    key: "portraits",
    items: [
      {
        id: "luang-pu-man",
        mainImage: portraits2_1_1,
        thumbnails: [
          portraits2_1_1,
          portraits2_1_2,
          portraits2_1_3,
        ],
      },
      {
        id: "luang-ta-maha-bua",
        mainImage: portraits2_2_1,
        thumbnails: [
          portraits2_2_1,
          portraits2_2_2,
          portraits2_2_3,
        ],
      },
      {
        id: "luang-pu-kruba-wong",
        mainImage: portraits2_3_1,
        thumbnails: [
          portraits2_3_1,
          portraits2_3_2,
        ],
      },
      {
        id: "luang-pho-sod",
        mainImage: portraits2_4_1,
        thumbnails: [
          portraits2_4_1,
          portraits2_4_2,
          portraits2_4_3,
        ],
      },
      {
        id: "mae-chi-tossaporn",
        mainImage: portraits2_5_1,
        thumbnails: [
          portraits2_5_1,
          portraits2_5_2,
          portraits2_5_3,
          portraits2_5_4,
        ],
      },
      {
        id: "president-chusak",
        mainImage: portraits2_6_1,
        thumbnails: [
          portraits2_6_1,
          portraits2_6_2,
          portraits2_6_3,
          portraits2_6_4,
          portraits2_6_5,
        ],
      },
    ],
  },
  {
    key: "architecture",
    items: [
      {
        id: "wat-sothorn",
        mainImage: architecture3_1_1,
        thumbnails: [
          architecture3_1_1,
          architecture3_1_2,
          architecture3_1_3,
          architecture3_1_4,
        ],
      },
      {
        id: "dharma-museum",
        mainImage: architecture3_2_1,
        thumbnails: [
          architecture3_2_1,
          architecture3_2_2,
          architecture3_2_3,
          architecture3_2_4,
        ],
      },
      {
        id: "wat-pa-amparo",
        mainImage: architecture3_3_1,
        thumbnails: [
          architecture3_3_1,
          architecture3_3_2,
          architecture3_3_3,
          architecture3_3_4,
          architecture3_3_5,
        ],
      },
    ],
  },
  {
    key: "sculpture",
    items: [
      {
        id: "phra-that-buddha-ratana",
        mainImage: sculpture4_1,
        thumbnails: [
          sculpture4_1,
          sculpture4_2,
          sculpture4_3,
          sculpture4_4,
          sculpture4_5,
        ],
      },
    ],
  },
  {
    key: "furniture",
    items: [
      {
        id: "circle-plate",
        mainImage: furniture5_1,
        thumbnails: [
          furniture5_1,
          furniture5_2,
          furniture5_3,
        ],
      },
    ],
  },
];