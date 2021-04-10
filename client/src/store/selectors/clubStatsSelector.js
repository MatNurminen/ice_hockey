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

export const getAvgAge = createSelector(stats, (items) => {
  return (
    items.reduce((subtotal, item) => subtotal + item.age, 0) / items.length
  ).toFixed(2);
});

export const getAvgHeight = createSelector(stats, (items) => {
  return (
    items.reduce((subtotal, item) => subtotal + item.height, 0) / items.length
  ).toFixed(2);
});

export const getAvgWeight = createSelector(stats, (items) => {
  return (
    items.reduce((subtotal, item) => subtotal + item.weight, 0) / items.length
  ).toFixed(2);
});
