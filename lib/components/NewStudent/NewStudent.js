import React, { Component } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

class NewStudent extends Component {
  constructor(props) {
    super(props)
    const studentId = this.props.students.length
      this.state = {
        id: studentId,
        name: '',
        parentContact: '',
        phone: ''
      }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event, type) {
    let value = event.target.value;
    
    this.setState({
      [type]: value
    });
  }

//input fields note clearing
  handleSubmit(event, type) {
    event.preventDefault()
    const newStudent = Object.assign({}, this.state);
    this.props.addStudent(newStudent);
    console.log(this.props);
    this.setState({
      [type]: ''
    })
  }

  render() {
    return(
      <div className='new-student'>
        <h2 className='create-new-student'>Create New Student</h2>
        <form
          className='add-new-student-form'>
          <input
            type='text'
            placeholder='Student Name'
            onChange={ (event) => this.handleChange(event, 'name')} />
          <input
            type='text'
            placeholder='Parent Contact'
            onChange={ (event) => this.handleChange(event, 'parentContact')} />
          <input
            type='text'
            placeholder='phone'
            onChange={ (event) => this.handleChange(event, 'phone')}/>
          <input
            className='form-button'
            type='submit'
            onClick={this.handleSubmit}
            />
          </form>
        </div>
    )
  }
}

export default NewStudent;
