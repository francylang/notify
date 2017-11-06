import userLoginData from '../utils/userLoginData.js';

export const userStatus = (state = false, action) => {
  switch (action.type) {
  case 'CHECK_AUTHENTICATION':
    if (action.user.email === userLoginData.email &&
      action.user.password === userLoginData.password) {
      return true;
    }
  default:
    return state;
  }
};

export default userStatus;
