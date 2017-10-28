import coreValueData from '../utils/coreValueData.js'

const characterReducer = (state = coreValueData, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return action.character
    case 'PLUS_ONE_CORE_VALUE':
    state[action.studentId][action.coreValue] ++;
      return state;
  default:
    return state;
  }
};

export default characterReducer;
