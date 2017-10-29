const initialState = {
  teacher: 'Ms. Lang',
  students: [
    {id: 0, name: 'Nick Teets', parentContact: 'Roy Gutierrez', phone: '502-905-3216'},
    {id: 1, name: 'Ben Porter', parentContact: 'Maria Rosales', phone: '444-333-3211'},
    {id: 2, name: 'John Michael', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 3, name: 'David Ryan', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 4, name: 'Jen Woodson', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 5, name: 'Lola Koala', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 6, name: 'Robbie Greiner', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 7, name: 'Hector Sanchez', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 8, name: 'Jorge Perez', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 9, name: 'Alex Banister', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 10, name: 'Adam Mescher', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 11, name: 'Amy Holt', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 12, name: 'Jason Hughes', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 13, name: 'Jonathan Beckman', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 14, name: 'Nik Bor', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 15, name: 'Sam Singer', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 16, name: 'Rufus Welsh', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 17, name: 'Luke Finney', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 18, name: 'Travis Haby', parentContact: 'Sally Smith', phone: '444-333-3211'},
    {id: 19, name: 'Christie Lynam', parentContact: 'Sally Smith', phone: '444-333-3211'}
   ]
  }

const classroomReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CLASSROOM_ADD_STUDENT':
    state.students.push(action.student)
    const newState = { teacher: state.teacher, students: state.students }
    console.log(newState);
    return newState
  default:
    return state;
  }
};

export default classroomReducer;
