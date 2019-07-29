import React from 'react';

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
export interface INameProps {
  playerCount: number;
}

export class NameEntry extends React.Component<INameProps> {
  public static defaultProps = {
    playerCount: 2
  };

  render() {
    return (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Player {this.props.playerCount}</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="username" />
        </InputGroup>
        <br />
      </div>
    );
  }
}

export default NameEntry;
