const plusOneCoreValue = (state = 0, action) => {
  switch (action.type) {
  case 'PLUS_ONE_CORE_VALUE':
    const newState = state++
    return newState
  default:
    return state;
  }
};
