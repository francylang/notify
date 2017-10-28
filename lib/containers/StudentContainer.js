import { connect } from 'react-redux';
import Student from '../components/Student/Student.js';
import { plusOneCoreValue } from '../actions/actions.js';


const mapStateToProps = store => ({
  coreValues: store.character
});

const mapDispatchToProps = dispatch => ({
    plusOneCoreValue: () => dispatch(plusOneCoreValue())
  });


export default connect(mapStateToProps, mapDispatchToProps)(Student);
