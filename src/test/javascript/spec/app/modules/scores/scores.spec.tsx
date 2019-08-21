import React from 'react';
import { shallow } from 'enzyme';
import { ScoresInput } from 'app/modules/scores/ScoresInput';
import { BrowserRouter } from 'react-router-dom';

import { getEntity, createEntity } from 'app/entities/scrabbledb2/game/game.reducer';

describe('ScoresInput', () => {
  let wrapper;
  wrapper = shallow(
    <BrowserRouter>
      <ScoresInput
        match={{ params: { id: 0 } }}
        game={{
            id: 0,
            gamePlayers: {
              0: {
                player: {
                  id: 1,
                  name: 'Albert'
              }
            }
          }
        }}
        getEntity={getEntity}
        updateEntity={createEntity}
      />
    </BrowserRouter>);

  it('it should render a <div />', () => {
      expect(wrapper.find(ScoresInput).dive().find('div').length).toBeGreaterThan(0);
  });

  it('it should render a <Input />', () => {
    expect(wrapper.find(ScoresInput).dive().find('Input').length).toBeGreaterThan(0);
  });

  it('it should render a <Button />', () => {
    expect(wrapper.find(ScoresInput).dive().find('Button').length).toBeGreaterThan(0);
  });

  // TODO: finish this test
  // it('it should add to score 1 when button 1 is clicked', () => {
  //   wrapper = mount(<ScoresInput />);
  //   expect(wrapper.state().score1).toEqual(1);
  // });
});
