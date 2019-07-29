import React from 'react';
import { shallow } from 'enzyme';

import { NameEntry } from 'app/modules/create-game/name-entry';

const noop = (a, b) => {};

describe('NameEntry component', () => {
  let wrapper;
  wrapper = shallow(<NameEntry playerNumber={2} playerName="Me" onChange={noop} deactivated={false} />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
