import { connect } from 'react-redux';
import NewStudent from '../components/NewStudent/NewStudent.js';
import { addStudent, newSetofCoreValues } from '../actions/actions.js';

const mapStateToProps = store => ({
  students: store.classroom.students,
  coreValues: store.coreValue
});

const mapDispatchToProps = dispatch => ({
  addStudent:(newStudent) => dispatch(addStudent(newStudent)),
  newSetofCoreValues:(id, newSet) => dispatch(newSetofCoreValues(id, newSet))
});


export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);
