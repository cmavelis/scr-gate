import React from 'react';

import { connect } from 'react-redux';
import NameEntry from 'app/modules/create-game/name-entry';

export interface INameProps extends StateProps, DispatchProps {}
export interface INameState {
  playerNames: {
    0: string;
    1: string;
    2: string;
    3: string;
  };
}

export class CreateGame extends React.Component<INameProps, INameState> {
  constructor(props) {
    super(props);
    this.state = {
      playerNames: {
        0: '',
        1: '',
        2: '',
        3: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value, index) {
    this.setState(prevState => ({
      playerNames: {
        ...prevState.playerNames,
        [index]: value
      }
    }));
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    const { playerNames } = this.state;
    return (
      <div>
        {[0, 1, 2, 3].map(n => (
          <NameEntry
            key={`player-${n}`}
            playerNumber={n}
            playerName={playerNames[n]}
            onChange={this.handleChange}
            deactivated={n > 1 && !playerNames[n - 1]}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = storeState => ({});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGame);
