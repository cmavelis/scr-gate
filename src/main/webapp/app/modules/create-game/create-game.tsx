import React from 'react';

import { connect } from 'react-redux';
import NameEntry from 'app/modules/create-game/name-entry';

export interface INameProp extends StateProps, DispatchProps {}

export class CreateGame extends React.Component<INameProp> {
  render() {
    return (
      <div>
        <NameEntry playerCount={99} />
      </div>
    );
  }
}

const mapStateToProps = storeState => ({});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGame);
