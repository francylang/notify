import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import classroomReducer from './ClassroomReducer';
import characterReducer from './CoreValueReducer';
import userStatus from './LoginReducer.js';

const rootReducer = combineReducers({
  classroom: classroomReducer,
  coreValue: characterReducer,
  userStatus: userStatus
});

export default rootReducer;
