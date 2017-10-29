import { connect } from 'react-redux';
import NewStudent from '../components/NewStudent/NewStudent.js';
import { addStudent } from '../actions/actions.js';

const mapStateToProps = store => ({
  students: store.classroom.students,
  coreValues: store.coreValue
});

const mapDispatchToProps = dispatch => ({
  addStudent:(student) => dispatch(addStudent(student))
});


export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);
