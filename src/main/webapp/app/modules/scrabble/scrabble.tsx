import './scrabble.scss';

import React from 'react';
import SelectNumber from './selectNumber';
import TurnStatus from './turnStatus';
import WordCalculation from './wordCalculation';

export default class Scrabble extends React.Component {
  render() {
    return (
      <div className="main">
        <SelectNumber />
        <TurnStatus />
        <WordCalculation />
      </div>
    );
  }
}
