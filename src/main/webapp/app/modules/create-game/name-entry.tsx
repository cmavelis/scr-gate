import './name-entry.scss'; // TODO: remove local import

import React from 'react';

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
export interface INameProps {
  playerNumber: number;
  playerName: string;
  onChange: (event, playerNumber) => void;
  deactivated: boolean;
}

export class NameEntry extends React.Component<INameProps> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value, this.props.playerNumber);
  }

  render() {
    const classes = `${this.props.deactivated ? 'deactivated' : ''}`;
    return (
      <div className={classes}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Player {this.props.playerNumber + 1}</InputGroupText>
          </InputGroupAddon>
          <Input value={this.props.playerName} onChange={this.handleChange} />
        </InputGroup>
        <br />
      </div>
    );
  }
}

export default NameEntry;
