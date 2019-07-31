import { shallow, mount } from 'enzyme';
import SelectNumber from 'app/modules/scrabble/selectNumber';
import React from 'react';

describe('SelectNumber', () => {
  it('should render a div', () => {
    const wrapper = mount(<SelectNumber />);
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render three buttons', () => {
    const wrapper = mount(<SelectNumber />);
    expect(wrapper.find('Button').length).toEqual(3);
  });
});
