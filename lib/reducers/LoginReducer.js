import userLoginData from '../utils/userLoginData.js';

const checkAuthentication = (state = false, action) => {
  switch (action.type) {
    case 'CHECK_AUTHENTICATION':
    action.user === userLoginData;
    console.log(action);
      return true ;
    default:
      return state;
  }
};

export default checkAuthentication;
