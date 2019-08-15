
import React from 'react';
import _ from 'lodash';
import './player-card.scss';

const player = {
    name: 'Player Name',
    score: 123
    turn: true;
};

export class PlayerCard extends React.Component<{}> {

    render() {
      return (
        <div className="player-card-wrap">
            <div className="player-info-header">
                    <div className="player-card-name">
                            {player.name}
                    </div>
                    <div className="player-card-score">
                            {player.score}
                    </div>
                    <div className="player-card-labels">
                            Points
                    </div>
            </div>
            <div className="turn-info">
                {/* It should display ("Last turn:" + time stamp) when it is not your turn
                and display ("It's your turn!") when it is that player's turn.
                The time stamp should be styled differently than the "It's your turn" message.*/}
                <div className="turn-message">It’s your turn!</div>
            </div>
            <div className="show-tiles-toggle">
                <button className="show-tiles-button">Hide tiles</button>
            </div>
            <div className="tile-rack-wrap">
                <div>(tile rack)</div>
            </div>
            <div className="reset-tiles">
                <button>Reset tiles</button>
            </div>
            <div className="scoring-wrap">
                <div className="column-labels">score</div>
            </div>
        </div>
      );
    }
  }
