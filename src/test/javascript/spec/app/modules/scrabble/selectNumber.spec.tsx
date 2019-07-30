import { shallow } from 'enzyme';
import { SelectNumber } from 'app/modules/scrabble/selectNumber';
import React from 'react';

describe('SelectNumber', () => {
  it('should render a div', () => {
    const wrapper = shallow(<SelectNumber />);
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render three buttons', () => {
    const wrapper = shallow(<SelectNumber />);
    expect(wrapper.find('button').length).toEqual(3);
  });
});
