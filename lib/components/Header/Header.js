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
    <div className="header-rightSide">
    {
       userStatus ?
    <div className="header-links">
    <div
      className='header-links-hamburger'>
      <img
        src="lib/assets/hamburger.svg"
        alt='hamburger icon'
      />
    </div>
    <div className='header-links-withIcons'>
      <Link
        className='header-links-newStudent'
        to='/newstudent'>
          <img
            src="lib/assets/avatar.svg"
            className='img-new-student'
            width='20px'
            height='20px'
            alt='kid icon' />
            <span className='underline'>
              New Student
            </span>
      </Link>
      <Link
        className='header-links-newValue'
        to='/NewCoreValue'>
        <div className='icon'></div>
          <img
            src="lib/assets/settings.svg"
            className='img-new-value'
            width='20px'
            height='20px'
            alt='core value icon' />
          <span className='underline'>
            New Core Value
          </span>
      </Link>
      <Link
        className='header-links-login'
        to='/Login'>
          <img
            src="lib/assets/logout.svg"
            className='img-new-value'
            width='20px'
            height='20px'
            alt='core value icon' />
          <span className='underline'>
            Logout
          </span>
      </Link>
     </div>
     <div className='header-links-summary'>
        <button
          className='header-links-summary-button header-links-summary-button-launch'
          onClick= { () => sendSummary(students, coreValues) }>
        Launch Summary
        </button>
        <button
          className='header-links-summary-button header-links-summary-button-reset'
          onClick= { () => resetCount() }
        >
          Reset Count
        </button>
      </div>
    </div>
      : null
      }
  </div>
  );

  return (
    <div className='header'>
      <div className='header-leftSide'>
        <Link className='header-logoLink' to='/'>
          <img className="logo" src='http://localhost:8080/lib/assets/notify1.svg' />
        </Link>
      </div>
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
