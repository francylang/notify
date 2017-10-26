import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from '../Student/Student.js'
import '../../index.css';


class Classroom extends Component {

  classRoster() {
    console.log('in class roster');
    return (
      this.props.students.map(student => {
        return <Student
          name =  {student.name}
        />
      }
    ))
  }

    // grab student info
    // reroute to character room


  //iterate through students
  render() {

  return (
    <div className='classroom'>
    {this.classRoster()}
    </div>
  );
  }
}
Classroom.propTypes = {

};

export default Classroom;
