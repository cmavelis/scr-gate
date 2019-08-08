import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'reactstrap';
import { getEntity, updateEntity } from 'app/entities/scrabbledev/game/game.reducer';
import './scores.scss';
export interface IScoresInputProps extends StateProps, DispatchProps {}

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
    this.props.getEntity(1);
  }

  handleChange = e => {
    const target = e.target as HTMLTextAreaElement;
    this.setState({ [target.name]: target.value } as any);
  };

  updateScore(num) {
    const { updateEntity, game } = this.props;
    const { playerOneScoreToAdd, playerTwoScoreToAdd, playerThreeScoreToAdd, playerFourScoreToAdd } = this.state;

    switch (num) {
      case 1:
        if (Number.isInteger(Number(playerOneScoreToAdd))) {
          updateEntity({
            id: 1,
            name: game.name,
            game_start: game.game_start,
            player1: game.player1,
            player2: game.player2,
            player3: game.player3,
            player4: game.player4,
            score1: Number(game.score1) + Number(playerOneScoreToAdd),
            score2: game.score2,
            score3: game.score3,
            score4: game.score4,
            nextPlayer: game.nextPlayer
          });
        } else {
          alert('Numbers only');
        }
        break;
      case 2:
        if (Number.isInteger(Number(playerTwoScoreToAdd))) {
          updateEntity({
            id: 1,
            name: game.name,
            game_start: game.game_start,
            player1: game.player1,
            player2: game.player2,
            player3: game.player3,
            player4: game.player4,
            score1: game.score1,
            score2: Number(game.score2) + Number(playerTwoScoreToAdd),
            score3: game.score3,
            score4: game.score4,
            nextPlayer: game.nextPlayer
          });
        } else {
          alert('Numbers only');
        }
        break;

      case 3:
        if (Number.isInteger(Number(playerThreeScoreToAdd))) {
          updateEntity({
            id: 1,
            name: game.name,
            game_start: game.game_start,
            player1: game.player1,
            player2: game.player2,
            player3: game.player3,
            player4: game.player4,
            score1: game.score1,
            score2: game.score2,
            score3: Number(game.score3) + Number(playerThreeScoreToAdd),
            score4: game.score4,
            nextPlayer: game.nextPlayer
          });
        } else {
          alert('Numbers only');
        }
        break;
      case 4:
        if (Number.isInteger(Number(playerFourScoreToAdd))) {
          updateEntity({
            id: 1,
            name: game.name,
            game_start: game.game_start,
            player1: game.player1,
            player2: game.player2,
            player3: game.player3,
            player4: game.player4,
            score1: game.score1,
            score2: game.score2,
            score3: game.score3,
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
        <div className="display-row">
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
