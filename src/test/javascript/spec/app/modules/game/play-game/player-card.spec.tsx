import React from 'react';
import { shallow } from 'enzyme';

import { PlayerCard } from 'app/modules/game/play-game/player-card';

describe('PlayerCard component', () => {
    let wrapper;
    wrapper = shallow(<PlayerCard />);

    it('should render div.player-card-wrap', () => {
        // console.log(wrapper.debug());
        expect(wrapper.find('div.player-card-wrap').length).toEqual(1);
    });
  });
