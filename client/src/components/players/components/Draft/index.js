import { connect } from 'react-redux';
import {
  getDraft,
  moduleName as playersModule,
} from '../../../../store/duck/players';

import Draft from './draft';

const mapStateToProps = (state) => ({
  drafts: state[playersModule].draft,
  countries: state[playersModule].draftCountries,
  clubs: state[playersModule].draftClubs,
});

export default connect(mapStateToProps, {
  getDraft,
})(Draft);
