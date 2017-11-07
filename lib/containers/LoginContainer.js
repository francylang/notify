import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { isAuthenticated } from '../actions/actions.js';

export const mapStateToProps = store => ({
  userStatus: store.userStatus
});

export const mapDispatchToProps =  dispatch => ({
  isAuthenticated:(user) => dispatch(isAuthenticated(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
