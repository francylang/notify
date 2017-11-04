export const addStudent = newStudent => {
  return {
    type: 'CLASSROOM_ADD_STUDENT',
    newStudent
  };
};

export const deleteStudent = studentId => {
  return {
    type: 'CLASSROOM_DELETE_STUDENT',
    studentId
  };
};

export const addCoreValue = newValue => {
  return {
    type: 'ADD_CORE_VALUE',
    newValue
  };
};

export const plusOneCoreValue = (coreValue, studentId) => {
  return {
    type: 'PLUS_ONE_CORE_VALUE',
    coreValue,
    studentId
  };
};

export const newSetofCoreValues = (id, newSet) => {
  return {
    type: 'NEW_SET_OF_CORE_VALUES',
    id,
    newSet
  };
};

export const isAuthenticated = user => {
  return {
    type: 'CHECK_AUTHENTICATION',
    user
  };
};

// export const userLogin = () => {
//   return {
//     type: 'USER_LOGIN'
//   };
// };
