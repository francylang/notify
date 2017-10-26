import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import classRoomReducer from './ClassroomReducer'
import characterReducer from './CharacterReducer'

const rootReducer = combineReducers({
  classroom: classRoomReducer,
  character: characterReducer
});

export default rootReducer;
