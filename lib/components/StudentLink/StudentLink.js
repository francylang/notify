import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StudentLink = ({ studentValue, id, name, deleteStudent }) => {

  const vals = studentValue[id];
  const coreValueKeys = Object.keys(vals);
  let maxCoreValueKey = '';
  let maxCount = 0;
  const count = Object.values(vals).filter(num => num !== 0);
  const colors = ['red', 'green', 'navy', 'purple', 'yellow', 'blue', 'orange'];

  for (let index = 0; index < coreValueKeys.length; index++) {
    let coreValue = coreValueKeys[index];
    let oneValueCount = vals[coreValue];

    if (oneValueCount > maxCount) {
      maxCount = oneValueCount;
      maxCoreValueKey = coreValue;
    }
  }

  const forEachCount = count.map((num, index) => {
    let color = colors[index];
    return <p className={`each-count ${color}`}>{num}</p>;
  });

  const displayCount = maxCount > 0 ? `: ${maxCount}` : null;

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
      <div className={count.length ? 'count-color' : null }>{forEachCount}</div>
      {/* <div className='max-count'>{maxCoreValueKey}{displayCount}</div> */}
      {/* <div className={count.length ? 'indicator' : null }></div> */}
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
