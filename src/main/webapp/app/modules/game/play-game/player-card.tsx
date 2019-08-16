import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';
import { PlayerCardScoring } from './player-card-scoring';

const player = {
  name: 'Player Name',
  score: 123,
  turn: true
};
const word = {
  word: 'telephone',
  score: 14,
  spelling: true
};
const turn = {
  score: 20
};

export class PlayerCard extends React.Component<{}> {
  render() {
    return (
      <div className="player-card-wrap">
        <div className="player-info-header">
          <div className="player-card-name">{player.name}</div>
          <div className="player-card-score">{player.score}</div>
          <div className="player-card-labels">Points</div>
        </div>
        <div className="turn-info">
          {/* It should display ("Last turn:" + time stamp) when it is not your turn
                and display ("It's your turn!") when it is that player's turn.
                The time stamp should be styled differently than the "It's your turn" message.*/}
          <div className="turn-message">It’s your turn!</div>
        </div>
        <div className="show-tiles-toggle">
          <Button className="show-tiles-button">Hide tiles</Button>
        </div>
        <div className="tile-rack-wrap">
          <div>(tile rack)</div>
        </div>
        <div className="reset-tiles">
          <Button>Reset tiles</Button>
        </div>
        <PlayerCardScoring />
        <div className="pass-redraw">
          {/* TODO: make text+icon button template */}
          <Button className="button-text-icon">
            <div className="button-text-icon-text">Pass/Redraw</div>
            <FontAwesomeIcon icon="undo" className="button-text-icon-icon" />
          </Button>
        </div>
      </div>
    );
  }
}
