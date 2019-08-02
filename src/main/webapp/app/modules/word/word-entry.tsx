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
  constructor(props) {
    super(props);
    this.state = {
      word: {
        ...range(15).map(() => '')
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    const { value } = event.target;
    if (value.length > 1) {
      return;
    }
    this.setState(
      prevState => ({
        word: {
          ...prevState.word,
          [index]: value.toUpperCase()
        }
      }),
      this.getFullWord
    );
  }

  getFullWord() {
    const word = this.state.word;
    // fill word with spaces to evaluate
    const wordWithSpaces = Object.values(word)
      .map(letter => (letter === '' ? ' ' : letter))
      .join('');
    return wordWithSpaces.trim();
  }

  shouldInputActivate(index) {
    return this.getFullWord().length >= index;
  }

  // TODO: add validation to handle a blank space in middle
  // TODO: try to force only input on the last open block
  // TODO: move focus automatically to next / previous

  render() {
    const { word } = this.state;
    return (
      <div>
        <Button color="info">All 7 tiles played</Button>
        <Container>
          <Row className="justify-content-start no-gutters">
            <InputGroup word={Object.values(word)}>
              {range(15).map(index => (
                <Input
                  key={`letter-${index}`}
                  className="letter-input"
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={e => this.handleChange(e, index)}
                  value={word[index]}
                  disabled={index > 0 && !this.shouldInputActivate(index)}
                  input="text"
                />
              ))}
            </InputGroup>
          </Row>
          <Row>{this.getFullWord()}</Row>
        </Container>
      </div>
    );
  }
}

export default WordEntry;
