import React from 'react';
import { Button } from 'reactstrap';

interface IDoubleWordProps {
  bonus: number;
  setWord: Function;
}

export default class DoubleWord extends React.Component<IDoubleWordProps, {}> {
  render() {
    return (
      <div>
        <Button onClick={() => this.props.setWord(2)} active={this.props.bonus === 2} size="sm" color="secondary">
          1
        </Button>
        <Button onClick={() => this.props.setWord(4)} active={this.props.bonus === 4} size="sm" color="secondary">
          2
        </Button>
      </div>
    );
  }
}
