import React from 'react';
import '../../index.css';

const NewStudent = (props) => {

  let studentNameInput;
  const handleSubmit = (event) => {
    event.preventDefault()
    props.addStudent()
  }
  return(
    <div className='new-student'>
      <form className='add-new-student-form' onSubmit={handleSubmit}>
        <input type='text'/>
        <input type='text'/>
        <input type='text'/>
        <input type='text'/>
        <input type='submit'/>
      </form>
    </div>
  )

}

export default NewStudent;


{/* <input ref={id => studentIdInput = id}type='text'/>
<input ref={name => studentNameInput = name}type='text'/>
<input ref={parentContact => studentParentInput = parentContact}type='text'/>
<input ref={phone => studentPhoneInput = phone}type='text'/>
<input type='submit'/> */}
