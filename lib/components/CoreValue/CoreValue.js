import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const CoreValue = ({ coreValue, plusOneCoreValue, studentId }) => {
  return (
    <div className='character-card' onClick={() => plusOneCoreValue(coreValue, studentId)}>
      <article className='card'>
        <h3 className='core-value'>{coreValue}</h3>
      </article>
    </div>
  );
};

CoreValue.propTypes = {

};

export default CoreValue;
