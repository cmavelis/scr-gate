import React from 'react';
import { mount, shallow } from 'enzyme';

import { WordEntry } from 'app/modules/word/word-entry';
import { range } from 'lodash';

describe('WordEntry component', () => {
  let wrapper;
  wrapper = shallow(<WordEntry />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should render one <Input /> initially', () => {
    expect(wrapper.find('Input').length).toBeGreaterThan(0);
  });

  it('should activate the next letter block in the word', () => {
    wrapper = mount(<WordEntry />);
    expect(
      wrapper
        .find('InputGroup')
        .find('Input')
        .at(1)
        .prop('disabled')
    ).toEqual(true);
    wrapper
      .find('InputGroup')
      .find('Input')
      .at(0)
      .simulate('keydown', { key: 'a', keyCode: 65 });
    expect(wrapper.state().word.letters[0].letter).toEqual('A');
    expect(
      wrapper
        .find('InputGroup')
        .find('Input')
        .at(1)
        .prop('disabled')
    ).toEqual(false);
  });

  // Calculations
  it('should accurately calculate the score for the theoretical highest-scoring word', () => {
    wrapper = shallow(<WordEntry />);
    const highScoreLetters = 'OXYPHENBUTAZONE';
    const letterBonuses = '111211111112111';
    wrapper.setState({
      word: {
        letters: {
          ...range(15).map(i => ({ letter: highScoreLetters[i], bonus: parseInt(letterBonuses[i], 10) }))
        },
        bonus: 27
      },
      usedAll: false
    });
    expect(wrapper.instance().getTotalScore()).toEqual(1458);
  });

  it('should accurately calculate the score for a blank letter', () => {
    wrapper = shallow(<WordEntry />);
    wrapper.setState(prevState => ({
      word: {
        letters: {
          ...prevState.word.letters,
          0: {
            letter: 'O',
            bonus: 0
          }
        },
        bonus: 1
      },
      usedAll: false
    }));
    expect(wrapper.instance().getTotalScore()).toEqual(0);
  });

  it('should accurately calculate the score for a tripled letter', () => {
    wrapper = shallow(<WordEntry />);
    wrapper.setState(prevState => ({
      word: {
        letters: {
          ...prevState.word.letters,
          0: {
            letter: 'O',
            bonus: 3
          }
        },
        bonus: 1
      },
      usedAll: false
    }));
    expect(wrapper.instance().getTotalScore()).toEqual(3);
  });
});
