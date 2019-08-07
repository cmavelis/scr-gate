import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'reactstrap';
import { getEntity, updateEntity } from 'app/entities/scrabbledev/game/game.reducer';
import './scores.scss';
export interface IScoresInputProps extends StateProps, DispatchProps {}

interface IScoresInputState {
  playerOneScore: number;
  playerTwoScore: number;
  playerThreeScore: number;
  playerFourScore: number;
}

export class ScoresInput extends React.Component<IScoresInputProps, IScoresInputState> {
  constructor(props) {
    super(props);
    this.state = {
      playerOneScore: 0,
      playerTwoScore: 0,
      playerThreeScore: 0,
      playerFourScore: 0
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
    // tslint:disable-next-line:no-console
    console.log(num);

    console.log(num, typeof num);
    switch (num) {
      case 1:
        this.props.updateEntity({
          id: 1,
          name: this.props.game.name,
          game_start: this.props.game.game_start,
          player1: this.props.game.player1,
          player2: this.props.game.player2,
          player3: this.props.game.player3,
          player4: this.props.game.player4,
          score1: Number(this.props.game.score1) + Number(this.state.playerOneScore),
          score2: this.props.game.score2,
          score3: this.props.game.score3,
          score4: this.props.game.score4,
          nextPlayer: this.props.game.nextPlayer
        });
        break;
      case 2:
        this.props.updateEntity({
          id: 1,
          name: this.props.game.name,
          game_start: this.props.game.game_start,
          player1: this.props.game.player1,
          player2: this.props.game.player2,
          player3: this.props.game.player3,
          player4: this.props.game.player4,
          score1: this.props.game.score1,
          score2: Number(this.props.game.score2) + Number(this.state.playerTwoScore),
          score3: this.props.game.score3,
          score4: this.props.game.score4,
          nextPlayer: this.props.game.nextPlayer
        });
        break;

      case 3:
        this.props.updateEntity({
          id: 1,
          name: this.props.game.name,
          game_start: this.props.game.game_start,
          player1: this.props.game.player1,
          player2: this.props.game.player2,
          player3: this.props.game.player3,
          player4: this.props.game.player4,
          score1: this.props.game.score1,
          score2: this.props.game.score2,
          score3: Number(this.props.game.score3) + Number(this.state.playerThreeScore),
          score4: this.props.game.score4,
          nextPlayer: this.props.game.nextPlayer
        });
        break;
      case 4:
        this.props.updateEntity({
          id: 1,
          name: this.props.game.name,
          game_start: this.props.game.game_start,
          player1: this.props.game.player1,
          player2: this.props.game.player2,
          player3: this.props.game.player3,
          player4: this.props.game.player4,
          score1: this.props.game.score1,
          score2: this.props.game.score2,
          score3: this.props.game.score3,
          score4: Number(this.props.game.score4) + Number(this.state.playerFourScore),
          nextPlayer: this.props.game.nextPlayer
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { game } = this.props;
    return (
      <div>
        <h2>{game.name}</h2>
        <div className="display-row">
          <div className="player-score">
            <h3>{game.player1}</h3>
            <h3 className="ps">{game.score1}</h3>
            <span className="plus">&#43;</span>
            <Input className="input" type="text" name="playerOneScore" value={this.state.playerOneScore} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(1)}>
              Submit Score
            </Button>
          </div>
          <div className="player-score">
            <h3>{game.player2}</h3>
            <h3 className="ps">{game.score2}</h3>
            <span className="plus">&#43;</span>
            <Input className="input" type="text" name="playerTwoScore" value={this.state.playerTwoScore} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(2)}>
              Submit Score
            </Button>
          </div>
          <div className="player-score">
            <h3>{game.player3}</h3>
            <h3 className="ps">{game.score3}</h3>
            <span className="plus">&#43;</span>
            <Input className="input" type="text" name="playerThreeScore" value={this.state.playerThreeScore} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(3)}>
              Submit Score
            </Button>
          </div>
          <div className="player-score">
            <h3>{game.player4}</h3>
            <h3 className="ps">{game.score4}</h3>
            <span className="plus">&#43;</span>
            <Input className="input" type="text" name="playerFourScore" value={this.state.playerFourScore} onChange={this.handleChange} />
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
