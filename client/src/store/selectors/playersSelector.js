import { createSelector } from 'reselect';

const stats = (state) => state.playersReducer.champsStats;

export const getLastSeason = createSelector(stats, (player) => {
  return player.slice(-1);
});
