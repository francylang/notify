import dummyCharacter from '../utils/dummyCharacter.js'

const characterReducer = (state = dummyCharacter, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default characterReducer;
