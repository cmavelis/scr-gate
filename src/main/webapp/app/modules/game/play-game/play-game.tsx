import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import { Board } from 'app/modules/game/play-game/board';
import { Link } from 'react-router-dom';
import { ScoresInput } from 'app/modules/scores/ScoresInput';

export interface IInGameScreenProp extends StateProps, DispatchProps {}

export class InGameScreen extends React.Component<IInGameScreenProp> {
  render() {
    return (
      <Row>
        <Col md="9">
          <Row>
            <Link to="/game">
              <Button>Back to Games</Button>
            </Link>
          </Row>
          <Row className="pad">
            <Board />
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = storeState => ({
  // account: storeState.authentication.account,
  // isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InGameScreen);
