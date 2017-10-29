import { connect } from 'react-redux';
import NewStudent from '../components/NewStudent/NewStudent.js';
// import { plusOneCoreValue } from '../actions/actions.js';

const mapStateToProps = store => ({
  coreValues: store.coreValue
});

const mapDispatchToProps = dispatch => ({
  });


export default connect(mapStateToProps, undefined)(NewStudent);
