import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import WordEntry from 'app/modules/word/word-entry';
import { Link } from 'react-router-dom';

export interface IHomeProp extends StateProps, DispatchProps {}

export class StartScreen extends React.Component<IHomeProp> {
  render() {
    return (
      <Row>
        <Col md="9">
          <h2>Scrabble Companion</h2>
          <Row className="justify-content-md-center">
            <Link to={'/game/new'}>
              <Button color="primary">Create Game</Button>
            </Link>
            <Button color="secondary">Join Game</Button>
          </Row>
          <Row className="pad">
            <WordEntry />
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
)(StartScreen);
