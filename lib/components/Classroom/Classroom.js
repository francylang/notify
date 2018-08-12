import React from 'react';
import PropTypes from 'prop-types';
import StudentLink from '../StudentLink/StudentLink.js';
import { Redirect } from 'react-router';

const Classroom = ({ teacher, students, deleteStudent, userStatus, coreValues }) => {

  if (userStatus === false) {
    return <Redirect to='/login'/>;
  }

  return (
    <div className="classroom">
      <h2 className='classroom-teacher'>{teacher}'s Classroom</h2>
      <ul className='classroom-students'>
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
      </ul>
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
