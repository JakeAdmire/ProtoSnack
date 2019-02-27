import React from 'react';
import ReactDOM from 'react-dom';
import Answers from '../Answers';
import { shallow } from 'enzyme';

const answersMock = ['', '', ''];

describe('Answers', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Answers  
            answers={answersMock}
            />
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})