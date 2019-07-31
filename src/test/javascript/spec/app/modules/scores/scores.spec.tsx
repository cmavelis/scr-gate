import React from 'react';
import { shallow } from 'enzyme';
import { ScoresInput } from 'app/modules/scores/ScoresInput';

describe('ScoresInput', () => {
  it('it should render a Input,<Input />', () => {
    const wrapper = shallow(<ScoresInput />);
    expect(wrapper.find('Input').length).toBe(1);
  });

  it('it should render a Button, <Button />', () => {
    const wrapper = shallow(<ScoresInput />);
    expect(wrapper.find('Button').length).toBe(2);
  });
});
