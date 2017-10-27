import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character.js'
import '../../index.css';


const Student = props => {

      const studentId = parseInt(props.match.params.id)
      debugger;
      const coreValues = props.coreValues[studentId]

        // coreValuesKeys.map(coreValue => {
        //   return console.log('string');
          // <Character
          //   key={ coreValue }
          //   />

      return (
        <div className='classroom'>
          {/* {this.coreValues()} */}
        </div>
      );
  }


Student.propTypes = {

};

export default Student;
