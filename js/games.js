// js/games.js

const TAGS = {
  genres: [
    "アクション",
    "RPG",
    "シミュレーション",
    "ストラテジー",
    "RTS",
    "シューティング",
    "FPS",
    "サンドボックス",
    "フライトシミュレーター",
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
    "ミリタリー",
    "戦術",
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
  },

  {
    id: "delta-force",
    title: "Delta force",
    image: "images/delta-force.jpg",

    genres: ["FPS", "アクション"],
    platforms: ["PC(Steam)", "PS5", "Xbox", "Mobile"],

    tags: [
      "ミリタリー",
      "マルチプレイヤー",
      "基本無料",
    ],

    description: "現代戦をテーマにしたBFライクな基本無料のタクティカルFPS。大規模戦闘や部隊行動を中心に楽しめる"
  },

  {
    id: "broken-arrow",
    title: "Broken Arrow",
    image: "images/broken-arrow.jpg",

    genres: ["RTS", "シミュレーション"],
    platforms: ["PC(Steam)"],

    tags: [
      "ミリタリー",
      "マルチプレイヤー",
      "管理",
      "戦術",
    ],

    description: "リアルタイムの大規模現代戦ストラテジーゲーム。統合部隊の奥深いウォーゲームと、アクション満載のリアルタイムストラテジーを組み合わせたゲームプレイが特徴だ。"
  },

  {
    id: "elite-dangerous",
    title: "Elite: Dangerous",
    image: "images/elite-dangerous.jpg",

    genres: ["フライトシミュレーター", "シミュレーション"],
    platforms: ["PC(Steam)", "XBOX"],

    tags: [
      "宇宙",
      "探索",
      "オープンワールド",
      "アクション",
    ],

    description: "天の川銀河をほぼ実寸で再現した宇宙シミュレーションゲーム。交易、戦闘、採掘、探検などを自由に行いながら、自分だけの宇宙生活を楽しめる。"
  },
];