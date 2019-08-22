import { IPlayer } from 'app/shared/model/scrabbledb2/player.model';
import { IGame } from 'app/shared/model/scrabbledb2/game.model';

export interface IGamePlayer {
  id?: number;
  turnOrder?: number;
  score?: number;
  rack?: string;
  gameId?: number;
  playerId?: number;
  player?: IPlayer;
  game?: IGame;
}

export const defaultValue: Readonly<IGamePlayer> = {};
