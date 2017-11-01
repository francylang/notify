import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentLink from '../StudentLink/StudentLink.js'
// import Header from '../Header/Header.js'
import '../../index.css';

const Classroom = props => {
  return (
    <div className='student-classroom'>
      {/* <Header /> */}
    {
      props.students.map(student => {
        return <StudentLink
          key={ student.name }
          id={ student.id }
          name={ student.name }
          deleteStudent={ () => { props.deleteStudent(student.id) } }/>
      })
    }
    </div>
  )
};

Classroom.propTypes = {

};

export default Classroom;
