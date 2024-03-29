import React from 'react';
import { Button } from 'reactstrap';

interface ITripleWordProps {
  bonus: number;
  setWord: Function;
}

export default class TripleWord extends React.Component<ITripleWordProps, {}> {
  render() {
    return (
      <div>
        <Button onClick={() => this.props.setWord(3)} active={this.props.bonus === 3} size="sm" color="secondary">
          1
        </Button>
        <Button onClick={() => this.props.setWord(9)} active={this.props.bonus === 9} size="sm" color="secondary">
          2
        </Button>
        <Button onClick={() => this.props.setWord(27)} active={this.props.bonus === 27} size="sm" color="secondary">
          3
        </Button>
      </div>
    );
  }
}
