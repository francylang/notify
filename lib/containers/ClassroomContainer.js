import { connect } from 'react-redux';
import Classroom from '../components/Classroom/Classroom.js';
// import Header from '../components/Header/Header.js';
// import { addStudent } from '../actions/actions.js';

const mapStateToProps = store => ({
  students: store.classroom.students
});

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
