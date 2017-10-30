import React from 'react';
import { Link } from 'react-router-dom';


const NewCoreValue = (props) => {
  // const studentId = props.students.length

  let coreValueInput;

  const handleSubmit = event => {
    event.preventDefault()
    props.addCoreValue(coreValue)
  }
  return(
    <div className='new-student'>
      <h2 className='create-new-student'>Create New Student</h2>
      <form className='add-new-student-form' onSubmit={handleSubmit}>
        <input ref={coreValue => coreValueInput = coreValue} type='text' placeholder='Core Value'/>
        <input className='form-button' type='submit'/>
      </form>
    </div>
  )
}

export default NewCoreValue;
