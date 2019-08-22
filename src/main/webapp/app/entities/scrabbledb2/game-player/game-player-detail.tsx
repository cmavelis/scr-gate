import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './game-player.reducer';
import { IGamePlayer } from 'app/shared/model/scrabbledb2/game-player.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IGamePlayerDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class GamePlayerDetail extends React.Component<IGamePlayerDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { gamePlayerEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            GamePlayer [<b>{gamePlayerEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="turnOrder">Turn Order</span>
            </dt>
            <dd>{gamePlayerEntity.turnOrder}</dd>
            <dt>
              <span id="score">Score</span>
            </dt>
            <dd>{gamePlayerEntity.score}</dd>
            <dt>
              <span id="rack">Rack</span>
            </dt>
            <dd>{gamePlayerEntity.rack}</dd>
            <dt>Game</dt>
            <dd>{gamePlayerEntity.gameId ? gamePlayerEntity.gameId : ''}</dd>
            <dt>Player</dt>
            <dd>{gamePlayerEntity.playerId ? gamePlayerEntity.playerId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/game-player" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/game-player/${gamePlayerEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ gamePlayer }: IRootState) => ({
  gamePlayerEntity: gamePlayer.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePlayerDetail);
