import { Moment } from 'moment';
import { IGamePlayer } from 'app/shared/model/scrabbledb2/game-player.model';

export interface IGame {
  id?: number;
  name?: string;
  state?: string;
  start_time?: Moment;
  gamePlayers?: IGamePlayer[];
}

export const defaultValue: Readonly<IGame> = {};
