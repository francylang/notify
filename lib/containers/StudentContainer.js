import { connect } from 'react-redux';
import Student from '../components/Student/Student.js';

const mapStateToProps = store => ({
  coreValues: store.character
});

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
