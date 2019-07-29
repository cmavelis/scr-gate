import React from 'react';
import { shallow } from 'enzyme';

import { NameEntry } from 'app/modules/create-game/name-entry';

describe('NameEntry component', () => {
  let wrapper;
  wrapper = shallow(<NameEntry />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
