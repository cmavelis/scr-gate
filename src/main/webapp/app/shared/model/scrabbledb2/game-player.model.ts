export interface IGamePlayer {
  id?: number;
  turnOrder?: number;
  score?: number;
  rack?: string;
  gameId?: number;
  playerId?: number;
}

export const defaultValue: Readonly<IGamePlayer> = {};
