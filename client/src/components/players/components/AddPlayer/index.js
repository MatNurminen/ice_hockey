import { createPlayer } from '../../../../store/duck/players';
import {
  getCountries,
  moduleName as countriesModule,
} from '../../../../store/duck/countries';
import { connect } from 'react-redux';
import addPlayer from './addPlayer';

const mapStateToProps = (state) => ({
  countries: state[countriesModule].countries,
});

export default connect(mapStateToProps, { createPlayer, getCountries })(
  addPlayer
);
