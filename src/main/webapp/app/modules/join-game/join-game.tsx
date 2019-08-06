import React from 'react';

import { connect } from 'react-redux';
import { IGame } from 'app/shared/model/scrabbledev/game.model';

export interface INameProp extends StateProps, DispatchProps {
  games: IGame;
}

export class JoinGame extends React.Component<INameProp> {
  render() {
    const { games } = this.props;

    return (
      <div>
        <h2> Available games </h2>
        <ul>
          {Object.values(games).map(game => (
            <li>
              <span>{game.name}</span>
              <ul>
                {Object.keys(game).map(key => (
                  <li>{`${key}: ${game[key]}`}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  games: storeState.game.entities
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinGame);
