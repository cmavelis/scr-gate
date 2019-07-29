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
});
