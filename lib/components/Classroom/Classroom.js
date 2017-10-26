import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from '../Student/Student.js'
import '../../index.css';


class Classroom extends Component {

  handleStudentClick(event) {
    console.log(event.target.name);

    // grab student info
    // reroute to character room

  }

  render() {
  return (
    <div className='classroom'>
      <Student
        handleStudentClick={this.handleStudentClick.bind(this)}/>
      <Student />
      <Student />
      <Student />
      <Student />
    </div>
  );
  }
}
Classroom.propTypes = {

};

export default Classroom;
