import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import WordEntry from 'app/modules/word/word-entry';
import { Board } from 'app/modules/game/play-game/board';
import { PlayerCard } from 'app/modules/game/play-game/player-card';
import { Link } from 'react-router-dom';
import { ScoresInput } from 'app/modules/scores/ScoresInput';
import './play-game.scss';

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
          {/* <div className="pad">
            <WordEntry />
          </div> */}
          <div className="play-area">
            <div className="player-cards">
              <div className="player-card">
                <PlayerCard />
              </div>
            </div>
            <div className="board">
              <Board />
            </div>
          </div>
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
