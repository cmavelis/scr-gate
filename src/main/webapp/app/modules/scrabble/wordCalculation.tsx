import './scrabble.scss';

import React from 'react';
import LetterInputElement from './letterInputElement';
import DoubleWord from './doubleWord';
import TripleWord from './tripleWord';
import UsedAllTiles from './usedAllTiles';
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
  doubleWord: string;
  tripleWord: string;
  usedAll: number;
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
      doubleWord: '',
      tripleWord: '',
      usedAll: 0,
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
        return {
          [letter]: changes
        };
      } as any,
      this.calculateNumber
    );
  };

  setWord = (modifier, changes) => {
    this.setState(
      function() {
        return {
          [modifier]: changes
        };
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
        score += LETTER_TILE_VALUES[parts[0].toUpperCase()] * this.modifierSwitchLetter(parts[1]);
      }
    });
    return score * this.modifierSwitchDoubleWord() * this.modifierSwitchTripleWord() + this.state.usedAll;
  };

  modifierSwitchLetter = modifier => {
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

  modifierSwitchDoubleWord = () => {
    switch (this.state.doubleWord) {
      case '1w':
        return 1;
      case '2w':
        return 2;
      case '4w':
        return 4;
      default:
        return 1;
    }
  };

  modifierSwitchTripleWord = () => {
    switch (this.state.tripleWord) {
      case '1w':
        return 1;
      case '3w':
        return 3;
      case '9w':
        return 9;
      case '27w':
        return 27;
      default:
        return 1;
    }
  };

  render() {
    return (
      <div>
        Enter your letters:
        <form onChange={this.calculateNumber}>
          <div className="wordRow">
            <LetterInputElement num="1" setLetter={this.setLetter} />
            <LetterInputElement num="2" setLetter={this.setLetter} />
            <LetterInputElement num="3" setLetter={this.setLetter} />
            <LetterInputElement num="4" setLetter={this.setLetter} />
            <LetterInputElement num="5" setLetter={this.setLetter} />
            <LetterInputElement num="6" setLetter={this.setLetter} />
            <LetterInputElement num="7" setLetter={this.setLetter} />
            <LetterInputElement num="8" setLetter={this.setLetter} />
            <LetterInputElement num="9" setLetter={this.setLetter} />
            <LetterInputElement num="10" setLetter={this.setLetter} />
            <LetterInputElement num="11" setLetter={this.setLetter} />
            <LetterInputElement num="12" setLetter={this.setLetter} />
            <LetterInputElement num="13" setLetter={this.setLetter} />
            <LetterInputElement num="14" setLetter={this.setLetter} />
            <LetterInputElement num="15" setLetter={this.setLetter} />
          </div>
          <div className="wordRow">
            <div className="wordMod">
              Double Word
              <DoubleWord setWord={this.setWord} />
            </div>

            <div className="wordMod">
              Triple Word
              <TripleWord setWord={this.setWord} />
            </div>
            <div className="wordMod">
              Used all tiles
              <UsedAllTiles setWord={this.setWord} />
            </div>
          </div>
        </form>
        Score: {this.state.score}
      </div>
    );
  }
}
