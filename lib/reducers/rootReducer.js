import { combineReducers } from 'redux';
import classroomReducer from './ClassroomReducer';
import coreValueReducer from './CoreValueReducer';
import userStatus from './LoginReducer.js';

const rootReducer = combineReducers({
  classroom: classroomReducer,
  coreValue: coreValueReducer,
  userStatus: userStatus
});

export default rootReducer;
