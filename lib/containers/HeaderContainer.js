import { connect } from 'react-redux';
import Header from '../components/Header/Header.js';
// import { addStudent } from '../actions/actions.js';


const mapStateToProps = store => ({
  // teacher: store.teacher,
});

const mapDispatchToProps = dispatch => {
  return {
    // addStudent:(student) => dispatch(addStudent(student))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
