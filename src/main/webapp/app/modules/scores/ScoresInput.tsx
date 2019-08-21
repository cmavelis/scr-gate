import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Col, Row } from 'reactstrap';
import { getEntity } from 'app/entities/scrabbledb2/game/game.reducer';
import { updateEntity } from 'app/entities/scrabbledb2/game-player/game-player.reducer';
import { Link } from 'react-router-dom';
import WordEntry from 'app/modules/word/word-entry';
import { IGamePlayer } from 'app/shared/model/scrabbledb2/game-player.model';

export interface IScoresInputProps extends StateProps, DispatchProps {
  match: any; // TODO: find real type
}

interface IScoresInputState {
  scoreToAdd: {
    0: number;
    1: number;
    2: number;
    3: number;
  };
}

export class ScoresInput extends React.Component<IScoresInputProps, IScoresInputState> {
  constructor(props) {
    super(props);
    this.state = {
      scoreToAdd: {
        0: 0,
        1: 0,
        2: 0,
        3: 0
      }
    };
    this.handleScoreSubmitClick = this.handleScoreSubmitClick.bind(this);
  }

  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  componentDidUpdate(prevProps): void {
    if (prevProps.gamePlayerUpdate !== this.props.gamePlayerUpdate) {
      this.props.getEntity(this.props.game.id);
    }
  }

  handleChange = (e, i) => {
    const { value } = e.target;
    this.setState(prevState => ({
      scoreToAdd: {
        ...prevState.scoreToAdd,
        [i]: value
      }
    }));
  };

  handleScoreSubmitClick(i) {
    this.updateScore(i);
    this.setState(prevState => ({
      scoreToAdd: {
        ...prevState.scoreToAdd,
        [i]: 0
      }
    }));
  }

  updateScore(i: number) {
    const { gamePlayers } = this.props.game;
    const gamePlayer: IGamePlayer = gamePlayers[i];
    const { scoreToAdd } = this.state;
    const playerScore = scoreToAdd[i];

    if (Number.isInteger(Number(playerScore))) {
      this.props.updateEntity({
        ...gamePlayer,
        score: gamePlayer.score + Number(playerScore)
      });
    } else {
      alert('Numbers only');
    }
  }

  render() {
    const { game } = this.props;
    const { scoreToAdd } = this.state;
    return (
      <div>
        <h2>{game.name}</h2>
        <Row>
          <Link to="/game">
            <Button>Back to Games</Button>
          </Link>
        </Row>
        <div className="col-5">
          {game.gamePlayers && [0, 1, 2, 3].map(i => {
            if (typeof game.gamePlayers[i] !== 'undefined' && game.gamePlayers[i].player) {
              const gamePlayer = game.gamePlayers[i];
              const playerName = gamePlayer.player.name;
                return (
                  <div className="player-score" key={`player-score${i + 1}`}>
                    <h3>{playerName}</h3>
                    <h3 className="ps">{gamePlayer.score}</h3>
                    <span className="plus">&#43;</span>
                    <Input className="input" type="text" value={scoreToAdd[i]} onChange={e => this.handleChange(e, i)}/>
                    <Button className="button" color="primary" onClick={() => this.handleScoreSubmitClick(i)}>
                      Submit Score
                    </Button>
                  </div>
                );
            } else {
              return;
            }
          })
            }
        </div>
        <Row>
          <Col md="9">
            <Row className="pad">
              <WordEntry />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
  game: storeState.game.entity,
  gamePlayerUpdate: storeState.gamePlayer.updateSuccess
});

const mapDispatchToProps = { getEntity, updateEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoresInput);
