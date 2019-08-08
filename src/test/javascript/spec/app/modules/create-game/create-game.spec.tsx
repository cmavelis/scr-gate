import React from 'react';
import { mount, shallow } from 'enzyme';

import { NameEntry } from 'app/modules/game/create-game/name-entry';
import { CreateGame } from 'app/modules/game/create-game/create-game';

describe('CreateGame component', () => {
  let wrapper;
  wrapper = shallow(<CreateGame />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <NameEntry />', () => {
    expect(wrapper.find('NameEntry').length).toEqual(4);
  });

  it('should activate the 3rd NameEntry, but not the 4th, when the first 2 are filled', () => {
    wrapper.setState({
      playerNames: {
        0: 'name1',
        1: 'name2',
        2: '',
        3: ''
      }
    });
    expect(wrapper.find({ playerNumber: 2 }).prop('deactivated')).toBeFalsy();
    expect(wrapper.find({ playerNumber: 3 }).prop('deactivated')).toBeTruthy();
  });

  it('should not allow more than 12 characters in a name', () => {
    wrapper = mount(<CreateGame />);
    wrapper.setState({
      playerNames: {
        0: 'name1',
        1: 'name2',
        2: '',
        3: ''
      }
    });
    const event = { target: { name: 'input', value: 'abcdefghijklmn' } };
    wrapper
      .find({ playerNumber: 0 })
      .find('input')
      .simulate('change', event);
    expect(wrapper.state().playerNames[0]).toEqual('abcdefghijkl');
  });
});

// TODO: write test for ShouldInputActivate
