import React from 'react';
import { shallow, mount } from 'enzyme';
import { ScoresInput } from 'app/modules/scores/ScoresInput';

describe('ScoresInput', () => {
  it('it should render 4 Inputs,<Input />', () => {
    const wrapper = shallow(<ScoresInput />);
    expect(wrapper.find('Input').length).toBe(4);
  });

  it('it should render 4 Buttons, <Button />', () => {
    const wrapper = shallow(<ScoresInput />);
    expect(wrapper.find('Button').length).toBe(4);
  });
});
