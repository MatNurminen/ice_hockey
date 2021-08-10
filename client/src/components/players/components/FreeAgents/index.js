import { connect } from 'react-redux';
import {
  getSeasons,
  moduleName as seasonsModule,
} from '../../../../store/duck/seasons';
import {
  getCountries,
  moduleName as countriesModule,
} from '../../../../store/duck/countries';
import {
  getFreeAgents,
  moduleName as playersModule,
} from '../../../../store/duck/players';
import freeAgents from './freeAgents';

const mapStateToProps = (state) => ({
  seasons: state[seasonsModule].seasons,
  countries: state[countriesModule].countries,
  freeagents: state[playersModule].freeagents,
});

export default connect(mapStateToProps, {
  getSeasons,
  getCountries,
  getFreeAgents,
})(freeAgents);
