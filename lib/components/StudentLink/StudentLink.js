import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StudentLink = ({ studentValue, id, name, deleteStudent }) => {

  const vals = studentValue[id];
  const count = Object.values(vals).filter(num => num !== 0);
  const colors = ['red', 'green', 'navy', 'purple', 'yellow', 'blue', 'orange'];
  const colorsVals = [
    { Integrity:'red' },
    { Grit: 'green' },
    { Perseverance: 'navy' },
    { Responsibility: 'purple' },
    { Respect: 'yellow' }
  ];

  const forEachCount = count.map((countColor, index) => {
    let color = colors[index];
    return (
      <p
        key={ `${color}-${index}`}
        className={`each-count ${color}`}
      >
        {countColor}
      </p>
    );
  });


  return (
    <li className='student-card'>
      <div
        className='delete-student-btn'
        onClick={() => deleteStudent(id)}>
      </div>
      <Link
        to={`/students/${id}`}
        className='student-name'>
        {name}
      </Link>
      <div className={count.length ? 'count-color' : null }>{ forEachCount }</div>
    </li>
  );
};

StudentLink.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  deleteStudent: PropTypes.func,
  studentValue: PropTypes.object
};

export default StudentLink;
