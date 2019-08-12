import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './game.reducer';
import { IGame } from 'app/shared/model/scrabbledev/game.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IGameDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class GameDetail extends React.Component<IGameDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { gameEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            Game [<b>{gameEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">Name</span>
            </dt>
            <dd>{gameEntity.name}</dd>
            <dt>
              <span id="game_start">Game Start</span>
            </dt>
            <dd>
              <TextFormat value={gameEntity.game_start} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="player1">Player 1</span>
            </dt>
            <dd>{gameEntity.player1}</dd>
            <dt>
              <span id="player2">Player 2</span>
            </dt>
            <dd>{gameEntity.player2}</dd>
            <dt>
              <span id="player3">Player 3</span>
            </dt>
            <dd>{gameEntity.player3}</dd>
            <dt>
              <span id="player4">Player 4</span>
            </dt>
            <dd>{gameEntity.player4}</dd>
            <dt>
              <span id="score1">Score 1</span>
            </dt>
            <dd>{gameEntity.score1}</dd>
            <dt>
              <span id="score2">Score 2</span>
            </dt>
            <dd>{gameEntity.score2}</dd>
            <dt>
              <span id="score3">Score 3</span>
            </dt>
            <dd>{gameEntity.score3}</dd>
            <dt>
              <span id="score4">Score 4</span>
            </dt>
            <dd>{gameEntity.score4}</dd>
            <dt>
              <span id="nextPlayer">Next Player</span>
            </dt>
            <dd>{gameEntity.nextPlayer}</dd>
          </dl>
          <Button tag={Link} to="/entity/game" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/game/${gameEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ game }: IRootState) => ({
  gameEntity: game.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameDetail);
