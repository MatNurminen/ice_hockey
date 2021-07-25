import {
  getCountry,
  moduleName as countriesModule,
} from '../../../../store/duck/countries';
import { connect } from 'react-redux';
import Country from './country';

const mapStateToProps = (state) => ({
  country: state[countriesModule].country,
});

export default connect(mapStateToProps, { getCountry })(Country);
