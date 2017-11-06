import App from '../components/App/App';
import { connect } from 'react-redux';
import { isAuthenticated } from '../actions/actions.js';

const mapStateToProps = store => ({
  userStatus: store.userStatus
});

const mapDispatchToProps =  dispatch => ({
  isAuthenticated:(user) => dispatch(isAuthenticated(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
