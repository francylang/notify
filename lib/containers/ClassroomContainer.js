import { connect } from 'react-redux';
import Classroom from '../components/Classroom/Classroom.js';

const mapStateToProps = store => ({
  students: store.classroom.students
});

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
