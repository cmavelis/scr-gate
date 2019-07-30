import React from 'react';
import { shallow } from 'enzyme';

import { NameEntry } from 'app/modules/create-game/name-entry';
import { CreateGame } from 'app/modules/create-game/create-game';

describe('CreateGame component', () => {
  let wrapper;
  wrapper = shallow(<CreateGame />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <NameEntry />', () => {
    expect(wrapper.find('NameEntry').length).toEqual(4);
  });

  // TODO: write these tests
  // it('should not allow more than 12 characters in a name', () => {
  //   expect
  // })

  // it('should activate the 3rd field when the first 2 are filled', () => {
  //   expect
  // })
});
