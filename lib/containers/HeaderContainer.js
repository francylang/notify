import { connect } from 'react-redux';
import Header from '../components/Header/Header.js';


const mapStateToProps = store => ({
  // teacher: store.teacher,
});

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
