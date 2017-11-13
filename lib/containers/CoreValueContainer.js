import { connect } from 'react-redux';
import Student from '../components/Student/Student.js';
import { plusOneCoreValue, resetIndividualCount } from '../actions/actions.js';

export const mapStateToProps = store => ({
  coreValues: store.coreValue,
  students: store.classroom.students
});

export const mapDispatchToProps = dispatch => ({
  plusOneCoreValue: (coreValue, studentId) => dispatch(plusOneCoreValue(coreValue, studentId)),
  resetIndividualCount: (coreValue, studentId) => dispatch(resetIndividualCount(coreValue, studentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Student);
