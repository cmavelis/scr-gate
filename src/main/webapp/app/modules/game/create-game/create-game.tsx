import React from 'react';

import { Col, Container, Input, Row } from 'reactstrap';

import NameEntry from 'app/modules/game/create-game/name-entry';

export interface INameProps {
  playerNames: {
    [key: number]: string;
  };
  gameName: string;
  handlePlayerNameChange: Function;
  handleGameNameChange: (event) => void;
}

export class CreateGame extends React.Component<INameProps, {}> {
  static shouldInputActivate(index, object) {
    // returns true for the nth input if there are n-1 inputs activated (by object having entries)
    const inputsFilled = Object.values(object).filter((n: string) => n.length > 0);
    return inputsFilled.length >= index;
  }

  render() {
    const {
      playerNames,
      gameName,
      handleGameNameChange,
      handlePlayerNameChange
    } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Input
                value={gameName}
                onChange={handleGameNameChange}
              />
              <h5>Enter Player Names</h5>
              {[0, 1, 2, 3].map(n => (
                <NameEntry
                  key={`player-${n}`}
                  playerNumber={n}
                  playerName={playerNames[n]}
                  onChange={handlePlayerNameChange}
                  deactivated={n > 1 && !CreateGame.shouldInputActivate(n, playerNames)}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateGame;
