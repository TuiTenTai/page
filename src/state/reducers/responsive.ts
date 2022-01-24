import { Action, ActionType } from 'state/action-types/responsive';
import { RootState } from '.';

const initState = window.innerWidth >= 600 ? false : true;
type ResponsiveState = boolean;

const isResponsiveReducer = (
  state: ResponsiveState = initState,
  action: Action
): ResponsiveState => {
  switch (action.type) {
    case ActionType.CHANGEVALUE: {
      return window.innerWidth >= 600 ? false : true;
    }

    default:
      return state;
  }
};

export const isResponsiveSelector = (state: RootState): ResponsiveState => state.isResponsive;

export default isResponsiveReducer;
