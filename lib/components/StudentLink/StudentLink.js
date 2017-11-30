import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StudentLink = ({ studentValue, id, name, deleteStudent }) => {

  const vals = studentValue[id];
  const count = Object.values(vals).filter(num => num !== 0);

  return (
    <div className='student-card'>
      <div
        className='delete-student-btn'
        onClick={() => deleteStudent(id)}>
      </div>
      <Link
        to={`/students/${id}`}
        className='student-name'>
        {name}
      </Link>
      <div className={count.length ? 'indicator' : null }></div>
    </div>
  );
};

StudentLink.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  deleteStudent: PropTypes.func,
  studentValue: PropTypes.object
};

export default StudentLink;
