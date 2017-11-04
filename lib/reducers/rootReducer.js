import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import classroomReducer from './ClassroomReducer';
import characterReducer from './CoreValueReducer';
import checkAuthentication from './LoginReducer.js';

const rootReducer = combineReducers({
  classroom: classroomReducer,
  coreValue: characterReducer,
  checkAuthentication: checkAuthentication
});

export default rootReducer;
