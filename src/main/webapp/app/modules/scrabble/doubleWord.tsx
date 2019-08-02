import React from 'react';
import { Button } from 'reactstrap';

interface IDoubleWordState {
  oneActive: boolean;
  twoActive: boolean;
  radio: string;
}

interface IDoubleWordProps {
  setWord: function;
}

export default class DoubleWord extends React.Component<IDoubleWordProps, IDoubleWordState> {
  constructor(props) {
    super(props);
    this.state = {
      oneActive: false,
      twoActive: false,
      radio: '1w'
    };
  }

  updateUp = () => {
    this.props.setWord('doubleWord', this.state.radio);
  };

  toggleActiveOne = () => {
    if (!this.state.oneActive && !this.state.twoActive) {
      this.setState(function() {
        return { oneActive: true, radio: '2w' };
      }, this.updateUp);
    } else if (!this.state.oneActive && this.state.twoActive) {
      this.setState(function() {
        return { oneActive: true, twoActive: false, radio: '2w' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { oneActive: false, radio: '1w' };
      }, this.updateUp);
    }
  };

  toggleActiveTwo = () => {
    if (!this.state.oneActive && !this.state.twoActive) {
      this.setState(function() {
        return { twoActive: true, radio: '4w' };
      }, this.updateUp);
    } else if (!this.state.twoActive && this.state.oneActive) {
      this.setState(function() {
        return { twoActive: true, oneActive: false, radio: '4w' };
      }, this.updateUp);
    } else {
      this.setState(function() {
        return { twoActive: false, radio: '1w' };
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
      </div>
    );
  }
}
