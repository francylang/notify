import React from 'react';
import PropTypes from 'prop-types';
import CoreValue from '../CoreValue/CoreValue.js'
import '../../index.css';
import { Link } from 'react-router-dom';

const Student = props => {

  const styles = {
    styleOne: {
      color: '#fff',
      backgroundColor: '#000',
    },
    styleTwo: {
      color: '#fff',
      backgroundColor: '#6ff549',
    },
    styleThree: {
      color: '#fff',
      backgroundColor: '#908d59',
    },
    styleThree: {
      color: '#fff',
      backgroundColor: '#908d89',
    }
  }

  const stylesRender = console.log(Object.values(styles))

  const studentId = parseInt(props.match.params.id);
  const coreValues = props.coreValues[studentId];

  const characterTraits = Object.keys(coreValues).map(coreValue => {
    return (
      <CoreValue
        key={ coreValue }
        coreValue={ coreValue }
        plusOneCoreValue={ () => { props.plusOneCoreValue(coreValue, studentId) } }
        studentId={ studentId }/>
     )
  });

  return (
    <Link to={'/'} className='student-link' onClick={props.sendText}>
      <div className='classroom'>
        { characterTraits }
      </div>
    </Link>
  );
}

Student.propTypes = {

};

export default Student;
