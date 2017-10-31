import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewCoreValue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coreValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event, type) {
    let value = event.target.value;

    this.setState({
      [type]: value
    });
  }

  handleSubmit(eent, type) {
    event.preventDefault();
    const newValue = Object.assign({}, this.state);
    this.props.addCoreValue(newValue);
    this.setState({
      [type]: ''
    })
  }

  render() {
  return(
    <div className='new-value'>
      <h2 className='create-new-value'>Add New Core Value</h2>
      <form
        className='add-new-value-form'>
        <input
          type='text'
          placeholder='Core Value'
          onChange={ (event) => this.handleChange(event, 'coreValue')}/>
        <input
          className='form-button'
          type='submit'
          onClick={this.handleSubmit}/>
      </form>
    </div>
  )
 }

}

export default NewCoreValue;
