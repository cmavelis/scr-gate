import './scrabble.scss';

import React from 'react';

export default class SelectNumber extends React.Component {
  submitNumber = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        Select number of players
        <form onSubmit={this.submitNumber}>
          <button className="bigButton">2</button>
          <button className="bigButton">3</button>
          <button className="bigButton">4</button>
        </form>
      </div>
    );
  }
}
