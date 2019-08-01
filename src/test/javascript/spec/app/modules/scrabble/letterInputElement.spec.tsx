import { mount } from 'enzyme';
import LetterInputElement from 'app/modules/scrabble/letterInputElement';
import React from 'react';

describe('LetterInputElement', () => {
  it('should render two divs', () => {
    const wrapper = mount(<LetterInputElement />);
    expect(wrapper.find('div').length).toEqual(2);
  });
  it('should render three buttons', () => {
    const wrapper = mount(<LetterInputElement />);
    expect(wrapper.find('Button').length).toEqual(3);
  });
});
