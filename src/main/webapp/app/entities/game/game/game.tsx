import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './game.reducer';
import { IGame } from 'app/shared/model/game/game.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IGameProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class Game extends React.Component<IGameProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { gameList, match } = this.props;
    return (
      <div>
        <h2 id="game-heading">
          Games
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Game
          </Link>
        </h2>
        <div className="table-responsive">
          {gameList && gameList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Player Order</th>
                  <th>Game Start</th>
                  <th>Current Player</th>
                  <th>Player</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {gameList.map((game, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${game.id}`} color="link" size="sm">
                        {game.id}
                      </Button>
                    </td>
                    <td>{game.name}</td>
                    <td>{game.playerOrder}</td>
                    <td>
                      <TextFormat type="date" value={game.gameStart} format={APP_DATE_FORMAT} />
                    </td>
                    <td>{game.currentPlayerId ? <Link to={`player/${game.currentPlayerId}`}>{game.currentPlayerId}</Link> : ''}</td>
                    <td>
                      {game.players
                        ? game.players.map((val, j) => (
                            <span key={j}>
                              <Link to={`player/${val.id}`}>{val.id}</Link>
                              {j === game.players.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${game.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${game.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${game.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">No Games found</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ game }: IRootState) => ({
  gameList: game.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
