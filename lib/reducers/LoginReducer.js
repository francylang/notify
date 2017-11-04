import userLoginData from '../utils/userLoginData.js';

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case 'CHECK_AUTHENTICATION':
      action.user === {email: 'francy.lang@gmail.com', password: 'password'}
      return true;
    default:
      return state;
  }
};

export default isAuthenticated;
