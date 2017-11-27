import { connect } from 'react-redux';
import Header from '../components/Header/Header.js';
import { resetCount } from '../actions/actions.js';


export const mapStateToProps = store => ({
  students: store.classroom.students,
  userStatus: store.userStatus,
  coreValues: store.coreValue
});

export const mapDispatchToProps = dispatch => ({
  resetCount: () => dispatch(resetCount()),
  returnIfValueHasCount: (coreValue, studentId) => dispatch(returnIfValueHasCount(coreValue, studentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
