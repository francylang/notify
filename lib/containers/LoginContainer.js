import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { checkAuthentication } from '../actions/actions.js';

const mapStateToProps = store => ({ checkAuthentication: store.checkAuthentication });

const mapDispatchToProps =  dispatch => ({
  checkAuthentication:(user) => dispatch(checkAuthentication(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
