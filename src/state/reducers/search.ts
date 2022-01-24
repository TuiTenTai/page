import { Action, ActionType } from 'state/action-types/search';
import { RootState } from '.';

const initState = '';
type SearchState = string;

const searchReducer = (state: SearchState = initState, action: Action): SearchState => {
  switch (action.type) {
    case ActionType.CHANGEVALUE: {
      return action.payload;
    }

    case ActionType.RESETVALUE: {
      return initState;
    }

    default:
      return state;
  }
};

export const searchSelector = (state: RootState): SearchState => state.search;

export default searchReducer;
