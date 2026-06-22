// js/components.js

function getGameImagePath(game) {
  return `images/games/${game.id}.jpg`;
}

function getGameDetailPath(game) {
  return `pages/${game.id}.html`;
}

function createTagBadges(game) {
  const allTags = [
    ...game.genres,
    ...game.platforms,
    ...game.tags
  ];

  return allTags
    .map(tag => `<span class="badge badge-outline">${tag}</span>`)
    .join("");
}

function GameCardCover(game) {
  return `
    <article class="game-card game-card-cover">
      <a href="${getGameDetailPath(game)}">
        <img src="${getGameImagePath(game)}" alt="${game.title}">
        <h3>${game.title}</h3>
      </a>
    </article>
  `;
}

function GameCardRow(game) {
  return `
    <article class="game-card game-card-row">
      <a href="${getGameDetailPath(game)}">
        <img src="${getGameImagePath(game)}" alt="${game.title}">
      </a>

      <div>
        <h3>${game.title}</h3>
        <p>${game.description}</p>

        <div class="tag-list">
          ${createTagBadges(game)}
        </div>
      </div>
    </article>
  `;
}

function GameCard(game, viewType = "cover") {
  if (viewType === "row") {
    return GameCardRow(game);
  }

  return GameCardCover(game);
}