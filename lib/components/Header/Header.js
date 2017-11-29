import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import textFetch from '../../utils/textFetch.js';


const Header = ({ userStatus, students, coreValues, resetCount }) => {

  const sendSummary = (students, coreValues) => {
    students.forEach(student => textFetch(coreValues[student.id], student.name));
    resetCount();
  };

  const classroomContents = (
    <div>
      {
         userStatus ?
    <div className='right-side-header'>
     <div className='character-class-link'>
      <Link
        className='new-student-link'
        to='/newstudent'>
          <img
            src="lib/assets/avatar.svg"
            className='img-new-student'
            width='20px'
            height='20px'
            alt='kid icon' />
            <span className='underline'>
              New Student</span>
      </Link>
      <Link
        className='new-value-link'
        to='/NewCoreValue'>
        <div className='icon'></div>
          <img
            src="lib/assets/settings.svg"
            className='img-new-value'
            width='20px'
            height='20px'
            alt='core value icon' /><span className='underline'>New Core Value</span>
      </Link>
      <Link
        className='new-login-link'
        to='/Login'>
          <img
            src="lib/assets/logout.svg"
            className='img-new-value'
            width='20px'
            height='20px'
            alt='core value icon' /><span className='underline'>Logout</span>
      </Link>
     </div>
      <div className='summary-count'>
        <button className='summary-button launch-btn' onClick= { () => sendSummary(students, coreValues) }>Launch Summary</button>
        <button className='summary-button reset-count-btn' onClick= { () => resetCount() }>Reset Count</button>
      </div>
    </div>
      : null
      }
    </div>
  );

  return (
    <div className='header'>
        <Link className='header-link' to='/'>
          <div className='logo'></div>
        </Link>
        {classroomContents}
    </div>
  );
};

Header.propTypes = {
  userStatus: PropTypes.bool,
  students: PropTypes.array,
  coreValues: PropTypes.object,
  resetCount: PropTypes.func
};

export default Header;
