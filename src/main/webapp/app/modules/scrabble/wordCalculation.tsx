import './scrabble.scss';

import React from 'react';
import LetterInputElement from './letterInputElement';
import { LETTER_TILE_VALUES } from '../../shared/util/scrabble.constants';

interface IWordCalculationState {
  L1: string;
  L2: string;
  L3: string;
  L4: string;
  L5: string;
  L6: string;
  L7: string;
  L8: string;
  L9: string;
  L10: string;
  L11: string;
  L12: string;
  L13: string;
  L14: string;
  L15: string;
  score: number;
}

export default class WordCalculation extends React.Component<{}, IWordCalculationState> {
  constructor(props) {
    super(props);
    this.state = {
      L1: '',
      L2: '',
      L3: '',
      L4: '',
      L5: '',
      L6: '',
      L7: '',
      L8: '',
      L9: '',
      L10: '',
      L11: '',
      L12: '',
      L13: '',
      L14: '',
      L15: '',
      score: 0
    };
  }

  calculateNumber = () => {
    const score = this.getScore();
    this.setState(function() {
      return { score: this.getScore() };
    });
    return score;
  };

  setLetter = (letter, changes) => {
    this.setState(
      function() {
        return { [letter]: changes };
      } as any,
      this.calculateNumber
    );
  };

  getScore = () => {
    let score = 0;
    const arr = [
      this.state.L1,
      this.state.L2,
      this.state.L3,
      this.state.L4,
      this.state.L5,
      this.state.L6,
      this.state.L7,
      this.state.L8,
      this.state.L9,
      this.state.L10,
      this.state.L11,
      this.state.L12,
      this.state.L13,
      this.state.L14,
      this.state.L15
    ];
    arr.map(letterEntry => {
      if (letterEntry.length > 3) {
        const parts = letterEntry.split('-');
        // tslint:disable-next-line:no-console
        console.log(parts);
        score += LETTER_TILE_VALUES[parts[0].toUpperCase()] * this.modifierSwitch(parts[1]);
      }
    });
    return score;
  };

  modifierSwitch = modifier => {
    switch (modifier) {
      case 'no':
        return 1;
      case '2x':
        return 2;
      case '3x':
        return 3;
      case '0x':
        return 0;
      default:
        return 1;
    }
  };

  render() {
    return (
      <div>
        Enter your letters:
        <form onChange={this.calculateNumber} className="wordRow">
          <LetterInputElement num="1" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="2" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="3" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="4" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="5" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="6" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="7" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="8" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="9" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="10" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="11" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="12" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="13" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="14" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <LetterInputElement num="15" setLetter={this.setLetter} calculate={this.calculateNumber} />
          <div>Double Word</div>
          <div>Triple Word</div>
        </form>
        Score: {this.state.score}
      </div>
    );
  }
}
