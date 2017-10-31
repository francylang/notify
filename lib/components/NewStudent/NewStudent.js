import React, { Component } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

class NewStudent extends Component {
  constructor(props) {
    super(props)
    console.log(props);
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

  handleSubmit(event, type) {
    event.preventDefault();
    const newStudent = Object.assign({}, this.state);
    this.props.addStudent(newStudent);
    this.setState({
      id: '',
      name: '',
      parentContact: '',
      phone: ''
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
            value={this.state.name}
            onChange={ (event) => this.handleChange(event, 'name')} />
          <input
            type='text'
            placeholder='Parent Contact'
            value={this.state.parentContact}
            onChange={ (event) => this.handleChange(event, 'parentContact')} />
          <input
            type='text'
            placeholder='phone'
            value={this.state.phone}
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
