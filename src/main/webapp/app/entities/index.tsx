import React from 'react';
import { Switch } from 'react-router-dom';

// tslint:disable-next-line:no-unused-variable
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GameOld from './scrabbledev/game'; // TODO: remove dev db
import Game from './scrabbledb2/game';
import GamePlayer from './scrabbledb2/game-player';
import Player from './scrabbledb2/player';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}/game`} component={Game} />
      <ErrorBoundaryRoute path={`${match.url}/player`} component={Player} />
      <ErrorBoundaryRoute path={`${match.url}/game-player`} component={GamePlayer} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
