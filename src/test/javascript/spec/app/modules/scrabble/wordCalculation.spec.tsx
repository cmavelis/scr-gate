import { mount } from 'enzyme';
import WordCalculation from 'app/modules/scrabble/wordCalculation';
import React from 'react';

describe('WordCalculation', () => {
  it('should render 39 divs', () => {
    const wrapper = mount(<WordCalculation />);
    expect(wrapper.find('div').length).toEqual(39);
  });

  it('should render 51 buttons', () => {
    const wrapper = mount(<WordCalculation />);
    expect(wrapper.find('Button').length).toEqual(51);
  });

  it('should accurately calculate the score for the theoretical highest-scoring word', () => {
    const wrapper = mount(<WordCalculation />);
    wrapper.setState({
      L1: 'o-no',
      L2: 'x-no',
      L3: 'y-no',
      L4: 'p-2x',
      L5: 'h-no',
      L6: 'e-no',
      L7: 'n-no',
      L8: 'b-no',
      L9: 'u-no',
      L10: 't-no',
      L11: 'a-no',
      L12: 'z-2x',
      L13: 'o-no',
      L14: 'n-no',
      L15: 'e-no',
      tripleWord: '27w',
      score: 0
    });
    const event = { target: { name: 1, value: 'o' } };
    wrapper
      .find('input')
      .at(0)
      .simulate('change', event);
    expect(wrapper.state().score).toEqual(1458);
  });

  it('should accurately calculate the score for a blank letter', () => {
    const wrapper = mount(<WordCalculation />);
    wrapper.setState({
      L1: 'o-0x',
      score: 0
    });
    const event = { target: { name: 1, value: 'o-0x' } };
    wrapper
      .find('input')
      .at(0)
      .simulate('change', event);
    expect(wrapper.state().score).toEqual(0);
  });

  it('should accurately calculate the score for a tripled letter', () => {
    const wrapper = mount(<WordCalculation />);
    wrapper.setState({
      L1: 'o-3x',
      score: 0
    });
    const event = { target: { name: 1, value: 'o-3x' } };
    wrapper
      .find('input')
      .at(0)
      .simulate('change', event);
    expect(wrapper.state().score).toEqual(3);
  });
});
