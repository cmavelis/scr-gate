import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'reactstrap';
import axios from 'axios';
import './scores.scss';
// export interface IScoresInputProps extends StateProps, DispatchProps {

interface IScoresInputState {
  playerOneScore: number;
  playerTwoScore: number;
  playerThreeScore: number;
  playerFourScore: number;
  idToken: number;
  game_start: string;
  id: number;
  name: string;
  player1: string;
  player2: string;
  player3: string;
  player4: string;
  score1: number;
  score2: number;
  score3: number;
  score4: number;
  nextPlayer: number;
}

export class ScoresInput extends React.Component<{}, IScoresInputState> {
  constructor(props) {
    super(props);
    this.state = {
      playerOneScore: 0,
      playerTwoScore: 0,
      playerThreeScore: 0,
      playerFourScore: 0,
      idToken: 0,
      id: 0,
      name: '',
      game_start: '',
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      score1: 0,
      score2: 0,
      score3: 0,
      score4: 0,
      nextPlayer: 0
    };
  }

  componentDidMount() {
    axios
      .post(`http://localhost:8080/api/authenticate`, {
        password: 'admin',
        username: 'admin'
      })
      .then(response => {
        this.setState({ idToken: response.data.id_token });
        const headers = {
          headers: {
            Authorization: `Bearer ${this.state.idToken}`
          }
        };
        axios.get(`http://localhost:8080/services/scrabbledev/api/games/1`, headers).then(res => {
          this.setState({
            id: res.data.id,
            name: res.data.name,
            game_start: res.data.game_start,
            player1: res.data.player1,
            player2: res.data.player2,
            player3: res.data.player3,
            player4: res.data.player3,
            score1: res.data.score1,
            score2: res.data.score2,
            score3: res.data.score3,
            score4: res.data.score4,
            nextPlayer: res.data.nextPlayer
          });
        });
      });
  }

  handleChange = e => {
    const target = e.target as HTMLTextAreaElement;
    this.setState({ [target.name]: target.value } as any);
  };

  updateScore = num => {
    // tslint:disable-next-line:no-console
    console.log(num);
    const headers = {
      headers: {
        Authorization: `Bearer ${this.state.idToken}`
      }
    };
    console.log(num, typeof num);
    switch (num) {
      case 1:
        axios
          .put(
            'http://localhost:8080/services/scrabbledev/api/games',
            {
              id: 1,
              name: this.state.name,
              game_start: this.state.game_start,
              player1: this.state.player1,
              player2: this.state.player2,
              player3: this.state.player3,
              player4: this.state.player4,
              score1: (Number(this.state.score1) + Number(this.state.playerOneScore)).toString(),
              score2: this.state.score2,
              score3: this.state.score3,
              score4: this.state.score4,
              nextPlayer: this.state.nextPlayer
            },
            headers
          )
          .then(res => {
            // tslint:disable-next-line:no-console
            console.log(res);
            this.setState({ score1: res.data.score1 });
          })
          .catch(err => {
            // tslint:disable-next-line:no-console
            console.log(err);
          });
        break;
      case 2:
        axios
          .put(
            'http://localhost:8080/services/scrabbledev/api/games/',
            {
              id: 1,
              name: this.state.name,
              game_start: this.state.game_start,
              player1: this.state.player1,
              player2: this.state.player2,
              player3: this.state.player3,
              player4: this.state.player4,
              score1: this.state.score1,
              score2: (Number(this.state.score2) + Number(this.state.playerTwoScore)).toString(),
              score3: this.state.score3,
              score4: this.state.score4,
              nextPlayer: this.state.nextPlayer
            },
            headers
          )
          .then(res => {
            // tslint:disable-next-line:no-console
            console.log(res);
            this.setState({ score2: res.data.score2 });
          })
          .catch(err => {
            // tslint:disable-next-line:no-console
            console.log(err);
          });
        break;

      case 3:
        axios
          .put(
            'http://localhost:8080/services/scrabbledev/api/games/',
            {
              id: 1,
              name: this.state.name,
              game_start: this.state.game_start,
              player1: this.state.player1,
              player2: this.state.player2,
              player3: this.state.player3,
              player4: this.state.player4,
              score1: this.state.score1,
              score2: this.state.score2,
              score3: (Number(this.state.score3) + Number(this.state.playerThreeScore)).toString(),
              score4: this.state.score4,
              nextPlayer: this.state.nextPlayer
            },
            headers
          )
          .then(res => {
            // tslint:disable-next-line:no-console
            console.log(res);
            this.setState({ score3: res.data.score3 });
          })
          .catch(err => {
            // tslint:disable-next-line:no-console
            console.log(err);
          });
        break;
      case 4:
        this.setState({ score4: this.state.score4 + this.state.playerFourScore });
        axios
          .put(
            'http://localhost:8080/services/scrabbledev/api/games/',
            {
              id: 1,
              name: this.state.name,
              game_start: this.state.game_start,
              player1: this.state.player1,
              player2: this.state.player2,
              player3: this.state.player3,
              player4: this.state.player4,
              score1: this.state.score1,
              score2: this.state.score2,
              score3: this.state.score3,
              score4: (Number(this.state.score4) + Number(this.state.playerFourScore)).toString(),
              nextPlayer: this.state.nextPlayer
            },
            headers
          )
          .then(res => {
            // tslint:disable-next-line:no-console
            console.log(res);
            this.setState({ score4: res.data.score4 });
          })
          .catch(err => {
            // tslint:disable-next-line:no-console
            console.log(err);
          });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <div className="display-row">
          <div>
            <h3>{this.state.player1}</h3>
            <h3 className="ps">{this.state.score1}</h3>
            <span className="plus">&#43;</span>
            <Input type="text" name="playerOneScore" value={this.state.playerOneScore} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(1)}>
              Submit Score
            </Button>
          </div>
          <div>
            <h3>{this.state.player2}</h3>
            <h3 className="ps">{this.state.score2}</h3>
            <span className="plus">&#43;</span>
            <Input type="text" name="playerTwoScore" value={this.state.playerTwoScore} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(2)}>
              Submit Score
            </Button>
          </div>
          <div>
            <h3>{this.state.player3}</h3>
            <h3 className="ps">{this.state.score3}</h3>
            <span className="plus">&#43;</span>
            <Input type="text" name="playerThreeScore" value={this.state.playerThreeScore} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(3)}>
              Submit Score
            </Button>
          </div>
          <div>
            <h3>{this.state.player4}</h3>
            <h3 className="ps">{this.state.score4}</h3>
            <span className="plus">&#43;</span>
            <Input type="text" name="playerFourScore" value={this.state.playerFourScore} onChange={this.handleChange} />
            <Button className="button" color="primary" onClick={() => this.updateScore(4)}>
              Submit Score
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ScoresInput);
