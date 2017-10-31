import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CoreValue from '../CoreValue/CoreValue.js'
import '../../index.css';
import { Link } from 'react-router-dom';
import textFetch from '../../utils/textFetch.js';

class Student extends Component {
  constructor() {
    super()
  }

  async updateCoreValueAndTextParent(coreValue, studentId) {
     this.props.plusOneCoreValue(coreValue, studentId)
     await textFetch()
  }

  characterTraits() {
    const studentId = parseInt(this.props.match.params.id);
    const coreValues = this.props.coreValues[studentId];

    return Object.keys(coreValues).map(coreValue => {
      return (
        <CoreValue
          key={ coreValue }
          coreValue={ coreValue }
          plusOneCoreValue={ () => { this.updateCoreValueAndTextParent(coreValue, studentId) } }
          studentId={ studentId }
          count={ coreValues[coreValue] }
          />
        )
     });
  }

  render() {
    return (
    //<Link to={'/'} className='student-link' onClick={props.sendText}>
      <div className='classroom'>
        { this.characterTraits() }
      </div>
  //  </Link>
    );
 }
}

Student.propTypes = {

};

export default Student;
