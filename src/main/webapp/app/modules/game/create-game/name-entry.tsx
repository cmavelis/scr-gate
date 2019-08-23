import React, { useEffect, useRef, useState } from 'react';

import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export interface INameProps {
  playerNumber: number;
  playerName: string;
  onChange: Function;
  deactivated: boolean;
  exists: boolean;
  onTimeout: Function;
  onIconClick: Function;
}

export const NameEntry: React.FC<INameProps> = props => {
  const [timer, setTimer] = useState(0);
  const [paused, setPaused] = useState(true);

  useInterval(() => {
    if (timer === 0.5) { setPaused(true); props.onTimeout(); }
    if (!paused) { setTimer(timer + 0.5); }
    }, 500);

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
        if (savedCallback && savedCallback.current) { savedCallback.current(); }
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [callback]);
  }

  function handleChange(event) {
    setTimer(0);
    setPaused(false);
    props.onChange(event.target.value, props.playerNumber);
  }

  let iconName;
  const buttonProps = {
    disabled: true,
    color: 'info',
    onClick: () => props.onIconClick()
  };
  if (props.exists) {
    iconName = 'check';
  } else if (props.playerName && props.exists === false) {
    iconName = 'user-plus';
    buttonProps.disabled = false;
  }
  const iconButton =
    <Button {...buttonProps}>
      <FontAwesomeIcon className="name-input-icon" icon={iconName} />
    </Button>;

  const classes = `name-input-group`;
  return (
    <fieldset disabled={props.deactivated}>
      <InputGroup className={classes}>
        <InputGroupAddon className="name-input-prepend" addonType="prepend">
          <InputGroupText className="name-input-prepend-text">Player {props.playerNumber + 1}</InputGroupText>
        </InputGroupAddon>
        <Input
          className="name-input-field"
          value={props.playerName}
          onChange={handleChange}
          placeholder="1-12 Characters"
        />
        {iconName && iconButton}
      </InputGroup>
    </fieldset>
  );
};

export default NameEntry;
