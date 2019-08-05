import { mount } from 'enzyme';
import TurnStatus from 'app/modules/scrabble/turnStatus';
import React from 'react';

describe('TurnStatus', () => {
  it('should render a div', () => {
    const wrapper = mount(<TurnStatus />);
    expect(wrapper.find('div').length).toEqual(5);
  });
});
