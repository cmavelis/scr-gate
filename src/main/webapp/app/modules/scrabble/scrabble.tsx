import './scrabble.scss';

import React from 'react';
import SelectNumber from './selectNumber';

export default class Scrabble extends React.Component {
  render() {
    return (
      <div className="main">
        <SelectNumber />
      </div>
    );
  }
}
