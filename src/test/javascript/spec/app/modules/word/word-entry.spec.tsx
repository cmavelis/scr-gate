import React from 'react';
import { shallow } from 'enzyme';

import { WordEntry } from 'app/modules/word/word-entry';

describe('WordEntry component', () => {
  let wrapper;
  wrapper = shallow(<WordEntry />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render one <Input /> initially', () => {
    expect(wrapper.find('Input').length).toBeGreaterThan(0);
  });

  it('should activate the next letter block in the word', () => {});

  // validate <15 letters
  // validate alpha string only
  // validate against the scrabble dictionary
});
