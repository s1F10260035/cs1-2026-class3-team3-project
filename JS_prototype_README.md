# ゲーム追加方法

このサイトでは、ゲーム情報は `js/games.js` で管理しています。

ゲームを追加する場合は、`games` 配列に以下のテンプレートをコピーして追加してください。

```js
{
  id: "game-id",
  title: "ゲームタイトル",

  genres: [
    "ジャンル1",
    "ジャンル2"
  ],

  platforms: [
    "PC(Steam)"
  ],

  tags: [
    "タグ1",
    "タグ2"
  ],

  description:
    "ゲームの簡単な説明"
}
```

---

## 例

### Stellaris

```js
{
  id: "stellaris",
  title: "Stellaris",

  genres: [
    "ストラテジー",
    "シミュレーション"
  ],

  platforms: [
    "PC(Steam)",
    "PS5",
    "Xbox"
  ],

  tags: [
    "宇宙",
    "探検",
    "管理"
  ],

  description:
    "宇宙帝国を運営し、探索・外交・戦争を行う大規模ストラテジーゲーム。"
}
```

---

## 各項目の説明

### id

ゲームごとの識別子です。

```js
id: "stellaris"
```

- 半角英数字のみ
- 小文字推奨
- 重複禁止

将来的に画像や詳細ページのファイル名として使用する予定です。

---

### title

サイトに表示するゲーム名です。

```js
title: "Stellaris"
```

---

### genres

ゲームジャンルです。

```js
genres: [
  "ストラテジー",
  "シミュレーション"
]
```

使用するジャンルは既存のものを優先してください。

例

- アクション
- RPG
- シミュレーション
- ストラテジー
- FPS
- サンドボックス

---

### platforms

プレイできる機種です。

```js
platforms: [
  "PC(Steam)",
  "Switch"
]
```

例

- PC(Steam)
- PC(非Steam)
- Switch
- PS5
- Xbox
- Mobile

---

### tags

ゲームの特徴を表すタグです。

```js
tags: [
  "宇宙",
  "探検",
  "管理"
]
```

#### タグ付けルール

タグはできるだけ少なくしてください。

悪い例

```js
[
  "宇宙",
  "SF",
  "4X",
  "銀河",
  "宇宙探査"
]
```

良い例

```js
[
  "宇宙",
  "探検",
  "管理"
]
```

意味が重複するタグは避けます。

---

### description

一覧ページなどで表示する短い説明です。

```js
description:
  "宇宙帝国を運営し、探索・外交・戦争を行う大規模ストラテジーゲーム。"
```


---

## タグ追加について

タグが増えすぎると検索や絞り込みが使いにくくなります。
新しいタグを追加する場合は、チームで相談するべきかもしれません。

---

## 現在の設計

ゲームデータは `games.js` に集約されています。

```text
games.js
    ↓
filter.js
    ↓
components.js
    ↓
HTML
```

- games.js : ゲーム情報
- filter.js : タグ・ジャンル・機種で絞り込み
- components.js : ゲームカード生成
- HTML/CSS : ページ表示

ゲームを追加する場合は、基本的に `games.js` のみ編集してください。

---

# HTMLでの使い方

## 必要なJavaScriptを読み込む

ゲーム一覧やゲームカードを表示するページでは、以下の順番でJavaScriptを読み込んでください。

```html
<script src="js/games.js"></script>
<script src="js/filter.js"></script>
<script src="js/components.js"></script>
```

順番を変更すると動作しない場合があります。

---

## ゲームカードを表示する場所を作る

HTML内にゲームカードを表示する場所を作ります。

```html
<section id="game-list"></section>
```

---

## ゲーム一覧を表示する

### Steamライブラリ風

```html
<section id="game-list"></section>

<script src="js/games.js"></script>
<script src="js/filter.js"></script>
<script src="js/components.js"></script>

<script>
document.getElementById("game-list").innerHTML =
  games.map(game => GameCard(game, "cover")).join("");
</script>
```

画像を中心とした一覧表示になります。

---

### Wiki一覧風

```html
<section id="game-list"></section>

<script src="js/games.js"></script>
<script src="js/filter.js"></script>
<script src="js/components.js"></script>

<script>
document.getElementById("game-list").innerHTML =
  games.map(game => GameCard(game, "row")).join("");
</script>
```

画像・タイトル・タグ・説明文を表示する横長レイアウトになります。

---

## ジャンルで絞り込む

### ストラテジーゲーム一覧

```html
<section id="game-list"></section>

<script>
const result = filterGames(games, {
  genres: ["ストラテジー"]
});

document.getElementById("game-list").innerHTML =
  result.map(game => GameCard(game, "cover")).join("");
</script>
```

---

## プラットフォームで絞り込む

### Steamゲーム一覧

```html
<section id="game-list"></section>

<script>
const result = filterGames(games, {
  platforms: ["PC(Steam)"]
});

document.getElementById("game-list").innerHTML =
  result.map(game => GameCard(game, "cover")).join("");
</script>
```

---

## タグで絞り込む

### 宇宙ゲーム特集

```html
<section id="game-list"></section>

<script>
const result = filterGames(games, {
  tags: ["宇宙"]
});

document.getElementById("game-list").innerHTML =
  result.map(game => GameCard(game, "row")).join("");
</script>
```

---

## 複数条件で絞り込む

### Steamで遊べる宇宙ストラテジー

```html
<section id="game-list"></section>

<script>
const result = filterGames(games, {
  genres: ["ストラテジー"],
  platforms: ["PC(Steam)"],
  tags: ["宇宙"]
});

document.getElementById("game-list").innerHTML =
  result.map(game => GameCard(game, "cover")).join("");
</script>
```

---

## 特定のゲームを表示する

ゲーム詳細ページでは、`id` を指定してゲームを取得できます。

### ゲームを取得する

```js
function getGameById(id) {
  return games.find(game => game.id === id);
}
```

---

### Stellarisを表示する

```html
<div id="game-detail"></div>

<script>
const game = getGameById("stellaris");

document.getElementById("game-detail").innerHTML =
  GameCard(game, "row");
</script>
```

---

## 注意

ゲーム情報は `games.js` に保存されています。

ゲームを追加する場合は、基本的に `games.js` のみ編集してください。

- games.js → ゲーム情報
    
- filter.js → 絞り込み処理
    
- components.js → ゲームカード生成
    
- HTML → ページレイアウト
    

ゲームカードのHTML構造を変更したい場合は、`components.js` を編集してください。

---
### 推奨

ゲーム数が増えることを考えると、

```
pages/stellaris.html
pages/minecraft.html
```

のようにゲームごとにHTMLを作るより、

```
game.html?id=stellaris
```

形式の共通ページを使う方が管理しやすいです。

実は将来的にはこっちの方がかなり楽です。

今の `pages/${game.id}.html` 方式だと、ゲームを50本登録したら50個HTMLを作る必要があります。

一方で

```
game.html?id=stellaris
```

方式なら

```
games.js
```

にデータを追加するだけで済みます。