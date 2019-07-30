import './scrabble.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
// import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';

export interface ISelectNumberProp extends StateProps, DispatchProps {}

export class SelectNumber extends React.Component<ISelectNumberProp> {
  // componentDidMount() {
  //   this.props.getSession();
  // }

  submitNumber = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        Select number of players
        <form onSubmit={this.submitNumber}>
          <button className="bigButton">2</button>
          <button className="bigButton">3</button>
          <button className="bigButton">4</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectNumber);
