import {
  getCountries,
  moduleName as countriesModule,
} from '../../../../store/duck/countries';
import { connect } from 'react-redux';
import Countries from './countries';

const mapStateToProps = (state) => ({
  countries: state[countriesModule].countries,
});

export default connect(mapStateToProps, { getCountries })(Countries);
