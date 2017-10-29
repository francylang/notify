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
      <h2 className='create-new-student'>Create New Student</h2>

      <form className='add-new-student-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Student Name'/>
        <input type='text' placeholder='Parent Contact'/>
        <input type='text' placeholder='phone'/>
        <input className='form-button' type='submit'/>
      </form>
    </div>
  )
}

{/* <div className="login">
      <form>
        <div className='heading'>
          <h2>LOGIN</h2>
          <h4 className='error'>
            {loginError ? 'Email and Password do not match' : null}
          </h4>
        </div>
        {this.renderInputs()}
        {this.renderButton()}
      </form>
    </div> */}

export default NewStudent;


{/* <input ref={id => studentIdInput = id}type='text'/>
<input ref={name => studentNameInput = name}type='text'/>
<input ref={parentContact => studentParentInput = parentContact}type='text'/>
<input ref={phone => studentPhoneInput = phone}type='text'/>
<input type='submit'/> */}
