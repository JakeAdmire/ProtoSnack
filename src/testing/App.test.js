import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it ('should have default state', () => {
    expect(wrapper.state()).toEqual({ 
      userName: 'User',
      cards: [],
      prototypes: [],
      cardNumber: 0
     });
  })

  it('should reset state when invoked', () => {
    expect(wrapper.state('cardNumber')).toEqual(0);
    wrapper.instance().resetState({'cardNumber': 10});
    expect(wrapper.state('cardNumber')).toEqual(10);
  })
})