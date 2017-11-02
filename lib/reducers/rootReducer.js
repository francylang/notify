import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import classroomReducer from './ClassroomReducer';
import characterReducer from './CoreValueReducer';

const rootReducer = combineReducers({
  classroom: classroomReducer,
  coreValue: characterReducer,
  // authentication: AuthenticationReducer,
});

export default rootReducer;
