function filterGames(games, filters = {}) {
  return games.filter(game => {
    const genreMatch =
      !filters.genres ||
      filters.genres.length === 0 ||
      filters.genres.some(genre => game.genres.includes(genre));

    const platformMatch =
      !filters.platforms ||
      filters.platforms.length === 0 ||
      filters.platforms.some(platform => game.platforms.includes(platform));

    const tagMatch =
      !filters.tags ||
      filters.tags.length === 0 ||
      filters.tags.some(tag => game.tags.includes(tag));

    return genreMatch && platformMatch && tagMatch;
  });
}

function searchGames(games, keyword) {
  if (!keyword) return games;

  const lowerKeyword = keyword.toLowerCase();

  return games.filter(game => {
    return (
      game.title.toLowerCase().includes(lowerKeyword) ||
      game.description.toLowerCase().includes(lowerKeyword) ||
      game.genres.some(genre => genre.toLowerCase().includes(lowerKeyword)) ||
      game.platforms.some(platform => platform.toLowerCase().includes(lowerKeyword)) ||
      game.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
    );
  });
}