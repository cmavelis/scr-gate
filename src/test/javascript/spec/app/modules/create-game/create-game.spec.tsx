import React from 'react';
import { shallow } from 'enzyme';

import { NameEntry } from 'app/modules/game/create-game/name-entry';
import { CreateGame } from 'app/modules/game/create-game/create-game';

describe('CreateGame component', () => {
  let wrapper;
  wrapper = shallow(<CreateGame
    playerNames= {{
        0: '',
        1: '',
        2: '',
        3: ''
      }}
    gameName="testGame"
    handlePlayerNameChange={() => {}}
    handleGameNameChange={() => {}}
  />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <NameEntry />', () => {
    expect(wrapper.find('NameEntry').length).toEqual(4);
  });

  it('should activate the 3rd NameEntry, but not the 4th, when the first 2 are filled', () => {
    wrapper.setProps({
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
});

// TODO: write test for ShouldInputActivate
