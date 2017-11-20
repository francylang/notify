import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StudentLink = ({ studentValue, id, name, deleteStudent }) => {

  const vals = studentValue[id]
  const count = Object.values(vals).filter(num => num !== 0)

  return (
    <div className={count.length ? 'student-card' : 'disabled-card'}>
      <div
        className='delete-student-btn'
        onClick={() => deleteStudent(id)}>
        {/* <img
          src='../lib/assets/close-circular-button-of-a-cross.svg'
          className='delete-icon'
          width='20px'
          height='20px' /> */}
      </div>
      <Link
        to={`/students/${id}`}
        className={count.length ? 'student-name' : 'disabled-name'}>
        {name}
      </Link>
    </div>
  );
};

StudentLink.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  deleteStudent: PropTypes.func
};

export default StudentLink;
