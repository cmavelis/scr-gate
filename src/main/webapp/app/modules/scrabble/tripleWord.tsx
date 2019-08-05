import React from 'react';
import { Button } from 'reactstrap';

interface ITripleWordState {
  oneActive: boolean;
  twoActive: boolean;
  threeActive: boolean;
  radio: string;
}

interface ITripleWordProps {
  setWord: Function;
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

  updateUpToParent = () => {
    this.props.setWord('tripleWord', this.state.radio);
  };

  toggleActiveOne = () => {
    if (!this.state.oneActive && !this.state.twoActive && !this.state.threeActive) {
      this.setState({ oneActive: true, radio: '3w' }, this.updateUpToParent);
    } else if (!this.state.oneActive && this.state.twoActive) {
      this.setState({ oneActive: true, twoActive: false, radio: '3w' }, this.updateUpToParent);
    } else if (!this.state.oneActive && this.state.threeActive) {
      this.setState({ oneActive: true, threeActive: false, radio: '3w' }, this.updateUpToParent);
    } else {
      this.setState({ oneActive: false, radio: '1w' }, this.updateUpToParent);
    }
  };

  toggleActiveTwo = () => {
    if (!this.state.oneActive && !this.state.twoActive && !this.state.threeActive) {
      this.setState({ twoActive: true, radio: '9w' }, this.updateUpToParent);
    } else if (!this.state.twoActive && this.state.oneActive) {
      this.setState({ twoActive: true, oneActive: false, radio: '9w' }, this.updateUpToParent);
    } else if (!this.state.twoActive && this.state.threeActive) {
      this.setState({ twoActive: true, threeActive: false, radio: '9w' }, this.updateUpToParent);
    } else {
      this.setState({ twoActive: false, radio: '1w' }, this.updateUpToParent);
    }
  };

  toggleActiveThree = () => {
    if (!this.state.oneActive && !this.state.twoActive && !this.state.threeActive) {
      this.setState({ threeActive: true, radio: '27w' }, this.updateUpToParent);
    } else if (!this.state.threeActive && this.state.twoActive) {
      this.setState({ threeActive: true, twoActive: false, radio: '27w' }, this.updateUpToParent);
    } else if (!this.state.threeActive && this.state.oneActive) {
      this.setState({ threeActive: true, oneActive: false, radio: '27w' }, this.updateUpToParent);
    } else {
      this.setState({ threeActive: false, radio: '1w' }, this.updateUpToParent);
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
        <Button onClick={this.toggleActiveThree} active={this.state.threeActive} size="sm" color="primary">
          3
        </Button>
      </div>
    );
  }
}
