import { shallow } from 'enzyme';
import { Scrabble } from 'app/modules/scrabble/scrabble';
import React from 'react';

describe('Scrabble', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Scrabble />);
    console.log(wrapper.debug());
    expect(wrapper.find('div').length).toEqual(1);
  });
});
