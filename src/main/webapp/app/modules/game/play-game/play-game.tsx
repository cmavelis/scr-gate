import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import WordEntry from 'app/modules/word/word-entry';
import { Link } from 'react-router-dom';

export interface IInGameScreenProp extends StateProps, DispatchProps {}

export class InGameScreen extends React.Component<IInGameScreenProp> {
  render() {
    return (
      <Row>
        <Col md="9">
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
)(InGameScreen);
