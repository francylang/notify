import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { Link } from 'react-router-dom';

const StudentLink = ({ id, name }) => {

  return (
    <Link to={`/students/${id}`}>
      <div className='student-card'>
        {name}
      </div>
    </Link>
  )
}

StudentLink.propTypes = {
};

export default StudentLink;
