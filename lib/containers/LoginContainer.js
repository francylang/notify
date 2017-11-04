import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { authentication } from '../actions/actions.js';

const mapStateToProps =  store => ({ authentication: store.authentication });


export default connect(mapStateToProps)(Login);
