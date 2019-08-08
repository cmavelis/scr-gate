import React from 'react';

import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import CreateGame from 'app/modules/game/create-game/create-game';
import { Link } from 'react-router-dom';

export interface INameProps extends StateProps, DispatchProps {}

export class CreateGamePage extends React.Component<INameProps> {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <CreateGame />
        <Link to="/game/1">
          <Button color="primary" onSubmit={this.handleSubmit}>
            Start Game
          </Button>
        </Link>
        <Link to="/game">
          <Button>Back to Games</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGamePage);
