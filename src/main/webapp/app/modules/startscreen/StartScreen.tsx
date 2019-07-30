import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';

export interface IHomeProp extends StateProps, DispatchProps {}

export class StartScreen extends React.Component<IHomeProp> {
  render() {
    return (
      <Row>
        <Col md="9">
          <h2>Scrabble Companion</h2>
          <Row className="justify-content-md-center">
            <Button color="primary">Create Game</Button>
            <Button color="secondary">Join Game</Button>
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
