import { createSelector } from 'reselect';

const dataSort = function (fieldName, data = this, sortDir = 1) {
  return data
    .sort(function (a, b) {
      return (b[fieldName] - a[fieldName]) * sortDir;
    })
    .slice(0, 5);
};

Array.prototype.dataSort = dataSort;

const stats = (state) => state.leagueReducer.statsByLeague;
const statsAllTime = (state) => state.leagueReducer.statsAllTimeByLeague;
const statsPerSeason = (state) => state.leagueReducer.statsPerSeasonByLeague;

export const getForwards = createSelector(stats, (player) => {
  return player
    .filter((pl) => pl.pos !== 'G' && pl.pos !== 'D')
    .dataSort('goals');
});
export const getDefensemen = createSelector(stats, (player) => {
  return player.filter((pl) => pl.pos === 'D').dataSort('goals');
});
export const getGoaltending = createSelector(stats, (player) => {
  return player.filter((pl) => pl.pos === 'G').dataSort('goals');
});
export const getOldest = createSelector(stats, (player) =>
  dataSort('age', player)
);
export const getTallest = createSelector(stats, (player) =>
  dataSort('height', player)
);
export const getHeaviest = createSelector(stats, (player) =>
  dataSort('weight', player)
);
export const getYoungest = createSelector(stats, (player) =>
  dataSort('age', player, -1)
);
export const getShortest = createSelector(stats, (player) =>
  dataSort('height', player, -1)
);
export const getLightest = createSelector(stats, (player) =>
  dataSort('weight', player, -1)
);

export const getForwardsAllTime = createSelector(statsAllTime, (player) => {
  return player.filter((pl) => pl.pos !== 'G' && pl.pos !== 'D').dataSort();
});
export const getDefensemenAllTime = createSelector(statsAllTime, (player) => {
  return player.filter((pl) => pl.pos === 'D').dataSort();
});
export const getGoaltendingAllTime = createSelector(statsAllTime, (player) => {
  return player.filter((pl) => pl.pos === 'G').dataSort();
});

export const getForwardsPerSeason = createSelector(statsPerSeason, (player) => {
  return player.filter((pl) => pl.pos !== 'G' && pl.pos !== 'D').dataSort();
});
export const getDefensemenPerSeason = createSelector(
  statsPerSeason,
  (player) => {
    return player.filter((pl) => pl.pos === 'D').dataSort();
  }
);
export const getGoaltendingPerSeason = createSelector(
  statsPerSeason,
  (player) => {
    return player.filter((pl) => pl.pos === 'G').dataSort();
  }
);
