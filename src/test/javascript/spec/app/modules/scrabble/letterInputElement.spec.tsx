import { mount } from 'enzyme';
import BonusGroup from 'app/modules/scrabble/bonusGroup';
import React from 'react';

describe('LetterInputElement', () => {
  it('should render two divs', () => {
    const wrapper = mount(<BonusGroup />);
    expect(wrapper.find('div').length).toEqual(2);
  });
  it('should render three buttons', () => {
    const wrapper = mount(<BonusGroup />);
    expect(wrapper.find('Button').length).toEqual(3);
  });
});
