import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentLink from '../StudentLink/StudentLink.js'
import '../../index.css';

const Classroom = (props) => {
  // const studentId =
  return (
    <div className='classroom'>
    {
      props.students.map(student => {
        return <StudentLink
          key={ student.id }
          id={ student.id }
          name={ student.name }
          deleteStudent={ () => { props.deleteStudent(student.id) } }
          />
      })
    }
    </div>
  )
};

Classroom.propTypes = {

};

export default Classroom;
