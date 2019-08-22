import React from 'react';
import { mount, shallow } from 'enzyme';

import { CreateGamePage } from 'app/modules/game/create-game/create-game-page';
import { BrowserRouter } from 'react-router-dom';
import { createEntity, createGameWithPlayers } from 'app/entities/scrabbledb2/game/game.reducer';
import { getPlayerByName, resetValidation, createEntity as createPlayer } from 'app/entities/scrabbledb2/player/player.reducer';

describe('CreateGamePage component', () => {
  const dispatch = jest.fn();
  let wrapper;
  const props = {
    createEntity,
    getPlayerByName,
    createGameWithPlayers,
    resetValidation,
    createPlayer,
    validatedPlayers: { 0: { name: '', id: 1 } }
  };
  wrapper = shallow(<CreateGamePage {...props}/>);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should not allow more than 12 characters in a name', () => {
    wrapper = mount(
      <BrowserRouter>
        <CreateGamePage {...props}/>
      </BrowserRouter>);

    wrapper.find('CreateGamePage').setState({
      playerNames: {
        0: {
          name: 'name1'
        },
        1: {
          name: 'name2'
        },
        2: {
          name: ''
        },
        3: {
          name: ''
        }
      }
    });
    const event = { target: { name: 'input', value: 'abcdefghijklmn' } };
    wrapper
      .find({ playerNumber: 0 })
      .find('input')
      .simulate('change', event);
    expect(wrapper.find('CreateGamePage').state().playerNames[0].name).toEqual('abcdefghijkl');
  });
});

// TODO: write test for ShouldInputActivate
