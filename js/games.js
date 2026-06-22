// js/games.js

const TAGS = {
  genre: [
    "アクション",
    "RPG",
    "シミュレーション",
    "ストラテジー",
    "シューティング",
    "FPS",
    "サンドボックス",
  ],

  platform: [
    "PC(Steam)",
    "PC(非Steam)",
    "Switch",
    "PS5",
    "Xbox",
    "Mobile"
  ],

  tags: [
    "宇宙",
    "探検",
    "管理",
    "サバイバル",
    "クラフト",
    "オープンワールド",
    "マルチプレイヤー",
    "建築",
  ]
};

const games = [
  {
    id: "stellaris",
    title: "Stellaris",
    image: "images/stellaris.jpg",

    genre: ["ストラテジー", "シミュレーション"],
    platform: ["PC(Steam)", "PS5", "Xbox"],

    tags: [
      "宇宙",
      "探検",
      "管理"
    ],

    description: "宇宙帝国を運営し、探索・外交・戦争を行う大規模ストラテジーゲーム。"
  },

  {
    id: "minecraft",
    title: "Minecraft",
    image: "images/minecraft.jpg",

    genre: ["サンドボックス", "シミュレーション"],
    platform: ["PC(非Steam)", "Switch", "PS5", "Xbox", "Mobile"],

    tags: [
      "サバイバル",
      "クラフト",
      "オープンワールド",
      "マルチプレイヤー",
      "建築"
    ],

    description: "ブロックでできた世界を探索し、建築や冒険を自由に楽しめるサンドボックスゲーム。"
  }
];