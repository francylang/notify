import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Character = ({ coreValue, plusOneCoreValue }) => {
  return (
    <div className='character-card' onClick={() => plusOneCoreValue()}>
      <article className='card'>
        <h3>{coreValue}</h3>
      </article>
    </div>
  );
};

Character.propTypes = {

};

export default Character;
