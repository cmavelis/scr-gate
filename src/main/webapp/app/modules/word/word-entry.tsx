import './word-entry.scss'; // TODO: remove local stylesheet

import React from 'react';
import { range } from 'lodash';

import { Col, Container, Input, InputGroup, Row } from 'reactstrap';
import LetterBonusGroup from 'app/modules/word/letter-bonus/letterBonusGroup';
import WordBonusGroup from 'app/modules/word/word-bonus-group';

import { LETTER_TILE_VALUES } from 'app/shared/util/scrabble.constants';

export interface IWordState {
  word: {
    letters: {
      [key: number]: {
        letter: string;
        bonus: number;
      };
    };
    bonus: number;
  };
  usedAll: boolean;
}

export class WordEntry extends React.Component<{}, IWordState> {
  private readonly inputRefs;
  private readonly maxLetters = 15;
  constructor(props) {
    super(props);
    this.state = {
      word: {
        letters: { ...range(this.maxLetters).map(() => ({ letter: '', bonus: 1 })) },
        bonus: 1
      },
      usedAll: false
    };

    this.inputRefs = {
      ...range(this.maxLetters).map(() => React.createRef())
    };

    this.handleWordBonusChange = this.handleWordBonusChange.bind(this);
    this.handleUsedAllChange = this.handleUsedAllChange.bind(this);
  }

  switchInputSelected(index) {
    const wordLength = this.getFullWord().length;
    if (wordLength < this.maxLetters) {
      this.inputRefs[index].current.select();
    } else {
      this.inputRefs[this.maxLetters - 1].current.select();
    }
  }

  handleInputKeyPress(event, index) {
    event.preventDefault();
    const key = event.keyCode;
    let nextLetterSelected = index;
    let editLetter;
    let changedLetterValue;
    // DELETE/BACKSPACE
    if (key === 8 || key === 46) {
      // go backwards and delete when delete is pressed
      // TODO: move all this logic into separate component?
      if (index < this.maxLetters - 1 && index > 0) {
        nextLetterSelected = index - 1;
        editLetter = nextLetterSelected;
      } else if (index === this.maxLetters - 1) {
        // things get a little funny on the final letter
        if (this.getFullWord().length === this.maxLetters) {
          nextLetterSelected = index;
          editLetter = index;
        } else {
          nextLetterSelected = index - 1;
          editLetter = index - 1;
        }
      } else if (index === 0) {
        nextLetterSelected = 0;
        editLetter = nextLetterSelected;
      } else {
        return;
      }
      changedLetterValue = '';
      // ALPHABET KEYS
    } else if (key >= 65 && key <= 90) {
      // TODO: use regex to validate as well
      // go forwards and add letter when letter is pressed
      nextLetterSelected = index < this.maxLetters - 1 ? index + 1 : this.maxLetters - 1;
      editLetter = index;
      changedLetterValue = event.key;
    } else {
      return;
    }
    this.setState(
      prevState => ({
        word: {
          ...prevState.word,
          letters: {
            ...prevState.word.letters,
            [editLetter]: {
              ...prevState.word.letters[editLetter],
              letter: changedLetterValue.toUpperCase()
            }
          }
        }
      }),
      () => this.switchInputSelected(nextLetterSelected)
    );
  }

  handleLetterBonusChange = (index, bonus) => {
    this.setState(prevState => ({
      word: {
        ...prevState.word,
        letters: {
          ...prevState.word.letters,
          [index]: {
            ...prevState.word.letters[index],
            bonus
          }
        }
      }
    }));
  };

  handleWordBonusChange(bonus) {
    this.setState(prevState => ({
      word: {
        ...prevState.word,
        bonus
      }
    }));
  }

  handleUsedAllChange(usedAll) {
    this.setState({ usedAll });
  }

  handleMouseDown(e) {
    e.preventDefault();
    const wordLength = this.getFullWord().length;
    if (wordLength === this.maxLetters) {
      this.switchInputSelected(wordLength - 1);
    } else {
      this.switchInputSelected(wordLength);
    }
  }

  getFullWord() {
    const word = this.state.word;
    // fill word with spaces instead of unused boxes to evaluate
    const wordWithSpaces = Object.values(word.letters)
      .map(entry => entry.letter)
      .map(letter => (letter === '' ? ' ' : letter))
      .join('');
    return wordWithSpaces.trim();
  }

  getTotalScore() {
    const { word, usedAll } = this.state;
    const lettersScoreArray = Object.values(word.letters).map(entry => LETTER_TILE_VALUES[entry.letter] * entry.bonus);
    const wordScore = lettersScoreArray.reduce((a, b) => a + b) * word.bonus;
    return usedAll ? wordScore + 50 : wordScore;
  }

  shouldInputActivate(index) {
    return this.getFullWord().length >= index;
  }

  render() {
    const { word, usedAll } = this.state;
    return (
      <div>
        <Container>
          <Col>
            <Row className="justify-content-start no-gutters">
              <InputGroup word={Object.values(word)} onMouseDownCapture={e => this.handleMouseDown(e)}>
                {range(this.maxLetters).map(index => {
                  const disabled = index > 0 && !this.shouldInputActivate(index);
                  const indexBoundBonusChange = this.handleLetterBonusChange.bind(null, index);
                  return (
                    <div key={`letter-box-${index}`}>
                      <Input
                        innerRef={this.inputRefs[index]}
                        className="letter-input"
                        value={word.letters[index].letter}
                        disabled={disabled}
                        input="text"
                        onKeyDown={e => this.handleInputKeyPress(e, index)}
                        onChange={() => {}}
                      />
                      <LetterBonusGroup setLetterBonus={indexBoundBonusChange} bonus={word.letters[index].bonus} disabled={disabled} />
                    </div>
                  );
                })}
              </InputGroup>
            </Row>
            <Row>Your word: {this.getFullWord()}</Row>
            <Row>Your score: {this.getTotalScore()}</Row>
            <WordBonusGroup
              wordBonus={word.bonus}
              setWordBonus={this.handleWordBonusChange}
              usedAll={usedAll}
              setUsedAll={this.handleUsedAllChange}
            />
          </Col>
        </Container>
      </div>
    );
  }
}

export default WordEntry;
