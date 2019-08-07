import './scrabble.scss';

import React from 'react';
import DoubleWord from './doubleWord';
import TripleWord from './tripleWord';
import UsedAllTiles from './usedAllTiles';

interface IWordBonusGroupProps {
  wordBonus: number;
  usedAll: boolean;
  setWordBonus: Function;
}

export default class WordBonusGroup extends React.Component<IWordBonusGroupProps, {}> {
  constructor(props) {
    super(props);
    this.state = {
      wordBonus: 1,
      usedAll: false
    };
    this.handleWordBonus = this.handleWordBonus.bind(this);
  }

  handleWordBonus(bonus) {
    if (this.props.wordBonus === bonus) {
      this.props.setWordBonus(1);
    } else {
      this.props.setWordBonus(bonus);
    }
  }

  render() {
    const { wordBonus } = this.props;
    return (
      <div>
        Enter your letters:
        <form>
          <div className="wordRow">
            <div className="wordMod">
              Double Word
              <DoubleWord bonus={wordBonus} setWord={this.handleWordBonus} />
            </div>
            <div className="wordMod">
              Triple Word
              <TripleWord bonus={wordBonus} setWord={this.handleWordBonus} />
            </div>
            <div className="wordMod">
              Used all tiles
              <UsedAllTiles setWord={this.handleWordBonus} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
