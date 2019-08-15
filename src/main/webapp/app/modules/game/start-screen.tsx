import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { IGame } from 'app/shared/model/scrabbledev/game.model';
import { getEntities } from 'app/entities/scrabbledb2/game/game.reducer';

export interface IHomeProp extends StateProps, DispatchProps {
  games: IGame;
}

export class StartScreen extends React.Component<IHomeProp> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { games } = this.props;

    return (
      <Row className="row-outer">
        <Col className="col-wrap" md="9">
          <h2>Available games</h2>
          <Row className="justify-content-md-center">
            <Link to={'/game/new'}>
              <Button color="info">New Game</Button>
            </Link>
          </Row>
          <Row>
            <ul>
              {Object.values(games).map(game => (
                <li>
                  <Link to={`/game/${game.id}`}>
                    <Button color="primary">{game.name}</Button>
                  </Link>
                  <ul>
                    {Object.keys(game).map(key => {
                      if (key !== 'state') {
                      return (
                        <li>{`${key}: ${game[key]}`}</li>
                      );
                    }
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = storeState => ({
  games: storeState.game.entities
});

const mapDispatchToProps = { getEntities };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen);
