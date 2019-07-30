import React from 'react';
import { shallow } from 'enzyme';
import { StartScreen } from 'app/modules/startscreen/StartScreen';

describe('StartScreen', () => {
  it('should render two buttons,<Button /> and <Button />', () => {
    const wrapper = shallow(<StartScreen />);
    console.log(wrapper.debug());
    expect(wrapper.find('Button').length).toBe(2);
  });
});
