import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';

describe('<App />', () => {

  it('should exist', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toBeDefined();
  });

  it('should match the App snapshot', () => {
    let wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
