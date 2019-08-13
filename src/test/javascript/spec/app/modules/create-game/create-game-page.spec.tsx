import React from 'react';
import { mount, shallow } from 'enzyme';

import { CreateGamePage } from 'app/modules/game/create-game/create-game-page';
import { BrowserRouter } from 'react-router-dom';
import { createEntity } from 'app/entities/scrabbledev/game/game.reducer';

describe('CreateGamePage component', () => {
  let wrapper;
  wrapper = shallow(<CreateGamePage
    createEntity={createEntity}
  />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should not allow more than 12 characters in a name', () => {
    wrapper = mount(
      <BrowserRouter>
        <CreateGamePage
          createEntity={createEntity}
        />
      </BrowserRouter>);

    wrapper.find('CreateGamePage').setState({
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
    expect(wrapper.find('CreateGamePage').state().playerNames[0]).toEqual('abcdefghijkl');
  });
});

// TODO: write test for ShouldInputActivate
