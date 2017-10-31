import React from 'react';
import { Link } from 'react-router-dom';


const NewCoreValue = props => {
console.log(props);
  // const newValue = Object.assign({props.coreValues}, coreValue)
  console.log(newValue);

  let coreValueInput;
  const handleSubmit = event => {
  event.preventDefault()
  props.addCoreValue({coreValue: newValue
    })
  }
  return(
    <div className='new-student'>
      <h2 className='create-new-student'>Add New Core Value</h2>
      <form
        className='add-new-student-form'
        onSubmit={ handleSubmit }>
        <input
          ref={coreValue => coreValueInput = coreValue} type='text'
          placeholder='Core Value'/>
        <input
          className='form-button'
          type='submit'/>
      </form>
    </div>
  )
}

export default NewCoreValue;
