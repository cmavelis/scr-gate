import './scrabble.scss';

import React from 'react';
import { Button } from 'reactstrap';
import { string } from 'prop-types';

interface ILetterInputElementProps {
  num: string;
  setLetter: function;
}

interface ILetterInputElementState {
  letter: string;
  radio: string;
  twoA: boolean;
  threeA: boolean;
  blankA: boolean;
}

export default class LetterInputElement extends React.Component<ILetterInputElementProps, ILetterInputElementState> {
  constructor(props) {
    super(props);
    this.state = {
      letter: '',
      radio: 'no',
      twoA: false,
      threeA: false,
      blankA: false
    };
  }
  textChangeHandler = e => {
    this.setState({ letter: e.target.value });
    this.props.setLetter(`L${this.props.num}`, `${e.target.value}-${this.state.radio}`);
  };

  toggleActiveTwo = () => {
    if (!this.state.twoA && !this.state.threeA) {
      this.setState({ twoA: true } as Pick<ILetterInputElementState, keyof ILetterInputElementState>);
      this.setState({ radio: '2x' });
    } else if (!this.state.twoA && this.state.threeA) {
      this.setState({ twoA: true } as Pick<ILetterInputElementState, keyof ILetterInputElementState>);
      this.setState({ threeA: false } as Pick<ILetterInputElementState, keyof ILetterInputElementState>);
      this.setState({ radio: '2x' });
    } else {
      this.setState({ twoA: false } as Pick<ILetterInputElementState, keyof ILetterInputElementState>);
      this.setState({ radio: 'no' });
    }
  };

  toggleActiveThree = () => {
    if (!this.state.twoA && !this.state.threeA) {
      this.setState({ threeA: true } as Pick<ILetterInputElementState, keyof ILetterInputElementState>);
      this.setState({ radio: '3x' });
    } else if (!this.state.threeA && this.state.twoA) {
      this.setState({ threeA: true } as Pick<ILetterInputElementState, keyof ILetterInputElementState>);
      this.setState({ twoA: false } as Pick<ILetterInputElementState, keyof ILetterInputElementState>);
      this.setState({ radio: '3x' });
    } else {
      this.setState({ threeA: false } as Pick<ILetterInputElementState, keyof ILetterInputElementState>);
      this.setState({ radio: 'no' });
    }
  };

  toggleActiveBlank = () => {
    if (!this.state.blankA) {
      this.setState({ blankA: true } as Pick<ILetterInputElementState, keyof ILetterInputElementState>);
      this.setState({ radio: '0x' });
    } else {
      this.setState({ blankA: false } as Pick<ILetterInputElementState, keyof ILetterInputElementState>);
      this.setState({ radio: 'no' });
    }
  };

  render() {
    return (
      <div className="boxAndGroup">
        <input
          className="bigInput"
          type="text"
          name={this.props.num}
          placeholder={this.props.num}
          onChange={this.textChangeHandler}
          tabIndex={Number(this.props.num)}
          maxLength={1}
        />
        <div className="radioGroup">
          <Button onClick={this.toggleActiveTwo} active={this.state.twoA} size="sm">
            2x
          </Button>
          <Button onClick={this.toggleActiveThree} active={this.state.threeA} size="sm">
            3x
          </Button>
          <Button onClick={this.toggleActiveBlank} active={this.state.blankA}>
            Blank
          </Button>
        </div>
      </div>
    );
  }
}
