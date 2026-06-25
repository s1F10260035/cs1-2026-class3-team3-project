// js/main.js

function renderGameList(gameArray, viewType = "cover") {
  const gameList = document.getElementById("game-list");

  if (!gameList) return;

  gameList.innerHTML = gameArray
    .map(game => GameCard(game, viewType))
    .join("");
}

// 一覧風にしたい場合
// renderGameList(games, "row");