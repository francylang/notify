import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CoreValue from '../CoreValue/CoreValue.js'
import '../../index.css';
import { Link } from 'react-router-dom';
import textFetch from '../../utils/textFetch.js';

class Student extends Component {
  constructor() {
    super()
    this.colors = ['red', 'green', 'blue', 'purple', 'yellow']
  }

  // async
  updateCoreValueAndTextParent(coreValue, studentId) {
     this.props.plusOneCoreValue(coreValue, studentId)
    //  await textFetch()
  }

  characterTraits() {
    const studentId = parseInt(this.props.match.params.id);
    const coreValues = this.props.coreValues[studentId];

    return Object.keys(coreValues).map((coreValue, i) => {
      return (
        <CoreValue
          key={ coreValue }
          coreValue={ coreValue }
          plusOneCoreValue={ () => { this.updateCoreValueAndTextParent(coreValue, studentId) } }
          studentId={ studentId }
          color={this.colors[i]}
          count={ coreValues[coreValue] }
          />
        )
     });
  }

  render() {
    return (
      <div>
          <div className='return-to-students'>
            <div className='values-classroom'>
              <Link
                className='student-link-students'
                to={'/'}>
                <img
                  src='../lib/assets/leftArrow.svg' className='icon-left-arrow'
                  width='25px'
                  height='25px' />
                <h3
                  className='return-to'>
                  Return to Students
                </h3>
              </Link>
          </div>
            <div
              className='core-values-ctnr'>
              { this.characterTraits() }
            </div>
        </div>
      </div>
    );
 }
}

Student.propTypes = {

};

export default Student;
