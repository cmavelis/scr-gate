import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';

import StartScreen from 'app/modules/game/start-screen';

describe('StartScreen', () => {
  it('should render two buttons,<Button /> and <Button />', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <StartScreen />
      </MemoryRouter>
    );
    expect(
      wrapper
        .find(StartScreen)
        .dive()
        .find('Button').length
    ).toBe(2);
  });
});
