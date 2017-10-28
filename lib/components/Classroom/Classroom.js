import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentLink from '../StudentLink/StudentLink.js'
import '../../index.css';

const Classroom = ({ students }) => {
  return (
    <div className='classroom'>
    {
      students.map(student => {
        return <StudentLink
          key={ student.id }
          id={ student.id }
          name={ student.name }/>
      })
    }
    </div>
  )
};

Classroom.propTypes = {

};

export default Classroom;
