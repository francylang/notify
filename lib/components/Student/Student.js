import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { Link } from 'react-router-dom';

const Student = ({ id }) => {

  return (
    <Link to={'/character/' + id}>
    <div className='student-card'>
    student
    </div>
    </Link>
  )
}

Student.propTypes = {
};

export default Student;
