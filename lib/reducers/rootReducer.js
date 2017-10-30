import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import classroomReducer from './ClassroomReducer';
import CoreValueReducer from './CoreValueReducer';

const rootReducer = combineReducers({
  classroom: classroomReducer,
  coreValue: CoreValueReducer,
  
});

export default rootReducer;
