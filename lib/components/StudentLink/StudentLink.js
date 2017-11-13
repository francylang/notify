import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StudentLink = ({ id, name, deleteStudent, coreValue }) => {
  return (
    <div className='student-card'>
      <div
        className='delete-student-btn'
        onClick={() => deleteStudent(id)}>
        <img
          src='../lib/assets/close-circular-button-of-a-cross.svg'
          className='delete-icon'
          width='20px'
          height='20px' />
      </div>
      <Link
        to={`/students/${id}`}
        className='student-name'>
        {name}
      </Link>
      <div className='dots indicator'>
        { coreValue }
      </div>
    </div>
  );
};

StudentLink.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  deleteStudent: PropTypes.func
};

export default StudentLink;
