import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../index.css';
// import { textFetch }'../../utils/textFetch.js';

const CoreValue = ({ coreValue, plusOneCoreValue, studentId, count, color }) => {

  return (
    <div
      className={`character-card ${color}`}
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
