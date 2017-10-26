import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from '../Student/Student.js'
import '../../index.css';


class Classroom extends Component {



    // grab student info
    // reroute to character room


  //iterate through students

  render() {
  return (
    <div className='classroom'>
      <Student
      id={0}
    />
    </div>
  );
  }
}
Classroom.propTypes = {

};

export default Classroom;
