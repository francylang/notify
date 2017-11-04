import userLoginData from '../utils/userLoginData.js';

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case 'CHECK_AUTHENTICATION':
      return true
    default:
      return state;
  }
};

export default isAuthenticated;

// export const isAuthenticated = (state = false, action) => {
//   switch (action.type) {
//   case 'CHECK_AUTHENTICATION':
//     action.user
//   default:
//     return store;
//   }
// };
