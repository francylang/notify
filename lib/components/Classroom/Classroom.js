import React from 'react';
import PropTypes from 'prop-types';
import StudentLink from '../StudentLink/StudentLink.js';
import { Redirect } from 'react-router';


const Classroom = ({ teacher, students, deleteStudent, userStatus }) => {

  if (userStatus === false) {
    return <Redirect to='/login'/>;
  }

  return (
    <div>
        <h2 className='teacher-name'>{teacher}'s Classroom</h2>
      <div className='student-classroom-container'>
      <div className='student-classroom'>
      {
        students.map(({ name, id }) => {
          return <StudentLink
            key={ name }
            id={ id }
            name={ name }
            deleteStudent={ () => deleteStudent(id) }
          />;
        })
      }
    </div>
    </div>
    </div>
  );
};

Classroom.propTypes = {
  teacher: PropTypes.string,
  students: PropTypes.array,
  deleteStudent: PropTypes.func,
  userStatus: PropTypes.bool
};

export default Classroom;
