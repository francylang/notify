import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character.js'
import '../../index.css';


const Student = props => {

  const studentId = parseInt(props.match.params.id)
  const coreValues = props.coreValues[studentId]

  // FIXME: change character component to core values or something

  const characterTraits = Object.keys(coreValues).map(coreValue => {
    return (
    <Character
      key={ coreValue }
      coreValue={ coreValue }/>
     )
    })

  return (
    <div className='classroom'>
      { characterTraits }
    </div>
  );
}


Student.propTypes = {

};

export default Student;
