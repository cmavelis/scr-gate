import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GamePlayer from './game-player';
import GamePlayerDetail from './game-player-detail';
import GamePlayerUpdate from './game-player-update';
import GamePlayerDeleteDialog from './game-player-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GamePlayerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GamePlayerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GamePlayerDetail} />
      <ErrorBoundaryRoute path={match.url} component={GamePlayer} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={GamePlayerDeleteDialog} />
  </>
);

export default Routes;
