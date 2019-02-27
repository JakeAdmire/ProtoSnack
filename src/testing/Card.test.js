import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card';
import { shallow } from 'enzyme';

const mockCard = {problem: ''};
const showPrevCardMock = jest.fn();
const showNextCardMock = jest.fn();

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card 
          frontContent={mockCard}
          nextCard={showNextCardMock}
          prevCard={showPrevCardMock}
        />
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({ 
      showAnswer: false,
      attemptCorrect: false,
      cardNumber: 0
     });
  })

  it('should invoke handleClick on button click', () => {
    wrapper.instance().setState({'showAnswer': true});
    wrapper.find('.back-button').simulate('click', {target: {innerText: 'try again'}});
    expect(wrapper.state('showAnswer')).toEqual(false);
  })

  it('should invoke changeCards on left button click', () => {
    wrapper.instance().setState({'showAnswer': true});
    expect(wrapper.state('showAnswer')).toEqual(true);
    wrapper.find('.left').simulate('click', {target: {classList: {value: 'left'}}});
    expect(wrapper.state('showAnswer')).toEqual(false);
  })

  it('should invoke changeCards on right button click', () => {
    wrapper.instance().setState({'showAnswer': true});
    expect(wrapper.state('showAnswer')).toEqual(true);
    wrapper.find('.right').simulate('click', {target: {classList: {value: 'right'}}});
    expect(wrapper.state('showAnswer')).toEqual(false);
  })

  it('should change state when showResults is invoked', () => {
    expect(wrapper.state('showAnswer')).toEqual(false);
    wrapper.instance().showResults({target: {innerText: 'sort'}});
    expect(wrapper.state('showAnswer')).toEqual(true);
  })

})