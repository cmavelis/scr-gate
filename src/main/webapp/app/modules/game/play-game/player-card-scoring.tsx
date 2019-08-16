
import React from 'react';
import _ from 'lodash';
import './player-card-scoring.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

const word = {
    word: 'telephone',
    score: 14,
    spelling: true
};
const turn = {
    score: 20
};

export class PlayerCardScoring extends React.Component<{}> {

    render() {
      return (
        <div className="scoring-wrap">
            <div className="column-labels">
                <div className="column-label-left">New words</div>
                <div className="column-label-right">Spelling</div>
            </div>
            <div className="word-scoring">
                <div className="new-word">
                    {word.word}
                </div>
                <div className="new-word-score">
                    + {word.score}
                </div>
                <div className="new-word-spellcheck">
                    {word.spelling}
                </div>
            </div>
            <div className="submit-play">
                <div className="play-score">
                    +{turn.score} Points
                </div>
                <Button className="submit-play">Submit</Button>
            </div>
        </div>
      );
    }
  }
