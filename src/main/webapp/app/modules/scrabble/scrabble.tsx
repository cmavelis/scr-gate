import './scrabble.scss';

import React from 'react';
import SelectNumber from './selectNumber';
import WordCalculation from './wordCalculation';

export default class Scrabble extends React.Component {
  render() {
    return (
      <div>
        Something, not nothing!
        <SelectNumber />
        <WordCalculation />
      </div>
    );
  }
}
