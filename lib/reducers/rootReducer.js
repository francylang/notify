import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import classRoomReducer from './ClassroomReducer';
import CoreValueReducer from './CoreValueReducer';
// import plusOneCoreValue from './StudentReducer';

const rootReducer = combineReducers({
  classroom: classRoomReducer,
  coreValue: CoreValueReducer,
  // plusOneCoreValue: plusOneCoreValue
});

export default rootReducer;
