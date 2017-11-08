import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CoreValue from '../CoreValue/CoreValue.js';
import { Link } from 'react-router-dom';
import textFetch from '../../utils/textFetch.js';

class Student extends Component {
  constructor() {
    super();
    this.state = {
      msg: '',
      isHidden: true
    };
    this.colors = ['red', 'green', 'navy', 'purple', 'yellow', 'blue', 'orange'];
  }

  // async
  updateCoreValueAndTextParent(student, coreValue, studentId) {
    this.props.plusOneCoreValue(coreValue, studentId);
    this.renderPopUp();
    // await textFetch(student, coreValue);
  }

  async sendSummary() {
    const studentId = parseInt(this.props.match.params.id);
    const student = this.props.students[studentId].name;
    const studentSummary = JSON.stringify(this.props.coreValues[studentId])
    console.log(studentSummary);
    await textFetch(studentSummary, student);

  }

  //onclick of the summary button text all counts
  renderPopUp() {
    this.setState({isHidden: false});
    this.timer = setTimeout(_ => {
      this.setState({msg: 'Point Earned!'});
      this.setState({isHidden: true});
    }, 1500);
  }

  renderCoreValue() {
    const studentId = parseInt(this.props.match.params.id);
    const coreValues = this.props.coreValues[studentId];
    const student = this.props.students[studentId].name;

    // console.log(Object.values(coreValues).reduce((acc, point) => {
    //   return acc + point;
    // }, 0));

    return Object.keys(coreValues).map((coreValue, index) => {
      return (
        <CoreValue
          key={ coreValue }
          coreValue={ coreValue }
          plusOneCoreValue={ () =>
            this.updateCoreValueAndTextParent(student, coreValue, studentId)
          }
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
          Point Earned!
        </div>
        {/* <div className='pop-up'>
          Point Earned!
        </div> */}
        <h2 className='student-name-header'>{this.props.students[studentId].name}</h2>
        <button onClick={() => this.sendSummary() }>SendSummary</button>
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
