import React from 'react';
import { Button } from 'reactstrap';

interface IDoubleWordState {
  oneA: boolean;
  twoA: boolean;
  radio: string;
}

interface IDoubleWordProps {
  setWord: function;
}

export default class DoubleWord extends React.Component<IDoubleWordProps, IDoubleWordState> {
  constructor(props) {
    super(props);
    this.state = {
      oneA: false,
      twoA: false,
      radio: '1w'
    };
  }

  updateUp = () => {
    this.props.setWord('doubleWord', this.state.radio);
  };

  toggleActiveOne = () => {
    if (!this.state.oneA && !this.state.twoA) {
      this.setState(function() {
        return { oneA: true, radio: '2w' };
      }, this.updateUp);
    } else if (!this.state.oneA && this.state.twoA) {
      this.setState(function() {
        return { oneA: true, twoA: false, radio: '2w' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { oneA: false, radio: '1w' };
      }, this.updateUp);
    }
  };

  toggleActiveTwo = () => {
    if (!this.state.oneA && !this.state.twoA) {
      this.setState(function() {
        return { twoA: true, radio: '4w' };
      }, this.updateUp);
    } else if (!this.state.twoA && this.state.oneA) {
      this.setState(function() {
        return { twoA: true, oneA: false, radio: '4w' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { twoA: false, radio: '1w' };
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
      </div>
    );
  }
}
