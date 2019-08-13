import { shallow } from 'enzyme';
import LetterBonusGroup from 'app/modules/word/letter-bonus/letterBonusGroup';
import React from 'react';

describe('<LetterBonusGroup>', () => {
  const wrapper = shallow(<LetterBonusGroup bonus={0} disabled={false} setLetterBonus={() => {}} />);

  it('should render at least one div', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });
  it('should render three buttons', () => {
    expect(wrapper.find('Button').length).toEqual(3);
  });
});
