import { Moment } from 'moment';
import { IPlayer } from 'app/shared/model/game/player.model';

export interface IGame {
  id?: number;
  name?: string;
  playerOrder?: string;
  gameStart?: Moment;
  currentPlayerId?: number;
  players?: IPlayer[];
}

export const defaultValue: Readonly<IGame> = {};
