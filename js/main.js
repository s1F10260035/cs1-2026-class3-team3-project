// js/main.js

function renderGameList(gameArray, viewType = "cover") {
  const gameList = document.getElementById("game-list");

  gameList.innerHTML = gameArray
    .map(game => GameCard(game, viewType))
    .join("");
}

// Steamライブラリ風
renderGameList(games, "cover");

// 一覧風にしたい場合
// renderGameList(games, "row");