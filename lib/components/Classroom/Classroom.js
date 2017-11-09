import React from 'react';
import PropTypes from 'prop-types';
import StudentLink from '../StudentLink/StudentLink.js';
import { Redirect } from 'react-router';
import textFetch from '../../utils/textFetch.js';



const Classroom = ({ teacher, students, deleteStudent, userStatus, coreValues }) => {

  function sendSummary(students, coreValues) {
    students.forEach(student => textFetch(coreValues[student.id], student.name));
  }

  if (userStatus === false) {
    return <Redirect to='/login'/>;
  }
  return (
    <div>
      <div className='teacher-and-summary'>
        <h2 className='teacher-name'>{teacher}'s Classroom</h2>
        <button className='summary-button' onClick= { () => sendSummary(students, coreValues) }>Launch Summary Report</button>
      </div>
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
  userStatus: PropTypes.bool,
  coreValues: PropTypes.object
};

export default Classroom;
