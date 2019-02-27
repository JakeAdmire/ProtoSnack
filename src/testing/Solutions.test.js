import React from 'react';
import ReactDOM from 'react-dom';
import Solution from '../Solution';
import { shallow } from 'enzyme';

describe('Solution', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Solution />
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})