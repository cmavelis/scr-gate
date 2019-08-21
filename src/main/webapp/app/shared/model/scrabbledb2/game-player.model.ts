export interface IGamePlayer {
  id?: number;
  turnOrder?: number;
  score?: number;
  rack?: string;
  gameId?: number;
  playerId?: number;
  player?: object;
  game?: object;
}

export const defaultValue: Readonly<IGamePlayer> = {};
