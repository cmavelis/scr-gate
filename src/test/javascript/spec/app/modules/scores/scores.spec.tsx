import React from 'react';
import { shallow, mount } from 'enzyme';
import { ScoresInput } from 'app/modules/scores/ScoresInput';

describe('ScoresInput', () => {
  let wrapper;
  wrapper = mount(<ScoresInput />);

  it('it should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(5);
    };

  it('it should render a <Input />', () => {
    expect(wrapper.find('Input').length).toBe(4);
  });

  it('it should render a <Button />', () => {
    expect(wrapper.find('Button').length).toBe(4);
  });

  it('it should add to score 1 when button 1 is clicked', () => {
    wrapper = mount(<ScoresInput />);
    expect(wrapper.state().score1).toEqual(1);
  });
});
