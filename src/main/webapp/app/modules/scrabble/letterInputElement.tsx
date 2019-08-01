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
    const target = e.target as HTMLTextAreaElement;
    this.setState(function() {
      return { letter: target.value };
    }, this.updateUp);
  };

  updateUp = () => {
    this.props.setLetter(`L${this.props.num}`, `${this.state.letter}-${this.state.radio}`);
  };

  toggleActiveTwo = () => {
    if (!this.state.twoA && !this.state.threeA) {
      this.setState(function() {
        return { twoA: true };
      }, this.updateUp);
      this.setState(function() {
        return { radio: '2x' };
      }, this.updateUp);
    } else if (!this.state.twoA && this.state.threeA) {
      this.setState(function() {
        return { twoA: true };
      }, this.updateUp);
      this.setState(function() {
        return { threeA: false };
      }, this.updateUp);
      this.setState(function() {
        return { radio: '2x' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { twoA: false };
      }, this.updateUp);
      this.setState(function() {
        return { radio: 'no' };
      }, this.updateUp);
    }
  };

  toggleActiveThree = () => {
    if (!this.state.twoA && !this.state.threeA) {
      this.setState(function() {
        return { threeA: true };
      }, this.updateUp);
      this.setState(function() {
        return { radio: '3x' };
      }, this.updateUp);
    } else if (!this.state.threeA && this.state.twoA) {
      this.setState(function() {
        return { threeA: true };
      }, this.updateUp);
      this.setState(function() {
        return { twoA: false };
      }, this.updateUp);
      this.setState(function() {
        return { radio: '3x' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { threeA: false };
      }, this.updateUp);
      this.setState(function() {
        return { radio: 'no' };
      }, this.updateUp);
    }
  };

  toggleActiveBlank = () => {
    if (!this.state.blankA) {
      this.setState(function() {
        return { blankA: true };
      }, this.updateUp);
      this.setState(function() {
        return { radio: '0x' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { blankA: false };
      }, this.updateUp);
      this.setState(function() {
        return { radio: 'no' };
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
