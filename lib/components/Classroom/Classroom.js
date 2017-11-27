import React from 'react';
import PropTypes from 'prop-types';
import StudentLink from '../StudentLink/StudentLink.js';
import { Redirect } from 'react-router';
// import textFetch from '../../utils/textFetch.js';

const Classroom = ({ teacher, students, deleteStudent, userStatus, coreValues, resetCount }) => {

  // const sendSummary = (students, coreValues) => {
  //   students.forEach(student => textFetch(coreValues[student.id], student.name));
  //   resetCount();
  // };

  if (userStatus === false) {
    return <Redirect to='/login'/>;
  }

  return (

    <div>
      <div className='teacher-and-summary'>
        <h2 className='teacher-name'>{teacher}'s Classroom</h2>
        {/* <button className='summary-button' onClick= { () => sendSummary(students, coreValues) }>Launch Summary</button> */}
        {/* <button className='summary-button' onClick= { () => resetCount() }>Reset Count</button> */}
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
              studentInfo={ students }
              studentValue={ coreValues }
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
  coreValues: PropTypes.object,
  resetCount: PropTypes.func
};

export default Classroom;
