import { IGamePlayer } from 'app/shared/model/scrabbledb2/game-player.model';
import { IPayload } from 'react-jhipster';

export interface IPlayer {
  id?: number;
  name?: string;
  gamePlayers?: IGamePlayer[];
}

export const defaultValue: Readonly<IPlayer> = {};

export interface IPlayerPayload extends IPayload<IPlayer> {
  meta: { index: number };
}

export type IPlayerValidateAction = ((name: string, index: number) => IPlayerPayload | ((dispatch: any) => IPlayerPayload));
