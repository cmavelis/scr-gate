import React from 'react';
import { connect } from 'react-redux';
import { Container, Input, Button, Row, Col } from 'reactstrap';
import './scores.scss';
export interface ILetterInputElementProps extends StateProps, DispatchProps {}

export class ScoresInput extends React.Component<ILetterInputElementProps> {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h2>{this.props.gameName}</h2>
          </Row>
          <Row>
            <Col sm="2">
              <p>Player</p>
              <h3>{this.props.playerName}</h3>
            </Col>
            <Col sm="2">
              <p className="score">Score</p>
              <h3>{this.props.playerScore}</h3>
            </Col>
            <Col sm="2">
              <span className="plus">&#43;</span>
            </Col>
            <Col sm="2">
              <Input className="col-lg-7" type="name" />
            </Col>
            <Col sm="">
              <Button className="button" color="primary">
                Submit Score
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = () => ({
  gameName: 'Dummy Game',
  playerName: 'dummy',
  playerScore: 10
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoresInput);
