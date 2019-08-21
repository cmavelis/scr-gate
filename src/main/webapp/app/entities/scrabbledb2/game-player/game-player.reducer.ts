import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity, cleanParentEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IGamePlayer, defaultValue } from 'app/shared/model/scrabbledb2/game-player.model';

export const ACTION_TYPES = {
  FETCH_GAMEPLAYER_LIST: 'gamePlayer/FETCH_GAMEPLAYER_LIST',
  FETCH_GAMEPLAYER: 'gamePlayer/FETCH_GAMEPLAYER',
  CREATE_GAMEPLAYER: 'gamePlayer/CREATE_GAMEPLAYER',
  UPDATE_GAMEPLAYER: 'gamePlayer/UPDATE_GAMEPLAYER',
  DELETE_GAMEPLAYER: 'gamePlayer/DELETE_GAMEPLAYER',
  RESET: 'gamePlayer/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IGamePlayer>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type GamePlayerState = Readonly<typeof initialState>;

// Reducer

export default (state: GamePlayerState = initialState, action): GamePlayerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_GAMEPLAYER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_GAMEPLAYER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_GAMEPLAYER):
    case REQUEST(ACTION_TYPES.UPDATE_GAMEPLAYER):
    case REQUEST(ACTION_TYPES.DELETE_GAMEPLAYER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_GAMEPLAYER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_GAMEPLAYER):
    case FAILURE(ACTION_TYPES.CREATE_GAMEPLAYER):
    case FAILURE(ACTION_TYPES.UPDATE_GAMEPLAYER):
    case FAILURE(ACTION_TYPES.DELETE_GAMEPLAYER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_GAMEPLAYER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_GAMEPLAYER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_GAMEPLAYER):
    case SUCCESS(ACTION_TYPES.UPDATE_GAMEPLAYER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_GAMEPLAYER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'services/scrabbledb2/api/game-players';

// Actions

export const getEntities: ICrudGetAllAction<IGamePlayer> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_GAMEPLAYER_LIST,
  payload: axios.get<IGamePlayer>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IGamePlayer> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_GAMEPLAYER,
    payload: axios.get<IGamePlayer>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IGamePlayer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_GAMEPLAYER,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IGamePlayer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_GAMEPLAYER,
    payload: axios.put(apiUrl, cleanParentEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IGamePlayer> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_GAMEPLAYER,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
