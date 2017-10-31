export const addStudent = student => {
  return {
    type: 'CLASSROOM_ADD_STUDENT',
    student
  }
}

export const deleteStudent = (studentId) => {
  return {
    type: 'CLASSROOM_DELETE_STUDENT',
    studentId
  }
}

export const addCoreValue = newValue => {
  return {
    type: 'ADD_CORE_VALUE',
    newValue
  }
}

export const plusOneCoreValue = (coreValue, studentId) => {
  return {
    type: 'PLUS_ONE_CORE_VALUE',
    coreValue,
    studentId
  }
}
