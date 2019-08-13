import { IGamePlayer } from 'app/shared/model/scrabbledb2/game-player.model';

export interface IPlayer {
  id?: number;
  name?: string;
  gamePlayers?: IGamePlayer[];
}

export const defaultValue: Readonly<IPlayer> = {};
