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
import { IGame } from 'app/shared/model/scrabbledb2/game.model';
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
    values.start_time = convertDateTimeToServer(values.start_time);

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
            <h2 id="scrabblecompanionApp.scrabbledb2Game.home.createOrEditLabel">Create or edit a Game</h2>
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
                  <AvField id="game-name" type="text" name="name" />
                </AvGroup>
                <AvGroup>
                  <Label id="stateLabel" for="game-state">
                    State
                  </Label>
                  <AvField
                    id="game-state"
                    type="text"
                    name="state"
                    validate={{
                      minLength: { value: 225, errorMessage: 'This field is required to be at least 225 characters.' },
                      maxLength: { value: 225, errorMessage: 'This field cannot be longer than 225 characters.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="start_timeLabel" for="game-start_time">
                    Start Time
                  </Label>
                  <AvInput
                    id="game-start_time"
                    type="datetime-local"
                    className="form-control"
                    name="start_time"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.gameEntity.start_time)}
                  />
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
