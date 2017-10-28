import { connect } from 'react-redux';
import Student from '../components/Student/Student.js';
import { plusOneCoreValue } from '../actions/actions.js';

const mapStateToProps = store => ({
  coreValues: store.coreValue
});

const mapDispatchToProps = dispatch => ({
    plusOneCoreValue: (coreValue, studentId) => dispatch(plusOneCoreValue(coreValue, studentId))
  });


export default connect(mapStateToProps, mapDispatchToProps)(Student);
