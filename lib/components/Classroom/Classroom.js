import React from 'react';
import PropTypes from 'prop-types';
import StudentLink from '../StudentLink/StudentLink.js';
// import './Classroom.css';

const Classroom = ({teacher, students, deleteStudent}) => {
  return (
    <div>
      <div className='class-drop-down'>
        <h2 className='teacher-name'>{teacher}'s Classroom</h2>
            <select className='drop-down'>
              <option>Social Studies Block 1</option>
              <option>Social Studies Block 2</option>
              <option>Social Studies Block 3</option>
            </select>
      </div>
    <div className='student-classroom'>
    {
      students.map(student => {
        return <StudentLink
          key={ student.name }
          id={ student.id }
          name={ student.name }
          deleteStudent={ () => { deleteStudent(student.id) } }
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
