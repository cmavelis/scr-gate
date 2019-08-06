import './scrabble.scss';

import React from 'react';
import { Button } from 'reactstrap';

interface ILetterInputElementProps {
  num: string;
  setLetter: Function;
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
    this.setState({ letter: target.value }, this.updateUpToParent);
  };

  updateUpToParent = () => {
    this.props.setLetter(`L${this.props.num}`, `${this.state.letter}-${this.state.radio}`);
  };

  toggleActiveTwo = () => {
    if (!this.state.twoActive && !this.state.threeActive) {
      this.setState({ twoActive: true, radio: '2x' }, this.updateUpToParent);
    } else if (!this.state.twoActive && this.state.threeActive) {
      this.setState({ twoActive: true, threeActive: false, radio: '2x' }, this.updateUpToParent);
    } else {
      this.setState({ twoActive: false, radio: 'no' }, this.updateUpToParent);
    }
  };

  toggleActiveThree = () => {
    if (!this.state.twoActive && !this.state.threeActive) {
      this.setState({ threeActive: true, radio: '3x' }, this.updateUpToParent);
    } else if (!this.state.threeActive && this.state.twoActive) {
      this.setState({ threeActive: true, twoActive: false, radio: '3x' }, this.updateUpToParent);
    } else {
      this.setState({ threeActive: false, radio: 'no' }, this.updateUpToParent);
    }
  };

  toggleActiveBlank = () => {
    if (!this.state.blankActive) {
      this.setState({ blankActive: true, radio: '0x' }, this.updateUpToParent);
    } else {
      this.setState({ blankActive: false, radio: 'no' }, this.updateUpToParent);
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
          <Button onClick={this.toggleActiveTwo} active={this.state.twoActive} size="sm" color="danger">
            2x
          </Button>
          <Button onClick={this.toggleActiveThree} active={this.state.threeActive} size="sm" color="secondary" className="makeItWhite">
            3x
          </Button>
          <Button onClick={this.toggleActiveBlank} active={this.state.blankActive} color="primary">
            Blank
          </Button>
        </div>
      </div>
    );
  }
}
