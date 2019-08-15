import './name-entry.scss'; // TODO: remove local import

import React, { useEffect, useRef, useState } from 'react';

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
export interface INameProps {
  playerNumber: number;
  playerName: string;
  onChange: Function;
  deactivated: boolean;
  exists: boolean;
  onTimeout: Function;
}

const NameEntry: React.FC<INameProps> = props => {
  const [timer, setTimer] = useState(0);
  const [paused, setPaused] = useState(true);

  useInterval(() => {
    if (timer === 2) { setPaused(true); props.onTimeout(); }
    if (!paused) { setTimer(timer + 1); }
    }, 1000);

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

  function handleChange(event) {
    setTimer(0);
    setPaused(false);
    props.onChange(event.target.value, props.playerNumber);
  }

  const classes = `input-hack ${props.deactivated ? 'deactivated' : ''}`;
  return (
    <fieldset className={classes} disabled={props.deactivated}>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Player {props.playerNumber + 1}</InputGroupText>
        </InputGroupAddon>
        <Input value={props.playerName} onChange={handleChange} placeholder="1-12 Characters" />
        <span>{props.exists ? 'exists' : 'create new'}</span>
        <br/>
        <span>{paused ? '      paused' : '      unpaused'}</span>
      </InputGroup>
    </fieldset>
  );
};

export default NameEntry;
