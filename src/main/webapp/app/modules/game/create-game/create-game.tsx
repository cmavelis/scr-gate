import React, { useEffect, useRef, useState } from 'react';

import { Button, Col, Container, Input, Row } from 'reactstrap';

import NameEntry from 'app/modules/game/create-game/name-entry-as-hook';

export interface INameProps {
  playerNames: {
    [key: number]: string;
  };
  gameName: string;
  handlePlayerNameChange: Function;
  handleGameNameChange: (event) => void;
}

function Counter() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  function handleClick() {
    setCount(0);
  }

  return (
  <div>
    <h1>
      {count}
    </h1>
    <Button onClick={handleClick}/>
  </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export class CreateGame extends React.Component<INameProps, {}> {
  static shouldInputActivate(index, object) {
    // returns true for the nth input if there are n-1 inputs activated (by object having entries)
    const inputsFilled = Object.values(object).filter((n: string) => n.length > 0);
    return inputsFilled.length >= index;
  }

  // handleChangeWithTimer(wrappedHandler) {
  //
  // }

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
                  exists={false}
                />
              ))}
            </Col>
            <Counter
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateGame;
