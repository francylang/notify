import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { authentication } from '../actions/actions.js';

const mapStateToProps =  store => ({
  authentication: store.authentication
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
