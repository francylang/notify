import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from '../Student/Student.js'
import '../../index.css';


const Classroom = () => {
  return (
    <div className='classroom'>
      <Student />
    </div>
  );
};

Classroom.propTypes = {

};

export default Classroom;
