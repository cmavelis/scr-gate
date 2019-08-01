import { IGame } from 'app/shared/model/game/game.model';

export interface IPlayer {
  id?: number;
  name?: string;
  games?: IGame[];
}

export const defaultValue: Readonly<IPlayer> = {};
