import { Data, Action, ActionType } from 'state/action-types/data';
import { RootState } from '.';

const initState = {
  pending: true,
  data: [],
  err: null,
};

export interface DataState {
  pending: boolean;
  data: Data[];
  err: unknown;
}

const dataReducer = (state: DataState = initState, action: Action): DataState => {
  switch (action.type) {
    case ActionType.FETCHSUCCES: {
      return {
        ...state,
        data: action.payload,
        pending: false,
      };
    }

    case ActionType.FETCHFAIL: {
      return {
        ...state,
        pending: false,
        err: action.payload,
      };
    }

    case ActionType.ADDNEW: {
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    }

    case ActionType.UPDATE: {
      const cloneData = [...state.data];
      const oldDataIndex = cloneData.indexOf(
        cloneData.filter((item) => item._id === action.payload._id)[0]
      );
      cloneData[oldDataIndex] = action.payload;
      return {
        ...state,
        data: cloneData,
      };
    }

    case ActionType.DELETE: {
      const cloneData = [...state.data];
      const oldDataIndex = cloneData.indexOf(
        cloneData.filter((item) => item._id === action.payload)[0]
      );
      cloneData.splice(oldDataIndex, 1);
      return {
        ...state,
        data: cloneData,
      };
    }

    default:
      return state;
  }
};

export const dataSelector = (state: RootState): Data[] => state.data.data;
export const pendingSelector = (state: RootState): boolean => state.data.pending;
export const errSelector = (state: RootState): unknown => state.data.err;

export default dataReducer;
