import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewCoreValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coreValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    let value = event.target.value;

    this.setState({
      [type]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCoreValue(this.state.coreValue);
    this.setState({
      coreValue: ''
    });
    this.props.history.push('/');

  }

  render() {
    const isDisabled = this.state.coreValue.length ? false : true;
    return (
      <div className='new-value'>
        <h2 className='create-new-value'>Add New Core Value</h2>
          <form
            className='add-new-value-form'>
            <input
              type='text'
              placeholder='Core Value'
              className='new-core-value-input'
              value={this.state.coreValue}
              onChange={ (event) => this.handleChange(event, 'coreValue')}/>
            <input
              disabled={ isDisabled }
              className='form-button-value'
              type='submit'
              onClick={this.handleSubmit}/>
          </form>
      </div>
    );
  }
}

NewCoreValue.propTypes = {
  addCoreValue: PropTypes.func,
  isAuthenticated: PropTypes.func,
  history: PropTypes.object
};


export default NewCoreValue;
