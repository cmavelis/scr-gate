import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './game.reducer';
import { IGame } from 'app/shared/model/scrabbledev/game.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IGameUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IGameUpdateState {
  isNew: boolean;
}

export class GameUpdate extends React.Component<IGameUpdateProps, IGameUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  saveEntity = (event, errors, values) => {
    values.game_start = convertDateTimeToServer(values.game_start);

    if (errors.length === 0) {
      const { gameEntity } = this.props;
      const entity = {
        ...gameEntity,
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
    this.props.history.push('/entity/game');
  };

  render() {
    const { gameEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="scrabblecompanionApp.scrabbledevGame.home.createOrEditLabel">Create or edit a Game</h2>
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
                      maxLength: { value: 16, errorMessage: 'This field cannot be longer than 16 characters.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="game_startLabel" for="game-game_start">
                    Game Start
                  </Label>
                  <AvInput
                    id="game-game_start"
                    type="datetime-local"
                    className="form-control"
                    name="game_start"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.gameEntity.game_start)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="player1Label" for="game-player1">
                    Player 1
                  </Label>
                  <AvField
                    id="game-player1"
                    type="text"
                    name="player1"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' },
                      maxLength: { value: 12, errorMessage: 'This field cannot be longer than 12 characters.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="player2Label" for="game-player2">
                    Player 2
                  </Label>
                  <AvField
                    id="game-player2"
                    type="text"
                    name="player2"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' },
                      maxLength: { value: 12, errorMessage: 'This field cannot be longer than 12 characters.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="player3Label" for="game-player3">
                    Player 3
                  </Label>
                  <AvField
                    id="game-player3"
                    type="text"
                    name="player3"
                    validate={{
                      maxLength: { value: 12, errorMessage: 'This field cannot be longer than 12 characters.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="player4Label" for="game-player4">
                    Player 4
                  </Label>
                  <AvField
                    id="game-player4"
                    type="text"
                    name="player4"
                    validate={{
                      maxLength: { value: 12, errorMessage: 'This field cannot be longer than 12 characters.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="score1Label" for="game-score1">
                    Score 1
                  </Label>
                  <AvField id="game-score1" type="string" className="form-control" name="score1" />
                </AvGroup>
                <AvGroup>
                  <Label id="score2Label" for="game-score2">
                    Score 2
                  </Label>
                  <AvField id="game-score2" type="string" className="form-control" name="score2" />
                </AvGroup>
                <AvGroup>
                  <Label id="score3Label" for="game-score3">
                    Score 3
                  </Label>
                  <AvField id="game-score3" type="string" className="form-control" name="score3" />
                </AvGroup>
                <AvGroup>
                  <Label id="score4Label" for="game-score4">
                    Score 4
                  </Label>
                  <AvField id="game-score4" type="string" className="form-control" name="score4" />
                </AvGroup>
                <AvGroup>
                  <Label id="nextPlayerLabel" for="game-nextPlayer">
                    Next Player
                  </Label>
                  <AvField id="game-nextPlayer" type="string" className="form-control" name="nextPlayer" />
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
  gameEntity: storeState.game.entity,
  loading: storeState.game.loading,
  updating: storeState.game.updating,
  updateSuccess: storeState.game.updateSuccess
});

const mapDispatchToProps = {
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
