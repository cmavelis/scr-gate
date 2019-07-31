import React from 'react';
import { shallow } from 'enzyme';

import { WordEntry } from 'app/modules/word/word-entry';

describe('WordEntry component', () => {
  let wrapper;
  wrapper = shallow(<WordEntry />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render one <LetterEntry /> initially', () => {
    expect(wrapper.find('LetterEntry').length).toEqual(1);
  });

  it('should activate the next letter block in the word', () => {});

  // validate <15 letters
  // validate alpha string only
  // validate against the scrabble dictionary
});
