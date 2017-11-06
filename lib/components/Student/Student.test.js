import React from 'react';
import Student from './Student.js';
import { shallow } from 'enzyme';

describe('<Student />', () => {

  it('should exist', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Student />
      </MemoryRouter>
    );

    expect(wrapper).toBeDefined();
  });

  it('should match the Student snapshot', () => {
    const wrapper = shallow(<Student />);

    expect(wrapper).toMatchSnapshot();
  });
});
