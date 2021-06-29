import { createSelector } from 'reselect';
import { moduleName as playersModule } from '../../store/duck/players';

const stats = (state) => state[playersModule].champsStats;

export const getLastSeason = createSelector(stats, (player) => {
  return player.slice(-1);
});
