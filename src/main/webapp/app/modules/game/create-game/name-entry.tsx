import React from 'react';

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
export interface INameProps {
  playerNumber: number;
  playerName: string;
  onChange: Function;
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
    const classes = `input-hack ${this.props.deactivated ? 'deactivated' : ''}`;
    return (
      <fieldset className={classes} disabled={this.props.deactivated}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Player {this.props.playerNumber + 1}</InputGroupText>
          </InputGroupAddon>
          <Input value={this.props.playerName} onChange={this.handleChange} placeholder="1-12 Characters" />
        </InputGroup>
      </fieldset>
    );
  }
}

export default NameEntry;
