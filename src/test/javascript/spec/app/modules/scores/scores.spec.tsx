import React from 'react';
import { shallow, mount } from 'enzyme';
import { ScoresInput } from 'app/modules/scores/ScoresInput';

describe('ScoresInput', () => {
  let wrapper;
  wrapper = shallow(<ScoresInput />);

  it('it should render a <div />'), () => {};

  it('it should render 4 Inputs,<Input />', () => {
    expect(wrapper.find('Input').length).toBe(4);
  });

  it('it should render 4 Buttons, <Button />', () => {
    expect(wrapper.find('Button').length).toBe(4);
  });
});
