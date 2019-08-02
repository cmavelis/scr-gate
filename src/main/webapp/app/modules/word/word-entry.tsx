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

    this.handleChange = this.handleChange.bind(this);
  }

  switchInputSelected(index) {
    const wordLength = this.getFullWord().length;
    if (wordLength < this.maxLetters) {
      this.inputRefs[index].current.select();
    } else {
      this.inputRefs[this.maxLetters - 1].current.select();
    }
  }

  handleChange(event, index) {
    const { value } = event.target;
    // only allow single characters, may be redundant
    if (value.length > 1) {
      return;
    }

    const nextLetter = index < this.maxLetters - 1 ? index + 1 : this.maxLetters - 1;
    this.setState(
      prevState => ({
        word: {
          ...prevState.word,
          [index]: value.toUpperCase()
        }
      }),
      () => this.switchInputSelected(nextLetter)
    );
  }

  handleDeleteKeyPress(event, index) {
    if (event.keyCode === 8 || event.keyCode === 46) {
      this.switchInputSelected(index - 1);
    }
  }

  handleClick(e) {
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
            <InputGroup word={Object.values(word)} onMouseDownCapture={e => this.handleClick(e)}>
              {range(this.maxLetters).map(index => (
                <Input
                  key={`letter-${index}`}
                  innerRef={this.inputRefs[index]}
                  className="letter-input"
                  value={word[index]}
                  disabled={index > 0 && !this.shouldInputActivate(index)}
                  input="text"
                  onChange={e => this.handleChange(e, index)} // TODO: try this.handleChange.apply()
                  onKeyDown={e => this.handleDeleteKeyPress(e, index)}
                />
              ))}
            </InputGroup>
          </Row>
          <Row>
            <Button onClick={() => this.switchInputSelected(3)} />
          </Row>
          <Row>{this.getFullWord()}</Row>
        </Container>
      </div>
    );
  }
}

export default WordEntry;
