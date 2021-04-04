import { createSelector } from 'reselect';

const stats = (state) => state.leagueReducer.statsByLeague;

export const getForwards = createSelector(stats, (player) => {
  return player
    .filter((pl) => pl.pos !== 'G' && pl.pos !== 'D')
    .sort(function (a, b) {
      return b.goals - a.goals;
    })
    .slice(0, 5);
});
export const getDefensemen = createSelector(stats, (player) => {
  return player
    .filter((pl) => pl.pos === 'D')
    .sort(function (a, b) {
      return b.goals - a.goals;
    })
    .slice(0, 5);
});
export const getGoaltending = createSelector(stats, (player) => {
  return player
    .filter((pl) => pl.pos === 'G')
    .sort(function (a, b) {
      return b.goals - a.goals;
    })
    .slice(0, 5);
});

export const getOldest = createSelector(stats, (player) => {
  return player
    .sort(function (a, b) {
      return b.age - a.age;
    })
    .slice(0, 5);
});
export const getTallest = createSelector(stats, (player) => {
  return player
    .sort(function (a, b) {
      return b.height - a.height;
    })
    .slice(0, 5);
});
export const getHeaviest = createSelector(stats, (player) => {
  return player
    .sort(function (a, b) {
      return b.weight - a.weight;
    })
    .slice(0, 5);
});
export const getYoungest = createSelector(stats, (player) => {
  return player
    .sort(function (a, b) {
      return a.age - b.age;
    })
    .slice(0, 5);
});
export const getShortest = createSelector(stats, (player) => {
  return player
    .sort(function (a, b) {
      return a.height - b.height;
    })
    .slice(0, 5);
});
export const getLightest = createSelector(stats, (player) => {
  return player
    .sort(function (a, b) {
      return a.weight - b.weight;
    })
    .slice(0, 5);
});
