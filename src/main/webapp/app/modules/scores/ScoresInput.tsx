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
    this.updateScore = this.updateScore.bind(this);
  }

  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
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

  updateScore(num) {
    const { game } = this.props;
    const { scoreToAdd } = this.state;
    const playerScore = scoreToAdd[num];

    if (Number.isInteger(Number(playerScore))) {
      this.props.updateEntity({
        ...game,
        [`score${num + 1}`]: Number(game[`score${num + 1}`]) + Number(playerScore),
        nextPlayer: game.nextPlayer
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
          {[0, 1, 2, 3].map(i => {
            const playerName = game[`player${i + 1}`];
            if (playerName !== '') {
              return (
                <div className="player-score" key={`player-score${i + 1}`}>
                  <h3>{playerName}</h3>
                  <h3 className="ps">{game[`score${i + 1}`]}</h3>
                  <span className="plus">&#43;</span>
                  <Input className="input" type="text" value={scoreToAdd[i]} onChange={e => this.handleChange(e, i)}/>
                  <Button className="button" color="primary" onClick={() => this.updateScore(i)}>
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
  game: storeState.game.entity
});

const mapDispatchToProps = { getEntity, updateEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoresInput);
