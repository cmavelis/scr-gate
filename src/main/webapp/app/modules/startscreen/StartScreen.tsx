import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import { getEntities } from 'app/entities/scrabbledev/game/game.reducer';
import { Link } from 'react-router-dom';

export interface IHomeProp extends StateProps, DispatchProps {}

export class StartScreen extends React.Component<IHomeProp> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    return (
      <Row>
        <Col md="9">
          <h2>Scrabble Companion</h2>
          <Row className="justify-content-md-center">
            <Button color="primary">Create Game</Button>
            <Link to="/games">
              <Button color="secondary">Join Game</Button>
            </Link>
          </Row>
        </Col>
        <Col md="3" className="pad">
          <span className="hipster rounded" />
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
