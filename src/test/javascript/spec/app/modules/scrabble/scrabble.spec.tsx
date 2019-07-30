import { shallow } from 'enzyme';
import Scrabble from 'app/modules/scrabble/scrabble';
import React from 'react';

describe('Scrabble', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Scrabble />)
      .first()
      .shallow();
    wrapper.debug();
    console.log(wrapper.debug());
    expect(wrapper.find('div')).to.have.lengthOf(1);
  });
});
