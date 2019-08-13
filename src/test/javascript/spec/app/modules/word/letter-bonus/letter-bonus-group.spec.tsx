import React from 'react';
import { mount } from 'enzyme';

import LetterBonusGroup from 'app/modules/word/letter-bonus/letterBonusGroup';

describe('LetterBonusGroup component', () => {
  let wrapper;
  const mockSet = jest.fn();
  wrapper = mount(<LetterBonusGroup bonus={1} disabled={false} setLetterBonus={mockSet} />);

  it('should render at least one <div />', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should render three <Button />s', () => {
    expect(wrapper.find('Button').length).toEqual(3);
  });

  it('should call setLetterBonus with the argument 2 when the 2x button is clicked', () => {
    wrapper
      .find('Button')
      .at(0)
      .simulate('click', { target: 'button' });
    expect(mockSet).toHaveBeenCalledWith(2);
  });

  it('should call setLetterBonus with the argument 1 when bonus===2 and 2x button is clicked', () => {
    wrapper.setProps({ bonus: 2 });
    wrapper
      .find('Button')
      .at(0)
      .simulate('click', { target: 'button' });
    expect(mockSet).toHaveBeenCalledWith(1);
  });
});
