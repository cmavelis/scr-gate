import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Col, Row } from 'reactstrap';
import { getEntity, updateEntity } from 'app/entities/scrabbledev/game/game.reducer';
import './scores.scss';
import { Link } from 'react-router-dom';
import WordEntry from 'app/modules/word/word-entry';

export interface IScoresInputProps extends StateProps, DispatchProps {
  match: any; // TODO: find real type
}

interface IScoresInputState {
  playerOneScoreToAdd: number;
  playerTwoScoreToAdd: number;
  playerThreeScoreToAdd: number;
  playerFourScoreToAdd: number;
}

export class ScoresInput extends React.Component<IScoresInputProps, IScoresInputState> {
  constructor(props) {
    super(props);
    this.state = {
      playerOneScoreToAdd: 0,
      playerTwoScoreToAdd: 0,
      playerThreeScoreToAdd: 0,
      playerFourScoreToAdd: 0
    };
    this.updateScore = this.updateScore.bind(this);
  }

  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  handleChange = e => {
    const target = e.target as HTMLTextAreaElement;
    this.setState({ [target.name]: target.value } as any);
  };

  updateScore(num) {
    const { game } = this.props;
    const { playerOneScoreToAdd, playerTwoScoreToAdd, playerThreeScoreToAdd, playerFourScoreToAdd } = this.state;

    switch (num) {
      case 1:
        if (Number.isInteger(Number(playerOneScoreToAdd))) {
          this.props.updateEntity({
            ...game,
            score1: Number(game.score1) + Number(playerOneScoreToAdd),
            nextPlayer: game.nextPlayer
          });
        } else {
          alert('Numbers only');
        }
        break;
      case 2:
        if (Number.isInteger(Number(playerTwoScoreToAdd))) {
          this.props.updateEntity({
            ...game,
            score2: Number(game.score2) + Number(playerTwoScoreToAdd),
            nextPlayer: game.nextPlayer
          });
        } else {
          alert('Numbers only');
        }
        break;

      case 3:
        if (Number.isInteger(Number(playerThreeScoreToAdd))) {
          this.props.updateEntity({
            ...game,
            score3: Number(game.score3) + Number(playerThreeScoreToAdd),
            nextPlayer: game.nextPlayer
          });
        } else {
          alert('Numbers only');
        }
        break;
      case 4:
        if (Number.isInteger(Number(playerFourScoreToAdd))) {
          this.props.updateEntity({
            ...game,
            score4: Number(game.score4) + Number(playerFourScoreToAdd),
            nextPlayer: game.nextPlayer
          });
        } else {
          alert('Numbers only');
        }
        break;
      default:
        break;
    }
  }

  render() {
    const { game } = this.props;
    const { playerOneScoreToAdd, playerTwoScoreToAdd, playerThreeScoreToAdd, playerFourScoreToAdd } = this.state;
    return (
      <div>
        <h2>{game.name}</h2>
        <Row>
          <Link to="/game">
            <Button>Back to Games</Button>
          </Link>
        </Row>
        <div className="col-5">
          <div className="player-score">
            <h3>{game.player1}</h3>
            <h3 className="ps">{game.score1}</h3>
            <span className="plus">&#43;</span>
            <Input className="input" type="text" name="playerOneScoreToAdd" value={playerOneScoreToAdd} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(1)}>
              Submit Score
            </Button>
          </div>
          <div className="player-score">
            <h3>{game.player2}</h3>
            <h3 className="ps">{game.score2}</h3>
            <span className="plus">&#43;</span>
            <Input className="input" type="text" name="playerTwoScoreToAdd" value={playerTwoScoreToAdd} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(2)}>
              Submit Score
            </Button>
          </div>
          <div className="player-score">
            <h3>{game.player3}</h3>
            <h3 className="ps">{game.score3}</h3>
            <span className="plus">&#43;</span>
            <Input className="input" type="text" name="playerThreeScoreToAdd" value={playerThreeScoreToAdd} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(3)}>
              Submit Score
            </Button>
          </div>
          <div className="player-score">
            <h3>{game.player4}</h3>
            <h3 className="ps">{game.score4}</h3>
            <span className="plus">&#43;</span>
            <Input className="input" type="text" name="playerFourScoreToAdd" value={playerFourScoreToAdd} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(4)}>
              Submit Score
            </Button>
          </div>
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
  game: storeState.game.entity
});

const mapDispatchToProps = { getEntity, updateEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoresInput);
