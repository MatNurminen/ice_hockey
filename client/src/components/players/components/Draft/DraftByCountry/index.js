import { connect } from 'react-redux';
import {
  getDraftPlayersByCountry,
  moduleName as playersModule,
} from '../../../../../store/duck/players';

import DraftByCountry from './draftbycountry';

const mapStateToProps = (state) => ({
  draftPlayersByCountry: state[playersModule].draftPlayersByCountry,
});

export default connect(mapStateToProps, {
  getDraftPlayersByCountry,
})(DraftByCountry);
