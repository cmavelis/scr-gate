import './word-entry.scss'; // TODO: remove local stylesheet

import React from 'react';
import { range } from 'lodash';

import { Button, Container, Input, InputGroup, Row } from 'reactstrap';

export interface IWordState {
  word: {
    [key: number]: string;
  };
}

export class WordEntry extends React.Component<{}, IWordState> {
  private readonly inputRefs;
  private readonly maxLetters = 15;
  constructor(props) {
    super(props);
    this.state = {
      word: {
        ...range(this.maxLetters).map(() => '')
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
    // tslint:disable-next-line:no-console
    console.log(index);
    // tslint:disable-next-line:no-console
    console.log(editLetter);
    // tslint:disable-next-line:no-console
    console.log(nextLetterSelected);
    this.setState(
      prevState => ({
        word: {
          ...prevState.word,
          [editLetter]: changedLetterValue.toUpperCase()
        }
      }),
      () => this.switchInputSelected(nextLetterSelected)
    );
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
    const wordWithSpaces = Object.values(word)
      .map(letter => (letter === '' ? ' ' : letter))
      .join('');
    return wordWithSpaces.trim();
  }

  shouldInputActivate(index) {
    return this.getFullWord().length >= index;
  }

  render() {
    const { word } = this.state;
    return (
      <div>
        <Button color="info">All 7 tiles played</Button>
        <Container>
          <Row className="justify-content-start no-gutters">
            <InputGroup word={Object.values(word)} onMouseDownCapture={e => this.handleMouseDown(e)}>
              {range(this.maxLetters).map(index => (
                <Input
                  key={`letter-${index}`}
                  innerRef={this.inputRefs[index]}
                  className="letter-input"
                  value={word[index]}
                  disabled={index > 0 && !this.shouldInputActivate(index)}
                  input="text"
                  // onChange={e => this.handleChange(e, index)}
                  onKeyDown={e => this.handleInputKeyPress(e, index)}
                />
              ))}
            </InputGroup>
          </Row>
          <Row>Your word: {this.getFullWord()}</Row>
        </Container>
      </div>
    );
  }
}

export default WordEntry;
