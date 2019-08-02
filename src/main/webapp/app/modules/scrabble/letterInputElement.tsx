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
  twoActive: boolean;
  threeActive: boolean;
  blankActive: boolean;
}

export default class LetterInputElement extends React.Component<ILetterInputElementProps, ILetterInputElementState> {
  constructor(props) {
    super(props);
    this.state = {
      letter: '',
      radio: 'no',
      twoActive: false,
      threeActive: false,
      blankActive: false
    };
  }

  textChangeHandler = e => {
    const target = e.target as HTMLTextAreaElement;
    this.setState(function() {
      return { letter: target.value };
    }, this.updateUp);
  };

  updateUp = () => {
    this.props.setLetter(`L${this.props.num}`, `${this.state.letter}-${this.state.radio}`);
  };

  toggleActiveTwo = () => {
    if (!this.state.twoActive && !this.state.threeActive) {
      this.setState(function() {
        return { twoActive: true, radio: '2x' };
      }, this.updateUp);
    } else if (!this.state.twoActive && this.state.threeActive) {
      this.setState(function() {
        return { twoActive: true, threeActive: false, radio: '2x' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { twoActive: false, radio: 'no' };
      }, this.updateUp);
    }
  };

  toggleActiveThree = () => {
    if (!this.state.twoActive && !this.state.threeActive) {
      this.setState(function() {
        return { threeActive: true, radio: '3x' };
      }, this.updateUp);
    } else if (!this.state.threeActive && this.state.twoActive) {
      this.setState(function() {
        return { threeActive: true, twoActive: false, radio: '3x' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { threeActive: false, radio: 'no' };
      }, this.updateUp);
    }
  };

  toggleActiveBlank = () => {
    if (!this.state.blankActive) {
      this.setState(function() {
        return { blankActive: true, radio: '0x' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { blankActive: false, radio: 'no' };
      }, this.updateUp);
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
          <Button onClick={this.toggleActiveTwo} active={this.state.twoActive} size="sm">
            2x
          </Button>
          <Button onClick={this.toggleActiveThree} active={this.state.threeActive} size="sm">
            3x
          </Button>
          <Button onClick={this.toggleActiveBlank} active={this.state.blankActive}>
            Blank
          </Button>
        </div>
      </div>
    );
  }
}
