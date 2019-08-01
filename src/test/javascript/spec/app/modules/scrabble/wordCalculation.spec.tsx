import { mount } from 'enzyme';
import WordCalculation from 'app/modules/scrabble/wordCalculation';
import React from 'react';

describe('WordCalculation', () => {
  it('should render 33 divs', () => {
    const wrapper = mount(<WordCalculation />);
    expect(wrapper.find('div').length).toEqual(33);
  });
  it('should render three buttons', () => {
    const wrapper = mount(<WordCalculation />);
    expect(wrapper.find('Button').length).toEqual(45);
  });
});
