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

  // studentName(student, i) {
  //   console.log(this.props);
  //
  //   const mapName = this.props.students.map(student => student.name)
  //   const filterName = mapName.filter(name => name)
  //
  // this.props.match.params.id === this.props.students.id
  //   return this.props.students.name
  // }

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
    const studentId = parseInt(this.props.match.params.id);
    return (
      <div>
          <h2 className='student-name-header'>{this.props.students[studentId].name}</h2>
            <div
              className='core-values-ctnr'>
              { this.characterTraits() }
            </div>
            <div className='return-to-students'>
              <div className='values-classroom'>
                <Link
                  className='student-link-students'
                  to={'/'}>
                  <img
                    src='../lib/assets/leftArrow.svg'
                    className='icon-left-arrow'
                    width='25px'
                    height='25px' />
                  <h3
                    className='return-to'>
                    Return to Students
                  </h3>
                </Link>
            </div>
        </div>
      </div>
    );
 }
}

Student.propTypes = {

};

export default Student;
