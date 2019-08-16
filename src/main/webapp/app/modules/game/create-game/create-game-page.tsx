import React from 'react';

import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import moment from 'moment';
import CreateGame from 'app/modules/game/create-game/create-game';
import { Link } from 'react-router-dom';

import { createEntity } from 'app/entities/scrabbledev/game/game.reducer';
import { getPlayerByName } from 'app/entities/scrabbledb2/player/player.reducer';

export interface ICreateGamePageProps extends StateProps, DispatchProps {}
export interface ICreateGamePageState {
  playerNames: {
    [key: number]: {
      name: string,
      exists: boolean
    };
  };
  gameName: string;
}

export class CreateGamePage extends React.Component<ICreateGamePageProps, ICreateGamePageState> {
  constructor(props) {
    super(props);

    this.state = {
      playerNames: {
        ...[0, 1, 2, 3].map(() => ({ name: '', exists: null }))
      },
      gameName: 'New Game'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
    this.handleGameNameChange = this.handleGameNameChange.bind(this);
    this.checkPlayerExists = this.checkPlayerExists.bind(this);
  }

  componentDidUpdate(prevProps): void {
    [0, 1, 2, 3].forEach(i => {
      if (prevProps.validatedPlayers[i] !== this.props.validatedPlayers[i]) {
        this.setState(prevState => ({
          playerNames: {
            ...prevState.playerNames,
            [i]: {
              ...prevState.playerNames[i],
              exists: this.props.validatedPlayers[i] !== '' && this.props.validatedPlayers[i].id && this.props.validatedPlayers[i].id !== null
          }}}));
        }
      }
    );
  }

  checkPlayerExists(i) {
    if (this.state.playerNames[i].name) {
      this.props.getPlayerByName(this.state.playerNames[i].name, i);
    }
  }

  handlePlayerNameChange(value, index) {
    this.setState(prevState => ({
      ...prevState,
      playerNames: {
        ...prevState.playerNames,
        [index]: {
          ...prevState.playerNames[index],
          name: value.slice(0, 12)
        } // TODO: look up more proper validation method
      }
    }));
  }

  handleGameNameChange(event) {
    const { value } = event.target;
    this.setState({
      gameName: value
    }); // TODO: getGame
  }

  handleClick() {
    const {
      playerNames,
      gameName
    } = this.state;
    this.props.createEntity({
        name: gameName,
        game_start: moment(),
        player1: playerNames[0].name,
        player2: playerNames[1].name,
        player3: playerNames[2].name,
        player4: playerNames[3].name,
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
          checkPlayerExists={this.checkPlayerExists}
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

const mapStateToProps = storeState => ({
  validatedPlayers: storeState.player.validation
});

const mapDispatchToProps = { createEntity, getPlayerByName };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGamePage);
