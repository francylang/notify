const authentication = (state = false, action) => {
  switch (action.type) {
    case 'AUTHENTICATED':
      return state = true;
    case 'UNAUTHENTICATED':
      return state;
    default:
      return state;
  }
}

export default authentication;
