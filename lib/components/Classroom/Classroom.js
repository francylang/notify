import React from 'react';
import PropTypes from 'prop-types';
import StudentLink from '../StudentLink/StudentLink.js';

const Classroom = ({teacher, students, deleteStudent}) => {
  return (
    <div>
      <div className='class-drop-down'>
        <h2 className='teacher-name'>{teacher}'s Classroom</h2>
      </div>
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
  );
};

Classroom.propTypes = {
  teacher: PropTypes.string,
  students: PropTypes.array,
  deleteStudent: PropTypes.func
};

export default Classroom;
