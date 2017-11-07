import { connect } from 'react-redux';
import Header from '../components/Header/Header.js';

export const mapStateToProps = store => ({ students: store.classroom.students });

export default connect(mapStateToProps, undefined)(Header);
