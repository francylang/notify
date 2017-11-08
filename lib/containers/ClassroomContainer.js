import { connect } from 'react-redux';
import Classroom from '../components/Classroom/Classroom.js';
import { deleteStudent, sendSummaries } from '../actions/actions.js';

export const mapStateToProps = store => ({
  students: store.classroom.students,
  teacher: store.classroom.teacher,
  userStatus: store.userStatus,
  coreValues: store.coreValue
});

export const mapDispatchToProps = dispatch => ({
  deleteStudent: (studentId) => dispatch(deleteStudent(studentId)),
  sendSummaries: () => dispatch(sendSummaries())
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
