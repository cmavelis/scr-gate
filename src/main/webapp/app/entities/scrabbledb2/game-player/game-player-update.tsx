import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IGame } from 'app/shared/model/scrabbledb2/game.model';
import { getEntities as getGames } from 'app/entities/scrabbledb2/game/game.reducer';
import { IPlayer } from 'app/shared/model/scrabbledb2/player.model';
import { getEntities as getPlayers } from 'app/entities/scrabbledb2/player/player.reducer';
import { getEntity, updateEntity, createEntity, reset } from './game-player.reducer';
import { IGamePlayer } from 'app/shared/model/scrabbledb2/game-player.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IGamePlayerUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IGamePlayerUpdateState {
  isNew: boolean;
  gameId: string;
  playerId: string;
}

export class GamePlayerUpdate extends React.Component<IGamePlayerUpdateProps, IGamePlayerUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '0',
      playerId: '0',
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getGames();
    this.props.getPlayers();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { gamePlayerEntity } = this.props;
      const entity = {
        ...gamePlayerEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/game-player');
  };

  render() {
    const { gamePlayerEntity, games, players, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="scrabblecompanionApp.scrabbledb2GamePlayer.home.createOrEditLabel">Create or edit a GamePlayer</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : gamePlayerEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="game-player-id">ID</Label>
                    <AvInput id="game-player-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="turnOrderLabel" for="game-player-turnOrder">
                    Turn Order
                  </Label>
                  <AvField
                    id="game-player-turnOrder"
                    type="string"
                    className="form-control"
                    name="turnOrder"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' },
                      min: { value: 0, errorMessage: 'This field should be at least 0.' },
                      max: { value: 3, errorMessage: 'This field cannot be more than 3.' },
                      number: { value: true, errorMessage: 'This field should be a number.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="scoreLabel" for="game-player-score">
                    Score
                  </Label>
                  <AvField id="game-player-score" type="string" className="form-control" name="score" />
                </AvGroup>
                <AvGroup>
                  <Label id="rackLabel" for="game-player-rack">
                    Rack
                  </Label>
                  <AvField
                    id="game-player-rack"
                    type="text"
                    name="rack"
                    validate={{
                      minLength: { value: 7, errorMessage: 'This field is required to be at least 7 characters.' },
                      maxLength: { value: 7, errorMessage: 'This field cannot be longer than 7 characters.' },
                      pattern: { value: '^[A-Z?_]*$', errorMessage: "This field should follow pattern for '^[A-Z?_]*.." }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="game-player-game">Game</Label>
                  <AvInput id="game-player-game" type="select" className="form-control" name="gameId">
                    <option value="" key="0" />
                    {games
                      ? games.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="game-player-player">Player</Label>
                  <AvInput id="game-player-player" type="select" className="form-control" name="playerId">
                    <option value="" key="0" />
                    {players
                      ? players.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/game-player" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />
                  &nbsp;
                  <span className="d-none d-md-inline">Back</span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />
                  &nbsp; Save
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  games: storeState.game.entities,
  players: storeState.player.entities,
  gamePlayerEntity: storeState.gamePlayer.entity,
  loading: storeState.gamePlayer.loading,
  updating: storeState.gamePlayer.updating,
  updateSuccess: storeState.gamePlayer.updateSuccess
});

const mapDispatchToProps = {
  getGames,
  getPlayers,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePlayerUpdate);
