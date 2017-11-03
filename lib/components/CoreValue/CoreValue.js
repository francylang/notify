import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../index.css';

const CoreValue = ({ opacity, setOpacity, coreValue, plusOneCoreValue, studentId, count, color }) => {

  return (
    <div
      // className={ opacity ? 'no-opacity' : 'character-card' }
      className={opacity ? `character-card ${color}` : `no-opacity ${color}`}
      onClick={() => plusOneCoreValue(coreValue, studentId)}
      // onClick={setOpacity}
      >
        <article className='card'>
          <h3 className='core-value'>{ coreValue }</h3>

            <h4
                className={'core-value-counter' }>

                { count }
            </h4>
        </article>
    </div>
  );
};

CoreValue.propTypes = {
  coreValue: PropTypes.string,
  plusOneCoreValue: PropTypes.func,
  studentId: PropTypes.number,
  count: PropTypes.number,
  color: PropTypes.string
};

export default CoreValue;
