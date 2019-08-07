import './scrabble.scss';

import React from 'react';
import { Button } from 'reactstrap';

interface ILetterInputElementProps {
  // num: string;
  setLetterBonus: Function;
  bonus: number;
  disabled: boolean;
}

// interface ILetterInputElementState {
//   // radio: string;
//   // twoActive: boolean;
//   // threeActive: boolean;
//   // blankActive: boolean;
// }

export default class BonusGroup extends React.Component<ILetterInputElementProps, {}> {
  constructor(props) {
    super(props);
    // this.state = {
    //   radio: 'no',
    //   twoActive: false,
    //   threeActive: false,
    //   blankActive: false
    // };
  }

  handleBonusChange = bonus => {
    if (this.props.bonus === bonus) {
      this.props.setLetterBonus(1);
    } else {
      this.props.setLetterBonus(bonus);
    }
  };

  // toggleActiveTwo = () => {
  //   if (!this.state.twoActive && !this.state.threeActive) {
  //     this.setState({ twoActive: true, radio: '2x' }, this.handleBonusChange);
  //   } else if (!this.state.twoActive && this.state.threeActive) {
  //     this.setState({ twoActive: true, threeActive: false, radio: '2x' }, this.handleBonusChange);
  //   } else {
  //     this.setState({ twoActive: false, radio: 'no' }, this.handleBonusChange);
  //   }
  // };
  //
  // toggleActiveThree = () => {
  //   if (!this.state.twoActive && !this.state.threeActive) {
  //     this.setState({ threeActive: true, radio: '3x' }, this.handleBonusChange);
  //   } else if (!this.state.threeActive && this.state.twoActive) {
  //     this.setState({ threeActive: true, twoActive: false, radio: '3x' }, this.handleBonusChange);
  //   } else {
  //     this.setState({ threeActive: false, radio: 'no' }, this.handleBonusChange);
  //   }
  // };
  //
  // toggleActiveBlank = () => {
  //   if (!this.state.blankActive) {
  //     this.setState({ blankActive: true, radio: '0x' }, this.handleBonusChange);
  //   } else {
  //     this.setState({ blankActive: false, radio: 'no' }, this.handleBonusChange);
  //   }
  // };

  render() {
    return (
      <div className="boxAndGroup">
        <div className="radioGroup">
          <Button
            onClick={() => this.handleBonusChange(2)}
            active={this.props.bonus === 2}
            size="sm"
            color="danger"
            disabled={this.props.disabled}
          >
            2x
          </Button>
          <Button
            onClick={() => this.handleBonusChange(3)}
            active={this.props.bonus === 3}
            size="sm"
            color="secondary"
            className="makeItWhite"
            disabled={this.props.disabled}
          >
            3x
          </Button>
          <Button onClick={() => this.handleBonusChange(0)} active={this.props.bonus === 0} color="primary" disabled={this.props.disabled}>
            Blank
          </Button>
        </div>
        <div>Bonus: {this.props.bonus}</div>
      </div>
    );
  }
}
