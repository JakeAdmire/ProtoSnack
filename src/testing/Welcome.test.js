import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from '../Welcome';
import { shallow } from 'enzyme';

const resetStateMock = jest.fn();
const cardsMock = [{}, {}, {}];

describe('Welcome', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Welcome  resetState={resetStateMock}
                cards={cardsMock}
                />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({ 
      firstTime: true,
      userName: ''
     });
  })

  it('should invoke setName on input change', () => {
    expect(wrapper.state('userName')).toEqual('');
    wrapper.find('.userSubmit').simulate('change', {target: {value: 'test'}});
    expect(wrapper.state('userName')).toEqual('test')
  })

  it('should invoke storeName on button click', () => {
    expect(wrapper.state('firstTime')).toEqual(true);
    wrapper.find('.userSubmit').simulate('change', {target: {value: 'test'}});
    wrapper.find('.submitName').simulate('click', {preventDefault: jest.fn()});
    expect(wrapper.state('firstTime')).toEqual(false);
  })

  it('should call resetState when storeName is invoked', () => {
    wrapper.instance().storeName({preventDefault: jest.fn()});
    expect(resetStateMock).toBeCalled();
  })

})

