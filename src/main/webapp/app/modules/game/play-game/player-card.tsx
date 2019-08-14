
import React from 'react';
import _ from 'lodash';
import './player-card.scss';

const player = {
    name: "Player Name",
    score: 123
}

export class PlayerCard extends React.Component<{}> {

    render() {
      return (
        <div className="player-card-wrap">
            <div className="player-info-header">
                    <div className="player-name">
                            {player.name}
                    </div>
                    <div className="player-name">
                            {player.score}
                    </div>
                    <div className="player-name">
                            Points
                    </div>
            </div>
        </div>
      );
    }
  }
