import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
// import { textFetch }'../../utils/textFetch.js';

const CoreValue = ({ coreValue, plusOneCoreValue, studentId, count, style }) => {

  return (
    <div
      className='character-card'
      onClick={() => plusOneCoreValue(coreValue, studentId)}>
      <article className='card'>
        <h3 className='core-value'>{ coreValue }</h3>
        <h4 className='core-value-counter'>{ count }</h4>
      </article>
    </div>
  );
};

CoreValue.propTypes = {

};

export default CoreValue;
