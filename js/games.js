// js/games.js

const TAGS = {
  genres: [
    "アクション",
    "RPG",
    "シミュレーション",
    "ストラテジー",
    "シューティング",
    "FPS",
    "サンドボックス",
  ],

  platforms: [
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
    "FPS",
  ]
};

const games = [
  {
    id: "stellaris",
    title: "Stellaris",
    image: "images/stellaris.jpg",

    genres: ["ストラテジー", "シミュレーション"],
    platforms: ["PC(Steam)", "PS5", "Xbox"],

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

    genres: ["サンドボックス", "シミュレーション"],
    platforms: ["PC(非Steam)", "Switch", "PS5", "Xbox", "Mobile"],

    tags: [
      "サバイバル",
      "クラフト",
      "オープンワールド",
      "マルチプレイヤー",
      "建築"
    ],

    description: "ブロックでできた世界を探索し、建築や冒険を自由に楽しめるサンドボックスゲーム。"
  }
  {
  id: "valorant",
  title: "valorant",
  image: "images/varolant.jpg"

  genres: ["シューティング","FPS"],
  platforms: ["PC(非Steam)","PS5"],

  tags: ["FPS","マルチプレイヤー"],

  description:
    "主に5v5で戦うチーム戦タクティカルFPSです。キャラクターごとに特殊能力を持ち、止まらないと銃がまっすぐ飛ばないなどほかのFPSにはない特徴を持っています。基本的にはそれぞれアタック側でスパイクという機械を設置して解除させないようにするのと、ディフェンス側という設置されたスパイクを解除するという二つの役割に分かれて戦います"
}
];