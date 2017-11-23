import { connect } from 'react-redux';
import Header from '../components/Header/Header.js';

export const mapStateToProps = store => ({
  students: store.classroom.students,
  userStatus: store.userStatus
});

export default connect(mapStateToProps, undefined)(Header);
