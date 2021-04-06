import { createSelector } from 'reselect';

const stats = (state) => state.clubReducer.roster;

export const getGoaltending = createSelector(stats, (player) => {
  return player.filter((pl) => pl.pos === 'G');
});
export const getDefensemen = createSelector(stats, (player) => {
  return player.filter((pl) => pl.pos === 'D');
});
export const getForwards = createSelector(stats, (player) => {
  return player.filter((pl) => pl.pos !== 'G' && pl.pos !== 'D');
});
