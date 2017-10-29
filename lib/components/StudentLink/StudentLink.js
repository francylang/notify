import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { Link } from 'react-router-dom';

const StudentLink = ({ id, name }) => {

  return (
    <div className='student-card'>
    <Link to={`/students/${id}`}
          className='student-name'>
        {name}
        {}
    </Link>
  </div>
  )
}

StudentLink.propTypes = {
};

export default StudentLink;
