export const initialState = {
  teacher: 'Ms. Lang',
  students: [
    {id: 0, name: 'Nick Teets', parentContact: 'Sally Teets', phone: '502-905-3216'},
    {id: 1, name: 'Ben Porter', parentContact: 'Sally Porter', phone: '444-333-3211'},
    {id: 2, name: 'John Michael', parentContact: 'Sally Michael', phone: '444-333-3211'},
    {id: 3, name: 'David Ryan', parentContact: 'Sally Ryan', phone: '444-333-3211'},
    {id: 4, name: 'Jen Woodson', parentContact: 'Sally Woodson', phone: '444-333-3211'},
    {id: 5, name: 'Lola Koala', parentContact: 'Sally Koala', phone:   '444-333-3211'},
    {id: 6, name: 'Robbie Greiner', parentContact: 'Sally Greiner', phone: '444-333-3211'},
    {id: 7, name: 'Hector Sanchez', parentContact: 'Sally Sanchez', phone: '444-333-3211'},
    {id: 8, name: 'Jorge Perez', parentContact: 'Sally Perez', phone: '444-333-3211'},
    {id: 9, name: 'Alex Banister', parentContact: 'Sally Banister', phone: '444-333-3211'},
    {id: 10, name: 'Adam Mescher', parentContact: 'Sally Mescher', phone: '444-333-3211'},
    {id: 11, name: 'Amy Holt', parentContact: 'Sally Holt', phone: '444-333-3211'},
    {id: 12, name: 'Jason Hughes', parentContact: 'Sally Hughes', phone: '444-333-3211'},
    {id: 13, name: 'Jonathan Beck', parentContact: 'Sally Beckman', phone: '444-333-3211'},
    {id: 14, name: 'Nik Bor', parentContact: 'Sally Bor', phone: '444-333-3211'},
    {id: 15, name: 'Sam Singer', parentContact: 'Sally Singer', phone: '444-333-3211'},
    {id: 16, name: 'Rufus Welsh', parentContact: 'Sally Welsh', phone: '444-333-3211'},
    {id: 17, name: 'Luke Finney', parentContact: 'Sally Finney', phone: '444-333-3211'},
    {id: 18, name: 'Travis Haby', parentContact: 'Sally Haby', phone: '444-333-3211'},
    {id: 19, name: 'Christie Lynam', parentContact: 'Sally Lynam', phone: '444-333-3211'},
    {id: 20, name: 'Beyonce', parentContact: 'Sally Knowles', phone: '444-333-3211'}
  ]
};

const classroomReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'CLASSROOM_ADD_STUDENT':
    const addedStudent = { teacher: state.teacher, students:[...state.students, action.newStudent] };
    return addedStudent;

  case 'CLASSROOM_DELETE_STUDENT':
    const studentNum = action.studentId;
    const filterStudents = state.students.filter(student => student.id !== studentNum);
    const deleteStudentState = { teacher: state.teacher, students: filterStudents };
    return deleteStudentState;
    
  default:
    return state;
  }
};

export default classroomReducer;
