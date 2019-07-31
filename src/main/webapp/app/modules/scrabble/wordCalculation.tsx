import './scrabble.scss';

import React from 'react';
import LetterInputElement from './letterInputElement';

interface IWordCalculationState {
  word: string;
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
  letterDict: object;
}

export default class WordCalculation extends React.Component<{}, IWordCalculationState> {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
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
      score: 0,
      letterDict: {
        A: 1,
        B: 1,
        C: 1,
        D: 1,
        E: 1,
        F: 1,
        G: 1,
        H: 1,
        I: 1,
        J: 1,
        K: 1,
        L: 1,
        M: 1,
        N: 1,
        O: 1,
        P: 1,
        Q: 1,
        R: 1,
        S: 1,
        T: 1,
        U: 1,
        V: 1,
        W: 1,
        X: 1,
        Y: 1,
        Z: 1
      }
    };
  }

  calculateNumber = () => {
    this.setState({ score: this.getScore() });
  };

  setLetter = (letter, changes) => {
    this.setState({ [letter]: changes } as any);
  };

  getScore = () => {
    let score = 0;
    let arr = [
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

    return score;
  };

  render() {
    return (
      <div>
        Input a word
        <form onChange={this.calculateNumber} className="wordRow">
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
        </form>
        <div>Double Word</div>
        <div>Triple Word</div>
        Score: {this.state.score}
      </div>
    );
  }
}
