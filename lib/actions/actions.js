export const addStudent = student => {
  return {
    type: 'CLASSROOM_ADD_STUDENT',
    student
  }
}

export const addCharacter = character => {
  return {
    type: 'ADD_CHARACTER',
    character
  }
}

export const plusOneCoreValue = (coreValue, studentId) => {
  console.log(studentId);
  return {
    type: 'PLUS_ONE_CORE_VALUE',
    coreValue,
    studentId
  }
}
