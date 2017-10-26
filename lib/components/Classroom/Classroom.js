import PropTypes from 'prop-types';
import Student from '../Student/Student.js'

const Classroom = () => {
  return (
    <div className='student-card'>
      <div>
        <Student />
      </div>
    </div>
  )
}

Classroom.propTypes = {
};

export default Classroom;
