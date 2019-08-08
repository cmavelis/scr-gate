import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { IGame } from 'app/shared/model/scrabbledev/game.model';
import { getEntities } from 'app/entities/scrabbledev/game/game.reducer';

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
          <Row>
            <ul>
              {Object.values(games).map(game => (
                <li>
                  <span>{game.name}</span>
                  <ul>
                    {Object.keys(game).map(key => (
                      <li>{`${key}: ${game[key]}`}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Row>
          <Row className="justify-content-md-center">
            <Link to={'/game/new'}>
              <Button color="primary">New Game</Button>
            </Link>
            <Link to={'/game/1'}>
              <Button color="secondary">Open Game</Button>
            </Link>
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
