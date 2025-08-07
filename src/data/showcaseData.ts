export interface ShowcaseItem {
  id: string;
  mainImage: string;
  thumbnails: string[];
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
      },
      {
        id: "wat-cholprathan-rangsrit",
        mainImage: "/src/assets/Portfolio/1/3/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/1/3/1.jpg",
          "/src/assets/Portfolio/1/3/2.jpg",
          "/src/assets/Portfolio/1/3/3.jpg",
        ],
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
      },
      {
        id: "luang-ta-maha-bua",
        mainImage: "/src/assets/Portfolio/2/2/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/2/2/1.jpg",
          "/src/assets/Portfolio/2/2/2.jpg",
          "/src/assets/Portfolio/2/2/3.jpg",
        ],
      },
      {
        id: "luang-pu-kruba-wong",
        mainImage: "/src/assets/Portfolio/2/3/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/2/3/1.jpg",
          "/src/assets/Portfolio/2/3/2.jpg",
        ],
      },
      {
        id: "luang-pho-sod",
        mainImage: "/src/assets/Portfolio/2/4/1.jpg",
        thumbnails: [
          "/src/assets/Portfolio/2/4/1.jpg",
          "/src/assets/Portfolio/2/4/2.jpg",
          "/src/assets/Portfolio/2/4/3.jpg",
        ],
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
      },
    ],
  },
];