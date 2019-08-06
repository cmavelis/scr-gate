import { mount } from 'enzyme';
import Scrabble from 'app/modules/scrabble/scrabble';
import React from 'react';

describe('Scrabble', () => {
  it('should render a div', () => {
    const wrapper = mount(<Scrabble />);
    expect(wrapper.find('div.main').length).toEqual(1);
  });
});
