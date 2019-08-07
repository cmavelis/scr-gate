import './word-entry.scss'; // TODO: remove local stylesheet

import React from 'react';
import { range } from 'lodash';

import { Button, Container, Input, InputGroup, Row } from 'reactstrap';
import BonusGroup from 'app/modules/scrabble/bonusGroup';

export interface IWordState {
  word: {
    [key: number]: {
      letter: string;
      bonus: number;
    };
  };
}

export class WordEntry extends React.Component<{}, IWordState> {
  private readonly inputRefs;
  private readonly maxLetters = 15;
  constructor(props) {
    super(props);
    this.state = {
      word: {
        ...range(this.maxLetters).map(() => ({ letter: '', bonus: 1 }))
      }
    };

    this.inputRefs = {
      ...range(this.maxLetters).map(() => React.createRef())
    };
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
          [editLetter]: {
            ...prevState.word[editLetter],
            letter: changedLetterValue.toUpperCase()
          }
        }
      }),
      () => this.switchInputSelected(nextLetterSelected)
    );
  }

  handleBonusChange = (index, bonus) => {
    this.setState(prevState => ({
      word: {
        ...prevState.word,
        [index]: {
          ...prevState.word[index],
          bonus
        }
      }
    }));
  };

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
    const wordWithSpaces = Object.values(word)
      .map(entry => entry.letter)
      .map(letter => (letter === '' ? ' ' : letter))
      .join('');
    return wordWithSpaces.trim();
  }

  shouldInputActivate(index) {
    return this.getFullWord().length >= index;
  }

  // TODO: allow previous buttons to be clickable
  render() {
    const { word } = this.state;
    return (
      <div>
        <Button color="info">All 7 tiles played</Button>
        <Container>
          <Row className="justify-content-start no-gutters">
            <InputGroup word={Object.values(word)} onMouseDownCapture={e => this.handleMouseDown(e)}>
              {range(this.maxLetters).map(index => {
                const disabled = index > 0 && !this.shouldInputActivate(index);
                return (
                  <div key={`letter-box-${index}`}>
                    <Input
                      innerRef={this.inputRefs[index]}
                      className="letter-input"
                      value={word[index].letter}
                      disabled={disabled}
                      input="text"
                      onKeyDown={e => this.handleInputKeyPress(e, index)}
                      onChange={() => {}}
                    />
                    <BonusGroup setLetterBonus={this.handleBonusChange} bonus={word[index].bonus} disabled={disabled} />
                  </div>
                );
              })}
            </InputGroup>
          </Row>
          <Row>Your word: {this.getFullWord()}</Row>
        </Container>
      </div>
    );
  }
}

export default WordEntry;
