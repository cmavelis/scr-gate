import React from 'react';
import { Button } from 'reactstrap';

interface IDoubleWordState {
  oneActive: boolean;
  twoActive: boolean;
  radio: string;
}

interface IDoubleWordProps {
  setWord: Function;
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

  updateUpToParent = () => {
    this.props.setWord('doubleWord', this.state.radio);
  };

  toggleActiveOne = () => {
    if (!this.state.oneActive && !this.state.twoActive) {
      this.setState({ oneActive: true, radio: '2w' }, this.updateUpToParent);
    } else if (!this.state.oneActive && this.state.twoActive) {
      this.setState({ oneActive: true, twoActive: false, radio: '2w' }, this.updateUpToParent);
    } else {
      this.setState({ oneActive: false, radio: '1w' }, this.updateUpToParent);
    }
  };

  toggleActiveTwo = () => {
    if (!this.state.oneActive && !this.state.twoActive) {
      this.setState({ twoActive: true, radio: '4w' }, this.updateUpToParent);
    } else if (!this.state.twoActive && this.state.oneActive) {
      this.setState({ twoActive: true, oneActive: false, radio: '4w' }, this.updateUpToParent);
    } else {
      this.setState({ twoActive: false, radio: '1w' }, this.updateUpToParent);
    }
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleActiveOne} active={this.state.oneActive} size="sm" color="danger">
          1
        </Button>
        <Button onClick={this.toggleActiveTwo} active={this.state.twoActive} size="sm" color="secondary" className="makeItWhite">
          2
        </Button>
      </div>
    );
  }
}
