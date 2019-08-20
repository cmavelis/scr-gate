import { Moment } from 'moment';
import { IGamePlayer } from 'app/shared/model/scrabbledb2/game-player.model';
import { IPlayer } from 'app/shared/model/scrabbledb2/player.model';

export interface IGame {
  id?: number;
  name?: string;
  state?: string;
  start_time?: Moment;
  gamePlayers?: IGamePlayer[];
  playersToAdd?: IPlayer[];
}

export const defaultValue: Readonly<IGame> = {};
