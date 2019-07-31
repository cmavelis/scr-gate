import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Row, Col } from 'reactstrap';

export interface IHomeProp extends StateProps, DispatchProps {}

export class ScoresInput extends React.Component<IHomeProp> {
  render() {
    return (
      <Row>
        <Col sm="2">
          <h2>Game</h2>
          <p>Player</p>
          <h3>Player</h3>
        </Col>
        <Col sm="2">
          <p>Score</p>
          <h3>10</h3>
        </Col>
        <Col sm="2">
          <Button>+</Button>
        </Col>
        <Col sm="2">
          <Input className="col-lg-1" type="number" />
        </Col>
        <Col sm="2">
          <Button color="primary">Submit Score</Button>
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
)(ScoresInput);
