import React from 'react';
import { mount, shallow } from 'enzyme';

import { NameEntry } from 'app/modules/game/create-game/name-entry';
import { CreateGame } from 'app/modules/game/create-game/create-game';

const noop = () => {};

NameEntry.displayName = 'NameEntry';

describe('CreateGame component', () => {
  let wrapper;
  wrapper = shallow(<CreateGame
    playerNames= {{
      ...[0, 1, 2, 3].map(() => ({ name: '', exists: false }))
      }}
    gameName="testGame"
    handlePlayerNameChange={noop}
    handleGameNameChange={noop}
    checkPlayerExists={noop}
  />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should render a <NameEntry />', () => {
    expect(wrapper.find('NameEntry').length).toEqual(4);
  });

  it('should activate the 3rd NameEntry, but not the 4th, when the first 2 are filled', () => {
    wrapper.setProps({
      playerNames: {
        0: { name: 'name1', exists: false },
        1: { name: 'name2', exists: false },
        2: { name: '', exists: false },
        3: { name: '', exists: false }
      }
    });
    expect(wrapper.find({ playerNumber: 2 }).prop('deactivated')).toBeFalsy();
    expect(wrapper.find({ playerNumber: 3 }).prop('deactivated')).toBeTruthy();
  });
});

// TODO: write test for ShouldInputActivate
