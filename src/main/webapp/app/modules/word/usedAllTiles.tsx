import React from 'react';
import { Button } from 'reactstrap';

interface IUsedAllTilesProps {
  usedAll: boolean;
  setUsedAll: Function;
}

export default class UsedAllTiles extends React.Component<IUsedAllTilesProps, {}> {
  render() {
    return (
      <div>
        <Button onClick={() => this.props.setUsedAll(!this.props.usedAll)} active={this.props.usedAll} size="sm" color="info">
          Yes!
        </Button>
      </div>
    );
  }
}
