import React from 'react';

import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import CreateGame from 'app/modules/game/create-game/create-game';
import { Link } from 'react-router-dom';

import { createEntity } from 'app/entities/scrabbledev/game/game.reducer';

export interface ICreateGamePageProps extends StateProps, DispatchProps {}
export interface ICreateGamePageState {
  playerNames: {
    [key: number]: string;
  };
  gameName: string;
}

export class CreateGamePage extends React.Component<ICreateGamePageProps, ICreateGamePageState> {
  constructor(props) {
    super(props);

    this.state = {
      playerNames: {
        0: '',
        1: '',
        2: '',
        3: ''
      },
      gameName: 'New Game'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
    this.handleGameNameChange = this.handleGameNameChange.bind(this);
  }

  handlePlayerNameChange(value, index) {
    this.setState(prevState => ({
      ...prevState,
      playerNames: {
        ...prevState.playerNames,
        [index]: value.slice(0, 12) // TODO: look up more proper validation method
      }
    }));
  }

  handleGameNameChange(event) {
    const { value } = event;
    this.setState({
      gameName: value
    });
  }

  handleClick() {
    const {
      playerNames,
      gameName
    } = this.state;
    this.props.createEntity({
        name: 'Game name',
        player1: playerNames[0],
        player2: playerNames[1],
        player3: playerNames[2],
        player4: playerNames[3],
        score1: 0,
        score2: 0,
        score3: 0,
        score4: 0,
        nextPlayer: 1
    });
  }

  render() {
    const { playerNames, gameName } = this.state;
    return (
      <div>
        <CreateGame
          playerNames={playerNames}
          gameName={gameName}
          handlePlayerNameChange={this.handlePlayerNameChange}
          handleGameNameChange={this.handleGameNameChange}
        />
          <Button color="primary" onClick={this.handleClick}>
            Start Game
          </Button>
        <Link to="/game">
          <Button>Back to Games</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = { createEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGamePage);
