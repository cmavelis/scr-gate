import './word-entry.scss'; // TODO: remove local stylesheet

import React from 'react';
import { range } from 'lodash';

import { Button, Col, Container, Input, InputGroup, Row } from 'reactstrap';

export interface IWordState {
  word: {
    [key: number]: string;
  };
}

const fifteen = range(15).map(n => '');

export class WordEntry extends React.Component<{}, IWordState> {
  constructor(props) {
    super(props);
    this.state = {
      word: {
        ...fifteen
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    const { value } = event.target;
    this.setState(prevState => ({
      word: {
        ...prevState.word,
        [index]: value
      }
    }));
  }

  render() {
    const { word } = this.state;
    return (
      <div>
        <Button color="info">All 7 tiles played</Button>
        <Container>
          <Row className="justify-content-start no-gutters">
            <InputGroup word={Object.values(word)}>
              {'123456789012345'.split('').map((letter, index) => (
                <Input
                  key={`letter-${letter}`}
                  className="letter-input"
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={e => this.handleChange(e, index)}
                  value={word[index]}
                  disabled={index > 1 && word[index - 1] === ''}
                >
                  {letter}
                </Input>
              ))}
            </InputGroup>
          </Row>
          <Row>{Object.values(this.state.word)}</Row>
        </Container>
      </div>
    );
  }
}

export default WordEntry;
