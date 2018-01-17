import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentLink from '../StudentLink/StudentLink.js';
// import { Redirect } from 'react-router';

class Classroom extends Component {
  constructor() {
    super();
  }



  render() {
    if (userStatus === false) {
      // return <Redirect to='/login'/>;
    }

    const { teacher, students, deleteStudent, userStatus, coreValues, name, id } = this.props;

    return (
      <div>
        <div className='teacher-and-summary'>
          <h2 className='teacher-name'>{teacher}'s Classroom</h2>
        </div>
         <div className='student-classroom-container'>
          <div className='student-classroom'>
          {
            students.map((student, index) => {
              return <StudentLink
                key={ student.name }
                id={ student.id }
                name={ student.name }
                deleteStudent={ () => deleteStudent(id) }
                studentInfo={ students }
                studentValue={ coreValues }
              />;
            })
          }
         </div>
        </div>
      </div>
    );
  }
}

Classroom.propTypes = {
  teacher: PropTypes.string,
  students: PropTypes.array,
  deleteStudent: PropTypes.func,
  userStatus: PropTypes.bool,
  coreValues: PropTypes.object,
  resetCount: PropTypes.func
};

export default Classroom;
