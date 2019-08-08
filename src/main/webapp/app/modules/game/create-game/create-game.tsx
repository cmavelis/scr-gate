import React from 'react';

import { connect } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';

import NameEntry from 'app/modules/game/create-game/name-entry';
import { Link } from 'react-router-dom';

export interface INameProps extends StateProps, DispatchProps {}
export interface INameState {
  playerNames: {
    [key: number]: string;
  };
}

export class CreateGame extends React.Component<INameProps, INameState> {
  static shouldInputActivate(index, object) {
    // returns true for the nth input if there are n-1 inputs activated (by object having entries)
    const inputsFilled = Object.values(object).filter((n: string) => n.length > 0);
    return inputsFilled.length >= index;
  }
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
        [index]: value.slice(0, 12) // TODO: look up more proper validation method
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
        <Container>
          <Row>
            <Col>
              <h2>New Game</h2>
              <h5>Enter Player Names</h5>
              {[0, 1, 2, 3].map(n => (
                <NameEntry
                  key={`player-${n}`}
                  playerNumber={n}
                  playerName={playerNames[n]}
                  onChange={this.handleChange}
                  deactivated={n > 1 && !CreateGame.shouldInputActivate(n, playerNames)}
                />
              ))}
              <Link to="/game/1">
                <Button color="primary" onSubmit={this.handleSubmit}>
                  Start Game
                </Button>
              </Link>
              <Link to="/game">
                <Button>Back to Games</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGame);
