import { connect } from 'react-redux';
import {
  confirmError,
  logoutUser,
  moduleName as authModule,
} from '../../../../store/duck/auth';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  error: state[authModule].error,
  user: state[authModule].user,
});

export default connect(mapStateToProps, { confirmError, logoutUser })(Navbar);
