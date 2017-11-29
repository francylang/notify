import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StudentLink = ({ studentValue, id, name, deleteStudent }) => {

  const vals = studentValue[id];
  const count = Object.values(vals).filter(num => num !== 0);

  return (
    // <div className={count.length ? 'student-card' : 'student-card'}>
    <div className='student-card'>
      <div
        className='delete-student-btn'
        onClick={() => deleteStudent(id)}>
      </div>
      <Link
        to={`/students/${id}`}
        // className={count.length ? 'student-name' : 'disabled-name'}>
        className='student-name'>
        {name}
      </Link>
      <div className={count.length ? 'indicator' : null }></div>
      {/* {count.length > 0 ? count.length : null} */}
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
