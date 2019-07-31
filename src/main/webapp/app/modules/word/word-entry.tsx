import './word-entry.scss'; // TODO: remove local stylesheet

import React from 'react';

import { Button, Col, Container, Input, Row } from 'reactstrap';

export interface IWordState {
  word: string;
}

export class WordEntry extends React.Component<{}, IWordState> {
  constructor(props) {
    super(props);
    this.state = {
      word: 'word'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    const { value } = event.target;
    this.setState(prevState => {
      const word = prevState.word;
      const newWord = word.substr(0, index) + value + word.substr(index + 1);
      return { word: newWord };
    });
  }

  render() {
    const { word } = this.state;
    return (
      <div>
        <Button color="info">All 7 tiles played</Button>
        <Container>
          <Row className="justify-content-start no-gutters">
            {'word'.split('').map((letter, index) => (
              <Col key={`col`} className="col-1">
                <Input
                  key={`letter-${letter}`}
                  className="letter-input"
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={e => this.handleChange(e, index)}
                  value={word[index]}
                >
                  {letter}
                </Input>
              </Col>
            ))}
          </Row>
          <Row>{this.state.word}</Row>
        </Container>
      </div>
    );
  }
}

export default WordEntry;
