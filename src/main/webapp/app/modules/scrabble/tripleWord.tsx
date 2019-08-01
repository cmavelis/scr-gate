import React from 'react';
import { Button } from 'reactstrap';

interface ITripleWordState {
  oneA: boolean;
  twoA: boolean;
  threeA: boolean;
  radio: string;
}

interface ITripleWordProps {
  setWord: function;
}

export default class TripleWord extends React.Component<ITripleWordProps, ITripleWordState> {
  constructor(props) {
    super(props);
    this.state = {
      oneA: false,
      twoA: false,
      threeA: false,
      radio: '1w'
    };
  }

  updateUp = () => {
    this.props.setWord('tripleWord', this.state.radio);
  };

  toggleActiveOne = () => {
    if (!this.state.oneA && !this.state.twoA && !this.state.threeA) {
      this.setState(function() {
        return { oneA: true, radio: '3w' };
      }, this.updateUp);
    } else if (!this.state.oneA && this.state.twoA) {
      this.setState(function() {
        return { oneA: true, twoA: false, radio: '3w' };
      }, this.updateUp);
    } else if (!this.state.oneA && this.state.threeA) {
      this.setState(function() {
        return { oneA: true, threeA: false, radio: '3w' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { oneA: false, radio: '1w' };
      }, this.updateUp);
    }
  };

  toggleActiveTwo = () => {
    if (!this.state.oneA && !this.state.twoA && !this.state.threeA) {
      this.setState(function() {
        return { twoA: true, radio: '9w' };
      }, this.updateUp);
    } else if (!this.state.twoA && this.state.oneA) {
      this.setState(function() {
        return { twoA: true, oneA: false, radio: '9w' };
      }, this.updateUp);
    } else if (!this.state.twoA && this.state.threeA) {
      this.setState(function() {
        return { twoA: true, threeA: false, radio: '9w' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { twoA: false, radio: '1w' };
      }, this.updateUp);
    }
  };

  toggleActiveThree = () => {
    if (!this.state.oneA && !this.state.twoA && !this.state.threeA) {
      this.setState(function() {
        return { threeA: true, radio: '27w' };
      }, this.updateUp);
    } else if (!this.state.threeA && this.state.twoA) {
      this.setState(function() {
        return { threeA: true, twoA: false, radio: '27w' };
      }, this.updateUp);
    } else if (!this.state.threeA && this.state.oneA) {
      this.setState(function() {
        return { threeA: true, oneA: false, radio: '27w' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { threeA: false, radio: '1w' };
      }, this.updateUp);
    }
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleActiveOne} active={this.state.oneA} size="sm">
          1
        </Button>
        <Button onClick={this.toggleActiveTwo} active={this.state.twoA} size="sm">
          2
        </Button>
        <Button onClick={this.toggleActiveThree} active={this.state.threeA} size="sm">
          3
        </Button>
      </div>
    );
  }
}
