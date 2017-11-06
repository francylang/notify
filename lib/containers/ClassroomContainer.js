import { connect } from 'react-redux';
import Classroom from '../components/Classroom/Classroom.js';
import { deleteStudent } from '../actions/actions.js';

const mapStateToProps = store => ({
  students: store.classroom.students,
  teacher: store.classroom.teacher,
  userStatus: store.userStatus
});

const mapDispatchToProps = dispatch => ({
  deleteStudent: (studentId) => dispatch(deleteStudent(studentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
