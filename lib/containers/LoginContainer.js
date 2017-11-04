import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { isAuthenticated } from '../actions/actions.js';


const mapStateToProps = store => ({
  // isAuthenticated: store.isAuthenticated
});

const mapDispatchToProps =  dispatch => ({
  isAuthenticated:(user) => dispatch(isAuthenticated(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
