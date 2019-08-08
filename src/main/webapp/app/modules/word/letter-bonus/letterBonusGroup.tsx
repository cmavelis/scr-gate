import React from 'react';
import { Button } from 'reactstrap';

interface ILetterBonusGroupProps {
  setLetterBonus: Function;
  bonus: number;
  disabled: boolean;
}

export default class LetterBonusGroup extends React.Component<ILetterBonusGroupProps, {}> {
  handleBonusChange = bonus => {
    if (this.props.bonus === bonus) {
      this.props.setLetterBonus(1);
    } else {
      this.props.setLetterBonus(bonus);
    }
  };

  render() {
    return (
      <div className="boxAndGroup">
        <div className="radioGroup">
          <Button
            className="bonus-toggle-small"
            onClick={() => this.handleBonusChange(2)}
            active={this.props.bonus === 2}
            size="sm"
            disabled={this.props.disabled}
          >
            2x
          </Button>
          <Button
            className="bonus-toggle-small"
            onClick={() => this.handleBonusChange(3)}
            active={this.props.bonus === 3}
            size="sm"
            disabled={this.props.disabled}
          >
            3x
          </Button>
          <Button
            className="bonus-toggle-wide"
            onClick={() => this.handleBonusChange(0)}
            active={this.props.bonus === 0}
            disabled={this.props.disabled}
          >
            Blank
          </Button>
        </div>
        <div>Bonus: {this.props.bonus}</div>
      </div>
    );
  }
}
