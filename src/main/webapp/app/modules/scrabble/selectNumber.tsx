// import './scrabble.scss';

import React from 'react';
import { Button } from 'reactstrap';

export default class SelectNumber extends React.Component {
  submitNumber = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        Select number of players
        <form onSubmit={this.submitNumber}>
          <Button className="bigButton">2</Button>
          <Button className="bigButton">3</Button>
          <Button className="bigButton">4</Button>
        </form>
      </div>
    );
  }
}
