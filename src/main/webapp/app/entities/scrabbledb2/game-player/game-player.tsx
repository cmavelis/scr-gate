import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './game-player.reducer';
import { IGamePlayer } from 'app/shared/model/scrabbledb2/game-player.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IGamePlayerProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class GamePlayer extends React.Component<IGamePlayerProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { gamePlayerList, match } = this.props;
    return (
      <div>
        <h2 id="game-player-heading">
          Game Players
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Game Player
          </Link>
        </h2>
        <div className="table-responsive">
          {gamePlayerList && gamePlayerList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Turn Order</th>
                  <th>Score</th>
                  <th>Rack</th>
                  <th>Game</th>
                  <th>Player</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {gamePlayerList.map((gamePlayer, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${gamePlayer.id}`} color="link" size="sm">
                        {gamePlayer.id}
                      </Button>
                    </td>
                    <td>{gamePlayer.turnOrder}</td>
                    <td>{gamePlayer.score}</td>
                    <td>{gamePlayer.rack}</td>
                    <td>{gamePlayer.gameId ? <Link to={`game/${gamePlayer.gameId}`}>{gamePlayer.gameId}</Link> : ''}</td>
                    <td>{gamePlayer.playerId ? <Link to={`player/${gamePlayer.playerId}`}>{gamePlayer.playerId}</Link> : ''}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${gamePlayer.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${gamePlayer.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${gamePlayer.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">No Game Players found</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ gamePlayer }: IRootState) => ({
  gamePlayerList: gamePlayer.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePlayer);
