import React from 'react';
import { Button } from 'reactstrap';

interface ITripleWordState {
  oneActive: boolean;
  twoActive: boolean;
  threeActive: boolean;
  radio: string;
}

interface ITripleWordProps {
  setWord: function;
}

export default class TripleWord extends React.Component<ITripleWordProps, ITripleWordState> {
  constructor(props) {
    super(props);
    this.state = {
      oneActive: false,
      twoActive: false,
      threeActive: false,
      radio: '1w'
    };
  }

  updateUp = () => {
    this.props.setWord('tripleWord', this.state.radio);
  };

  toggleActiveOne = () => {
    if (!this.state.oneActive && !this.state.twoActive && !this.state.threeActive) {
      this.setState(function() {
        return { oneActive: true, radio: '3w' };
      }, this.updateUp);
    } else if (!this.state.oneActive && this.state.twoActive) {
      this.setState(function() {
        return { oneActive: true, twoActive: false, radio: '3w' };
      }, this.updateUp);
    } else if (!this.state.oneActive && this.state.threeActive) {
      this.setState(function() {
        return { oneActive: true, threeActive: false, radio: '3w' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { oneActive: false, radio: '1w' };
      }, this.updateUp);
    }
  };

  toggleActiveTwo = () => {
    if (!this.state.oneActive && !this.state.twoActive && !this.state.threeActive) {
      this.setState(function() {
        return { twoActive: true, radio: '9w' };
      }, this.updateUp);
    } else if (!this.state.twoActive && this.state.oneActive) {
      this.setState(function() {
        return { twoActive: true, oneActive: false, radio: '9w' };
      }, this.updateUp);
    } else if (!this.state.twoActive && this.state.threeActive) {
      this.setState(function() {
        return { twoActive: true, threeActive: false, radio: '9w' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { twoActive: false, radio: '1w' };
      }, this.updateUp);
    }
  };

  toggleActiveThree = () => {
    if (!this.state.oneActive && !this.state.twoActive && !this.state.threeActive) {
      this.setState(function() {
        return { threeActive: true, radio: '27w' };
      }, this.updateUp);
    } else if (!this.state.threeActive && this.state.twoActive) {
      this.setState(function() {
        return { threeActive: true, twoActive: false, radio: '27w' };
      }, this.updateUp);
    } else if (!this.state.threeActive && this.state.oneActive) {
      this.setState(function() {
        return { threeActive: true, oneActive: false, radio: '27w' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { threeActive: false, radio: '1w' };
      }, this.updateUp);
    }
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleActiveOne} active={this.state.oneActive} size="sm">
          1
        </Button>
        <Button onClick={this.toggleActiveTwo} active={this.state.twoActive} size="sm">
          2
        </Button>
        <Button onClick={this.toggleActiveThree} active={this.state.threeActive} size="sm">
          3
        </Button>
      </div>
    );
  }
}
