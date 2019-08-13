import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IPlayer } from 'app/shared/model/game/player.model';
import { getEntities as getPlayers } from 'app/entities/game/player/player.reducer';
import { getEntity, updateEntity, createEntity, reset } from './game.reducer';
import { IGame } from 'app/shared/model/game/game.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IGameUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IGameUpdateState {
  isNew: boolean;
  idsplayer: any[];
  currentPlayerId: string;
}

export class GameUpdate extends React.Component<IGameUpdateProps, IGameUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idsplayer: [],
      currentPlayerId: '0',
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

    this.props.getPlayers();
  }

  saveEntity = (event, errors, values) => {
    values.gameStart = convertDateTimeToServer(values.gameStart);

    if (errors.length === 0) {
      const { gameEntity } = this.props;
      const entity = {
        ...gameEntity,
        ...values,
        players: mapIdList(values.players)
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/game');
  };

  render() {
    const { gameEntity, players, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="scrabblecompanionApp.gameGame.home.createOrEditLabel">Create or edit a Game</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : gameEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="game-id">ID</Label>
                    <AvInput id="game-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="nameLabel" for="game-name">
                    Name
                  </Label>
                  <AvField
                    id="game-name"
                    type="text"
                    name="name"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' },
                      minLength: { value: 1, errorMessage: 'This field is required to be at least 1 characters.' },
                      maxLength: { value: 16, errorMessage: 'This field cannot be longer than 16 characters.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="playerOrderLabel" for="game-playerOrder">
                    Player Order
                  </Label>
                  <AvField
                    id="game-playerOrder"
                    type="text"
                    name="playerOrder"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' },
                      minLength: { value: 3, errorMessage: 'This field is required to be at least 3 characters.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="gameStartLabel" for="game-gameStart">
                    Game Start
                  </Label>
                  <AvInput
                    id="game-gameStart"
                    type="datetime-local"
                    className="form-control"
                    name="gameStart"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.gameEntity.gameStart)}
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="game-currentPlayer">Current Player</Label>
                  <AvInput id="game-currentPlayer" type="select" className="form-control" name="currentPlayerId">
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
                <AvGroup>
                  <Label for="game-player">Player</Label>
                  <AvInput
                    id="game-player"
                    type="select"
                    multiple
                    className="form-control"
                    name="players"
                    value={gameEntity.players && gameEntity.players.map(e => e.id)}
                  >
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
                <Button tag={Link} id="cancel-save" to="/entity/game" replace color="info">
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
  players: storeState.player.entities,
  gameEntity: storeState.game.entity,
  loading: storeState.game.loading,
  updating: storeState.game.updating,
  updateSuccess: storeState.game.updateSuccess
});

const mapDispatchToProps = {
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
)(GameUpdate);
