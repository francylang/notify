import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { Link } from 'react-router-dom';




const Student = ({ handleStudentClick }) => {


  return (
    <Link to='/character'>
    <div className='student-card' name='francy' onClick={handleStudentClick}>
    student
  </div>
    </Link>
  )
}

Student.propTypes = {
};

export default Student;
