import './scrabble.scss';

import React from 'react';

export default class WordCalculation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: '',
      14: '',
      15: ''
    };
  }

  submitNumber = e => {
    e.preventDefault();
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        Input a word
        <form onSubmit={this.submitNumber} className="wordColumn">
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="1" placeholder="1" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="1m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="1m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="1m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="1m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="1m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="2" placeholder="2" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="2m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="2m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="2m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="2m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="2m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="3" placeholder="3" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="3m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="3m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="3m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="3m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="3m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="4" placeholder="4" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="4m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="4m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="4m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="4m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="4m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="5" placeholder="5" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="5m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="5m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="5m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="5m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="5m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="6" placeholder="6" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="6m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="6m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="6m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="6m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="6m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="7" placeholder="7" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="7m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="7m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="7m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="7m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="7m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="8" placeholder="8" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="8m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="8m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="8m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="8m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="8m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="9" placeholder="9" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="9m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="9m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="9m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="9m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="9m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="10" placeholder="10" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="10m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="10m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="10m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="10m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="10m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="11" placeholder="11" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="11m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="11m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="11m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="11m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="11m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="12" placeholder="12" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="12m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="12m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="12m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="12m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="12m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="13" placeholder="13" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="13m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="13m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="13m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="13m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="13m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="14" placeholder="14" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="14m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="14m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="14m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="14m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="14m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <div className="boxAndGroup">
            <input className="bigInput" type="text" name="15" placeholder="15" onChange={this.changeHandler} />
            <div className="radioGroup">
              <input type="radio" name="15m" value="no" checked />
              &nbsp;&nbsp;No modifier&nbsp;&nbsp;
              <input type="radio" name="15m" value="2l" />
              &nbsp;&nbsp;2x letter&nbsp;&nbsp;
              <input type="radio" name="15m" value="2w" />
              &nbsp;&nbsp;2x word&nbsp;&nbsp;
              <input type="radio" name="15m" value="3l" />
              &nbsp;&nbsp;3x letter&nbsp;&nbsp;
              <input type="radio" name="15m" value="3w" />
              &nbsp;&nbsp;3x word
            </div>
          </div>
          <button type="submit" className="smallBtn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
