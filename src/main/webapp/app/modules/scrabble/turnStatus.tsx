import React from 'react';
import { Button } from 'reactstrap';

interface IPerson {
  name: string;
  order: number;
  activeTurn: boolean;
}

interface ITurnStatusState {
  players: IPerson[];
}

export default class TurnStatus extends React.Component<{}, ITurnStatusState> {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          order: 1,
          name: 'Timmy',
          activeTurn: true
        },
        {
          order: 2,
          name: 'Mary',
          activeTurn: false
        },
        {
          order: 3,
          name: 'Sam',
          activeTurn: false
        },
        {
          order: 4,
          name: 'Asia',
          activeTurn: false
        }
      ]
    };
  }

  goToNextTurn = () => {
    let currentIndex = this.state.players.findIndex(player => {
      return player.activeTurn === true;
    });
    const newPlayers = this.state.players.slice();
    newPlayers[currentIndex].activeTurn = false;

    let nextIndex = ++currentIndex;
    if (nextIndex === this.state.players.length) {
      nextIndex = 0;
    }
    newPlayers[nextIndex].activeTurn = true;
    this.setState({ players: [...newPlayers] });
  };

  render() {
    return (
      <div>
        {this.state.players.map((player: IPerson) => (
          <div>
            {player.activeTurn ? (
              <h2 className="activeTurn">
                {player.name} {'<--'}
              </h2>
            ) : (
              <h2>{player.name}</h2>
            )}
          </div>
        ))}
        <Button onClick={this.goToNextTurn}>Next turn</Button>
      </div>
    );
  }
}
