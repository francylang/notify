import dummyCharacter from '../utils/dummyCharacter.js'

const characterReducer = (state = dummyCharacter, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return action.character
  default:
    return state;
  }
};

export default characterReducer;
