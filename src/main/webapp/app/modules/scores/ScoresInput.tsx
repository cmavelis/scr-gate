import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'reactstrap';
import './scores.scss';
export interface IScoresInputProps extends StateProps, DispatchProps {}

interface IScoresInputState {
  newScore: number;
}

export class ScoresInput extends React.Component<IScoresInputProps, IScoresInputState> {
  constructor(props) {
    super(props);
    this.state = {
      newScore: 0
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: Number(e.target.value) } as Pick<IScoresInputState, keyof IScoresInputState>);
  };

  render() {
    return (
      <div>
        <h2>{this.props.gameName}</h2>
        <div className="display-row">
          <div className="level-1">
            <p className="player">Player</p>
            <h3>{this.props.playerName}</h3>
          </div>
          <div className="level-1">
            <p className="score">Score</p>
            <h3 className="ps">{this.props.playerScore}</h3>
          </div>
          <span className="plus">&#43;</span>
          <Input className="col-md-1" type="text" name="newScore" value={this.state.newScore} onChange={this.handleChange} />
          <Button className="button" color="primary">
            Submit Score
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({
  gameName: 'Dummy Game',
  playerName: 'dummy',
  playerScore: 10
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoresInput);
