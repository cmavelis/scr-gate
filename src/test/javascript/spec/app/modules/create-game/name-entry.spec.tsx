import React from 'react';
import { shallow } from 'enzyme';

import { NameEntry } from 'app/modules/game/create-game/name-entry';

const noop = () => {};

describe('NameEntry component', () => {
  let wrapper;
  wrapper = shallow(
    <NameEntry
      playerNumber={2}
      playerName="Me"
      onChange={noop}
      deactivated={false}
      exists={false}
      onTimeout={noop}
      onIconClick={noop}
    />);

  it('should render an <InputGroup />', () => {
    expect(wrapper.find('InputGroup').length).toEqual(1);
  });
});
