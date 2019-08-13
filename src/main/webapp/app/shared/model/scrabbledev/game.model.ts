import { Moment } from 'moment';

export interface IGame {
  id?: number;
  name?: string;
  game_start?: Moment;
  player1?: string;
  player2?: string;
  player3?: string;
  player4?: string;
  score1?: number;
  score2?: number;
  score3?: number;
  score4?: number;
  nextPlayer?: number;
}

export const defaultValue: Readonly<IGame> = {};
