import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CoreValue from '../CoreValue/CoreValue.js';
import { Link } from 'react-router-dom';

class Student extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
    this.colors = ['red', 'green', 'navy', 'purple', 'yellow', 'blue', 'orange'];
  }

  updateCoreValue(student, coreValue, studentId) {
    this.props.plusOneCoreValue(coreValue, studentId);
    this.renderPopUp();
  }

  renderPopUp() {
    this.setState({isHidden: false});
    this.timer = setTimeout(_ => {
      this.setState({isHidden: true});
    }, 1000);
  }

  renderCoreValue() {
    const studentId = parseInt(this.props.match.params.id);
    const coreValues = this.props.coreValues[studentId];
    const student = this.props.students[studentId].name;

    return Object.keys(coreValues).map((coreValue, index) => {
      return (
        <CoreValue
          key={ coreValue }
          coreValue={ coreValue }
          plusOneCoreValue={ () => this.updateCoreValue(student, coreValue, studentId) }
          studentId={ studentId }
          color={this.colors[index]}
          count={ coreValues[coreValue] }
          isHidden={ this.state.isHidden }
          />
        );
    });
  }

  render() {
    const studentId = parseInt(this.props.match.params.id);

    return (
      <div>
        <div className={!this.state.isHidden ? 'pop-up' : 'fade'}>
          Student Success!
        </div>
        <h2 className='student-name-header'>{this.props.students[studentId].name}</h2>
          <div
            className='core-values-ctnr'>
            { this.renderCoreValue() }
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
                <h3 className='return-to'>Return to Students</h3>
              </Link>
            </div>
          </div>
      </div>
    );
  }
}

Student.propTypes = {
  match: PropTypes.object,
  plusOneCoreValue: PropTypes.func,
  coreValues: PropTypes.object,
  students: PropTypes.array
};

export default Student;
