import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { StartScreen } from 'app/modules/game/start-screen';
import { getEntities } from 'app/entities/scrabbledb2/game/game.reducer';

describe('StartScreen', () => {
  it('should render two buttons,<Button /> and <Button />', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <StartScreen
          // @ts-ignore
          games={}
          getEntities={getEntities}
        />
      </MemoryRouter>
    );
    expect(
      wrapper
        .find(StartScreen)
        .dive()
        .find('Button').length
    ).toBeGreaterThan(0);
  });
});
