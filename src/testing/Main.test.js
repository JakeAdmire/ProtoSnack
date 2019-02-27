import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../Main';
import { shallow } from 'enzyme';

const cardsMock = [{}, {}, {}]
const resetStateMock = jest.fn();

describe('Main', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Main cards={cardsMock}
            resetState={resetStateMock}
            />
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({ 
      cardNumber: 0
     });
  })

  // it('should increase card number when invoked', () => {
  //   expect(wrapper.state('cardNumber')).toEqual(0);
  //   wrapper.instance().increaseCardNumber();
  //   expect(wrapper.state('cardNumber')).toEqual(1);
  // })

  it('should move to the next card when invoked', () => {
    expect(wrapper.state('cardNumber')).toEqual(0);
    wrapper.instance().showNextCard();
    expect(wrapper.state('cardNumber')).toEqual(2);
  })

  it('should move to the previous card when invoked', () => {
    wrapper.instance().showNextCard();
    expect(wrapper.state('cardNumber')).toEqual(2);
    wrapper.instance().showPrevCard();
    expect(wrapper.state('cardNumber')).toEqual(0);
  })

})