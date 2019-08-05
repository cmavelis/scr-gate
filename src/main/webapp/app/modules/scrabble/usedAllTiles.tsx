import React from 'react';
import { Button } from 'reactstrap';

interface IUsedAllTilesState {
  usedAllA: boolean;
}

interface IUsedAllTilesProps {
  setWord: Function;
}

export default class UsedAllTiles extends React.Component<IUsedAllTilesProps, IUsedAllTilesState> {
  constructor(props) {
    super(props);
    this.state = {
      usedAllA: false
    };
  }

  updateUp = () => {
    if (this.state.usedAllA) {
      this.props.setWord('usedAll', 50);
    } else {
      this.props.setWord('usedAll', 0);
    }
  };

  toggleActiveUsedAll = () => {
    if (!this.state.usedAllA) {
      this.setState({ usedAllA: true }, this.updateUp);
    } else {
      this.setState({ usedAllA: false }, this.updateUp);
    }
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleActiveUsedAll} active={this.state.usedAllA} size="sm" color="danger">
          Yes!
        </Button>
      </div>
    );
  }
}
