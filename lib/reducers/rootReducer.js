import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import classroomReducer from './ClassroomReducer';
import characterReducer from './CoreValueReducer';
import isAuthenticated from './LoginReducer.js';

const rootReducer = combineReducers({
  classroom: classroomReducer,
  coreValue: characterReducer,
  isAuthenticated: isAuthenticated
});

export default rootReducer;
