import { connect } from 'react-redux';
import NewCoreValue from '../components/NewCoreValue/NewCoreValue.js';
import { addCoreValue } from '../actions/actions.js';

const mapStateToProps = store => ({
  students: store.classroom.students,
  coreValues: store.coreValue
});

const mapDispatchToProps = dispatch => ({
  addCoreValue:(coreValue) => dispatch(addCoreValue(coreValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCoreValue);
