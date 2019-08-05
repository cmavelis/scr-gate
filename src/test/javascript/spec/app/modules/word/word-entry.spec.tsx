import React from 'react';
import { mount, shallow } from 'enzyme';

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
    expect(wrapper.state().word[0]).toEqual('A');
    expect(
      wrapper
        .find('InputGroup')
        .find('Input')
        .at(1)
        .prop('disabled')
    ).toEqual(false);
  });
});
